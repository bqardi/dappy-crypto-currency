import "./Button.scss";

function Button({ title }) {
	return (
		<button
			// eslint-disable-next-line
			onClick={() => gtag("event", "cta", { type: "A", cta: title })}
			className="Button"
		>
			{title}
		</button>
	);
}

export default Button;
