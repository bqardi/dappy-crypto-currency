import "./Info.scss";

function Info({ title, imgPath, children, size = "" }) {
	return (
		<article className={`Info${size && " Info--" + size}`}>
			{title && <h2 className="Info__title">{title}</h2>}
			{imgPath && (
				<img src={imgPath} alt={title || "Graphics"} className="Info__image" />
			)}
			{children && <p className="Info__text">{children}</p>}
		</article>
	);
}

export default Info;
