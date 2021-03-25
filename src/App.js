import Info from "./components/Info";
import Hero from "./components/Hero";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Form from "./components/Form";
import validate from "./components/Validation";
import Menu from "./components/Menu";
import CookieConsent from "./components/CookieConsent";
import RoadmapLayout from "./components/RoadmapLayout";
import "./App.scss";

function App() {
	return (
		<>
			<Heading />
			<Hero />
			<main className="App__main">
				<Info size="small">
					<p className="App__text">
						Dappy is light wallet powered by Blockstack. It uses Gaia
						decentralized storage and encryption option. Dappy doesn't store or
						proceed user private key, the all data are securely stored in the
						Gaia. Dappy was created by the BC Net that trust in crypto and
						decentralized applications.
					</p>
				</Info>
				<Info title="Multi-currencies" imgPath="./images/multi-currencies.svg">
					<p className="App__text">
						Receive, send and store the most popular coins, like Bitcoin,
						Ethereum, Litecoin, Dash and lots more.
					</p>
				</Info>
				<Info
					title="Free and open source"
					imgPath="./images/free-and-open-source.svg"
				>
					<p className="App__text">
						Fully open and transparent wallet. Our code is{" "}
						<strong>open source</strong> and trusted by Blockstack Team.
					</p>
				</Info>
				<Info title="Tokens" imgPath="./images/tokens.svg">
					<p className="App__text">
						Full support for any tokens on Ethereum network. Bitcoin tokens
						(Omnilayer) is coming soon.
					</p>
				</Info>
				<Info size="large" title="Roadmap">
					<RoadmapLayout />
				</Info>
				<Info title="Exchange" imgPath="./images/exchange.svg" swap>
					<p className="App__text">
						In-app exchange is supported by ShapeShift, it allows to convert
						coins to each other in the most intuitive and easiest way.
					</p>
				</Info>
			</main>
			<Footer>
				<Footer.Item title="About">
					<Footer.List>
						<a className="App__listItemLink" href="./introducing">
							Introducing
						</a>
						<a className="App__listItemLink" href="./terms-of-service">
							Terms of Service
						</a>
						<a className="App__listItemLink" href="./privacy-policy">
							Privacy Policy
						</a>
					</Footer.List>
				</Footer.Item>
				<Footer.Item title="Contact">
					<Footer.List>
						<a className="App__link" href="mailto:hello@dappywallet.com">
							hello@dappywallet.com
						</a>
						<Menu style={{ marginTop: "2em" }}>
							<Menu.Item margin="0 3px" to="./twitter" label="Twitter">
								<img src="./images/social/twitter.svg" alt="Twitter" />
							</Menu.Item>
							<Menu.Item margin="0 3px" to="./social-ph" label="Social PH">
								<img src="./images/social/social-ph.svg" alt="Social PH" />
							</Menu.Item>
							<Menu.Item margin="0 3px" to="./github" label="GitHub">
								<img src="./images/social/github.svg" alt="GitHub" />
							</Menu.Item>
							<Menu.Item margin="0 3px" to="./reddit" label="Reddit">
								<img src="./images/social/reddit.svg" alt="Reddit" />
							</Menu.Item>
							<Menu.Item margin="0 3px" to="./bitcointalk" label="Bitcoin talk">
								<img src="./images/social/bitcointalk.svg" alt="Bitcoin talk" />
							</Menu.Item>
							<Menu.Item margin="0 3px" to="./blockstack" label="Blockstack">
								<img src="./images/social/blockstack.svg" alt="Blockstack" />
							</Menu.Item>
						</Menu>
					</Footer.List>
				</Footer.Item>
				<Footer.Item title="Newsletter" span>
					Please enter your e-mail if you want to recieve updates.
					<Form className="App__form" action="./subscribed">
						<label className="App__formLabel" htmlFor="email">
							Email
						</label>
						<Form.ErrorMsg htmlFor="email" className="App__formError" />
						<div className="App__formContainer">
							<Form.Input
								className="App__formInput"
								id="email"
								type="email"
								name="email"
								placeholder="Your e-mail"
								validation={(item) =>
									validate(item)
										.min(6, "A minimum of 6 characters are required!")
										.isEmail("Please enter a valid email address!")
								}
							/>
							<button className="App__formSubmit" type="submit">
								Subscribe
							</button>
						</div>
					</Form>
				</Footer.Item>
			</Footer>
			<CookieConsent />
		</>
	);
}

export default App;
