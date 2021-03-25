import "./Roadmap.scss";

function Roadmap({ children }) {
	return <section className="Roadmap">{children}</section>;
}

function Item({ children }) {
	return <article className="Roadmap__item">{children}</article>;
}
Roadmap.Item = Item;

function Row({ children, space }) {
	return (
		<div className={`Roadmap__row${space ? " Roadmap__row--space" : ""}`}>
			{children}
		</div>
	);
}
Roadmap.Row = Row;

function Text({ children }) {
	return <p className="Roadmap__text">{children}</p>;
}
Roadmap.Text = Text;

function Date({ children }) {
	return <p className="Roadmap__date">{children}</p>;
}
Roadmap.Date = Date;

function Dot({ color = "white", small }) {
	if (small) {
		return (
			<>
				<div
					className={`Roadmap__dot Roadmap__dot--${color} Roadmap__dot--small`}
				></div>
				<div
					className={`Roadmap__dot Roadmap__dot--${color} Roadmap__dot--small`}
				></div>
				<div
					className={`Roadmap__dot Roadmap__dot--${color} Roadmap__dot--small`}
				></div>
			</>
		);
	}
	return <div className={`Roadmap__dot Roadmap__dot--${color}`}></div>;
}
Roadmap.Dot = Dot;

function Line() {
	return <div className="Roadmap__line"></div>;
}
Roadmap.Line = Line;

export default Roadmap;
