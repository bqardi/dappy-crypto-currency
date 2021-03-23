import "./Menu.scss";

function Menu({ children, className = "", ...other }) {
	return (
		<nav className={`Menu ${className}`} {...other}>
			{children}
		</nav>
	);
}

function Item({ to, children, margin, label }) {
	return (
		<a className="Menu__item" href={to} aria-label={label} style={{ margin }}>
			{children}
		</a>
	);
}
Menu.Item = Item;

export default Menu;
