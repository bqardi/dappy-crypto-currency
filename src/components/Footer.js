import "./Footer.scss";

function Footer({ children, list }) {
	return (
		<footer className="Footer">
			{list ? (
				<ul>
					{children.map((child) => {
						return <li className="Footer__list">{child}</li>;
					})}
				</ul>
			) : (
				children
			)}
		</footer>
	);
}

function Item({ title, children, span = "" }) {
	return (
		<div className={`Footer__item${span && " Footer__item--span"}`}>
			<h3 className="Footer__title">{title}</h3>
			<div className="Footer__content">{children}</div>
		</div>
	);
}
Footer.Item = Item;

function List({ children }) {
	return (
		<ul className="Footer__list">
			{children.length ? (
				children.map((child, index) => {
					return (
						<li key={index} className="Footer__listItem">
							{child}
						</li>
					);
				})
			) : (
				<li className="Footer__listItem">{children}</li>
			)}
		</ul>
	);
}
Footer.List = List;

export default Footer;
