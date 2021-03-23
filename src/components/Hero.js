import Button from "./Button";
import "./Hero.scss";

function Hero() {
	return (
		<article className="Hero">
			<div className="Hero__content">
				<h1 className="Hero__title">Create your first decentralized wallet</h1>
				<p className="Hero__text">
					The easiest way to manage multiple cryptocurrency assets
				</p>
				<Button title="Create Wallet" />
			</div>
			<img
				className="Hero__image"
				src="./images/decentralized-wallet.svg"
				alt="Decentralized wallet"
			/>
		</article>
	);
}

export default Hero;
