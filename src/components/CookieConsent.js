import Modal from "./Modal";
import "./CookieConsent.scss";
import { useEffect, useState } from "react";
import setCookies from "../helpers/setCookies";

function CookieConsent(){
	var [open, setOpen] = useState(false);
	var [analytics, setAnalytics] = useState(false);

	var options = {
		escKey: false,
		backPress: false
	}

	useEffect(() => {
		var cookie = cookieToObject(document.cookie);

		if (cookie.landingpage) {
			return;
		}
		
		setOpen(true);
		document.body.classList.add("modal--open");
	}, []);
	
	function cookieToObject(cookie){
		var obj = {};
		
		cookie?.split("; ").forEach(arr => {
			const item = arr.split("=");
			item[0] && (obj[item[0]] = item[1]);
		});
		return obj;
	}

	function accept(e){
		var now = Date.now() + 60 * 60 * 24 * 1000;
		var expirationDate = new Date(now).toUTCString();
		var payload = {
			acceptneccesary: true,
			acceptanalytics: analytics
		}
		setCookies(payload);
		document.cookie = `landingpage=${JSON.stringify(payload)}; expires=${expirationDate}; path="/";`;
		document.body.classList.remove("modal--open");
	}

	function acceptAll(e){
		var now = Date.now() + 60 * 60 * 24 * 1000;
		var expirationDate = new Date(now).toUTCString();
		var payload = {
			acceptneccesary: true,
			acceptanalytics: true
		}
		setCookies(payload);
		document.cookie = `landingpage=${JSON.stringify(payload)}; expires=${expirationDate}; path="/";`;
		document.body.classList.remove("modal--open");
	}

	return (
		<Modal className="CookieConsent" state={[open, setOpen]} options={options}>
			<Modal.Window className="CookieConsent__window">
				<header className="CookieConsent__header">
					<h1 className="CookieConsent__title">Cookie settings</h1>
				</header>
				<article className="CookieConsent__content">
					<table className="CookieConsent__table">
						<tbody>
							<tr>
								<td>
									<input id="cookie-necessary" className="CookieConsent__input" type="checkbox" name="" checked disabled/>
									<label htmlFor="cookie-necessary" className="CookieConsent__toggle" tabIndex="0" />
								</td>
								<td>
									<p>Necessary cookies. These are cookies which are necessary for this website to function properly.</p>
								</td>
							</tr>
							<tr>
								<td>
									<input onChange={e => setAnalytics(e.currentTarget.checked)} id="cookie-analytics" className="CookieConsent__input" type="checkbox" name=""/>
									<label htmlFor="cookie-analytics" className="CookieConsent__toggle" tabIndex="0" />
								</td>
								<td>
									<p>Allow analytics. We use thirdparty cookies from Google, to track and monitor the website usage from our users. We do this to be able to improve the site and make your experience on this site better.</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div className="CookieConsent__buttons">
						<Modal.CloseButton onClick={accept} className="CookieConsent__button">Accept choice</Modal.CloseButton>
						<Modal.CloseButton onClick={acceptAll} className="CookieConsent__button CookieConsent__button--highlight">Accept all</Modal.CloseButton>
					</div>
				</article>
			</Modal.Window>
		</Modal>
	);
}

export default CookieConsent;