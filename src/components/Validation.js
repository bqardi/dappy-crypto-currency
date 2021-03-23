class Validation {
	constructor(value) {
		this.value = value;
		this.errors = [];
	}
	isEmail(msg = "Email is wrong") {
		// eslint-disable-next-line
		var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
		return this.custom(regex, msg);
	}
	// eslint-disable-next-line
	min(length = 0, msg = "A min. of ${0} letters required!") {
		var regex = new RegExp(`^.{${length},}$`);
		return this.custom(regex, msg, length);
	}
	// eslint-disable-next-line
	max(length = -1, msg = "A max. of ${0} letters allowed!") {
		var regex = new RegExp(`^.{0,${length}}$`);
		return this.custom(regex, msg, length);
	}
	isString(msg = "Only text allowed (a-z)") {
		var regex = /^[a-zA-Z]+$/;
		return this.custom(regex, msg);
	}
	hasString(msg = "Must have at least one letter (a-z)") {
		var regex = /[a-zA-Z]+/;
		return this.custom(regex, msg);
	}
	isNumber(msg = "Only numbers allowed (0-9)") {
		var regex = /^[0-9]+$/;
		return this.custom(regex, msg);
	}
	hasNumber(msg = "Must have at least one number (0-9)") {
		var regex = /[0-9]+/;
		return this.custom(regex, msg);
	}
	custom(regex, msg = "Custom condition not met!", ...values) {
		if (values.length) {
			values.forEach((value, index) => {
				var regex = new RegExp(`\\$\\{${index}\\}`);
				msg = msg.replace(regex, value);
			});
		}
		if (!this.value.match(regex)) {
			this.errors.push({ msg });
		}
		return this;
	}
}

// function validate(value){
// 	value = sanitize(value);

// 	return new Validation(value);
// }

var validation = {};

function validate(item) {
	var { id, value } = item;

	value = sanitize(value);

	if (!validation[id]) {
		validation[id] = new Validation(value);
	} else {
		validation[id].value = value;
		validation[id].errors = [];
	}

	return validation[id];
}
function sanitize(str) {
	return str.trim();
}

export default validate;
