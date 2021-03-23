import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

var ScopedState = createContext({});

function Form({ children, onSubmit, ...other }) {
	var [errorState, setErrorState] = useState(null);
	var [submitted, setSubmitted] = useState(null);

	function submit(e) {
		if (submitted === null) {
			var obj = {};
			for (let i = 0; i < e.target.length; i++) {
				const item = e.target[i];
				if (item.tagName === "INPUT" && item.value === "") {
					obj[item.id] = true;
				}
			}
			e.preventDefault();
			setSubmitted(obj);
			return;
		}

		if (errorState.errorCount) {
			e.preventDefault();
			setSubmitted((prev) => {
				var obj = { ...prev };
				for (const key in obj) {
					obj[key] = true;
				}
				return obj;
			});
			return;
		}
		onSubmit && onSubmit(e, errorState);
	}

	return (
		<form onSubmit={submit} {...other} noValidate>
			<ScopedState.Provider
				value={{ submitted, setSubmitted, errorState, setErrorState }}
			>
				{children}
			</ScopedState.Provider>
		</form>
	);
}

function Input({ id, onChange, validation, ...other }) {
	var { setSubmitted, setErrorState } = useContext(ScopedState);

	var validate = useCallback(
		(value) => {
			if (!validation) return;

			var val = validation({ id, value });
			if (val) {
				setStateID(setErrorState, { id, value: val, errorCount: true });
			}
		},
		[validation, id, setErrorState]
	);

	useEffect(() => {
		validate("");
	}, [validate]);

	function change(e) {
		setStateID(setSubmitted, { id, value: false });
		validation && validate(e.target.value);
		onChange && onChange(e);
	}

	return <input id={id} onChange={change} {...other} />;
}
Form.Input = Input;

function ErrorMsg({ htmlFor, ...other }) {
	var { submitted, errorState } = useContext(ScopedState);
	return submitted &&
		submitted[htmlFor] &&
		errorState[htmlFor]?.errors?.length ? (
		<span {...other}>{errorState[htmlFor].errors[0].msg}</span>
	) : null;
}
Form.ErrorMsg = ErrorMsg;

function setStateID(setState, options) {
	var { id, value, errorCount = false } = options;
	setState((prev) => {
		var obj = {
			...prev,
			[id]: value,
		};
		errorCount && (obj.errorCount = getErrorCount(obj));
		return obj;
	});
}
function getErrorCount(obj) {
	var errorCount = 0;
	for (const key in obj) {
		if (key !== "errorCount") {
			errorCount += obj[key]?.errors?.length || 0;
		}
	}
	return errorCount;
}

export default Form;
