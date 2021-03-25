import { createContext, useContext, useEffect } from "react";
import "./Modal.scss";

var OpenContext = createContext();

function useOpenContext(component, hasChildren = false) {
	var context = useContext(OpenContext);
	if (!context) {
		let comp = `<Modal.${component}${
			hasChildren ? `></Modal.${component}>` : "/>"
		}`;
		throw new Error(
			`The modal sub-component (Modal.${component}) must be rendered inside the Modal component (<Modal>${comp}</Modal>)`
		);
	}
	return context;
}

function Modal({
	state,
	className,
	children,
	options = { escKey: true, backPress: true },
	...other
}) {
	var [open, setOpen] = state;

	useEffect(() => {
		window.addEventListener("keyup", keyPressHandler);

		function keyPressHandler(e) {
			if (e.key === "Escape" && options.escKey) {
				setOpen(false);
			}
		}
		return () => window.removeEventListener("keyup", keyPressHandler);
	}, [options.escKey, setOpen]);

	function backgroundHandler() {
		if (options.backPress) {
			setOpen(false);
		}
	}

	return (
		<OpenContext.Provider value={{ open, setOpen }}>
			<div
				onClick={backgroundHandler}
				className={`${className ? className + " " : ""}Modal`}
				open={open}
				{...other}
			>
				{children}
			</div>
		</OpenContext.Provider>
	);
}

var Window = ({ children, className, tag = "aside", ...other }) => {
	useOpenContext("Window", true);
	var CustomTag = tag;
	return (
		<CustomTag
			className={`Modal__Window${className ? " " + className : ""}`}
			onClick={(e) => e.stopPropagation()}
			{...other}
		>
			{children}
		</CustomTag>
	);
};
Modal.Window = Window;

var CloseIcon = ({ children, onClick, className, ...other }) => {
	var { setOpen } = useOpenContext("CloseIcon");
	var content = children || (
		<svg viewBox="0 0 24 24">
			<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
		</svg>
	);

	function onClickHandler(e) {
		onClick && onClick(e);
		!e.defaultPrevented && setOpen(false);
	}

	return (
		<button
			onClick={onClickHandler}
			className={`Modal__CloseIcon${className ? "" + className : ""}`}
			{...other}
		>
			{content}
		</button>
	);
};
Modal.CloseIcon = CloseIcon;

var CloseButton = ({ children, onClick, ...other }) => {
	var { setOpen } = useOpenContext("CloseButton");

	function onClickHandler(e) {
		onClick && onClick(e);
		!e.defaultPrevented && setOpen(false);
	}

	return (
		<button onClick={onClickHandler} {...other}>
			{children}
		</button>
	);
};
Modal.CloseButton = CloseButton;

export default Modal;
