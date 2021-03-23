import Burger from "./Burger";
import "./Heading.scss";
import Menu from "./Menu";

function Heading() {
	return (
		<header className="Heading">
			<a href="./" aria-label="Logo - Main page">
				<img className="Heading__image" src="./images/logo.svg" alt="Logo" />
			</a>
			<Burger className="Burger">
				<Burger.Content className="Burger__content">
					<Menu className="Heading__push">
						<Menu.Item to="./how-it-works">How it works</Menu.Item>
						<Menu.Item to="./blog">Blog</Menu.Item>
						<Menu.Item to="./support">Support</Menu.Item>
					</Menu>
					<Menu className="Heading__social">
						<Menu.Item to="./twitter" label="Twitter">
							<img src="./images/social/twitter.svg" alt="Twitter" />
						</Menu.Item>
						<Menu.Item to="./social-ph" label="Social PH">
							<img src="./images/social/social-ph.svg" alt="Social PH" />
						</Menu.Item>
						<Menu.Item to="./github" label="GitHub">
							<img src="./images/social/github.svg" alt="GitHub" />
						</Menu.Item>
						<Menu.Item to="./reddit" label="Reddit">
							<img src="./images/social/reddit.svg" alt="Reddit" />
						</Menu.Item>
						<Menu.Item to="./bitcointalk" label="Bitcoin talk">
							<img src="./images/social/bitcointalk.svg" alt="Bitcoin talk" />
						</Menu.Item>
						<Menu.Item to="./blockstack" label="Blockstack">
							<img src="./images/social/blockstack.svg" alt="Blockstack" />
						</Menu.Item>
					</Menu>
				</Burger.Content>
				{/*
					Adding a className to <Burger.Button /> will remove the inline styling
					and give full styling control to the developer, but visually, the icon
					will disappear! This is because the icon is an svg and without a width/height
					on the parent (the button) the svg will be 0px in both width and height.
					Just something to remember.
				*/}
				<Burger.Button className="Burger__button" />
			</Burger>
		</header>
	);
}

export default Heading;
