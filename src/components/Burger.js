import { createContext, useContext, useState } from "react";

var BurgerContext = createContext();

function useBurgerContext() {
	var context = useContext(BurgerContext);
	if (!context) {
		throw new Error(
			"Burger components must be rendered inside <Burger></Burger>!"
		);
	}
	return context;
}

function Burger({ children, ...other }) {
	var [open, setOpen] = useState(false);
	return (
		<BurgerContext.Provider value={{ open, setOpen }}>
			<div {...other}>{children}</div>
		</BurgerContext.Provider>
	);
}

function Button({ onClick, className, children, ...other }) {
	var { open, setOpen } = useBurgerContext();

	function clickHandler(e) {
		setOpen(!open);
		onClick && onClick(e);
	}

	return (
		<button
			onClick={clickHandler}
			className={className}
			style={
				className
					? null
					: {
							width: "48px",
							height: "48px",
							border: "none",
							backgroundColor: "transparent",
					  }
			}
			{...other}
		>
			{children || (
				<svg viewBox="0 0 24 24">
					<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
				</svg>
			)}
		</button>
	);
}
Burger.Button = Button;

function Content({ children, ...other }) {
	var { open } = useBurgerContext();

	return (
		<div {...other} open={open}>
			{children}
		</div>
	);
}
Burger.Content = Content;

export default Burger;
