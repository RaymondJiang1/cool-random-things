const fetch = require('node-fetch'),
	error = 'No image/gif provided from api',
	{ noapikey } = require('../json/domains.json'),
	{ noapikeyEndpoints } = require('../json/api_endpoints.json');

class Random {
	async meme() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.meme}`);
		const json = await image.json();

		if (!json.image) {
			throw new Error(error);
		}

		return json.image;
	}

	async bear() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.bear}`);
		const json = await image.json();

		if (!json.image) {
			throw new Error(error);
		}

		return json.image;
	}

	async panda() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.panda}`);
		const json = await image.json();

		if (!json.image) {
			throw new Error(error);
		}

		return json.image;
	}

	async quote() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.quote}`);
		const json = await image.json();

		if (!json.quote) {
			throw new Error('No quote provided');
		}

		return json;
	}

	async riddle() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.riddle}`);
		const json = await image.json();

		if (!json.question) {
			throw new Error('No riddle provided');
		}

		return json;
	}

	/**
	 *
	 * @param {string} text
	 */
	async flipText(text) {
		if (!text) {
			throw new TypeError('Please provide some text to flip!');
		}

		if (typeof text !== 'string') {
			throw new Error('Provided text is not a string!');
		}
		const image = await fetch(
			`${noapikey}${noapikeyEndpoints.flipText}?text=${text}`
		);
		const json = await image.json();

		if (!json.message) {
			throw new Error('No text provided by api');
		}

		return json.message;
	}

	/**
	 *
	 * @param {number} length
	 */

	async generatePassword(length) {
		if (!length) {
			throw new TypeError(
				'Please provide a number of letters so I can generate a password length!'
			);
		}

		if (typeof length !== 'number') {
			throw new TypeError('Length provided is not a number!');
		}
		const image = await fetch(
			`${noapikey}${noapikeyEndpoints.password}?length=${length}`
		);
		const json = await image.json();

		if (!json.password) {
			throw new Error('No password provided by api');
		}

		return json.password;
	}

	async car() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.car}`);
		const json = await image.json();

		if (!json.image) {
			throw new Error(error);
		}

		return json.image;
	}

	/**
	 *
	 * @param {string} text
	 */

	async textToBinary(text) {
		if (!text) {
			throw new TypeError('No text provided to change it into binary!');
		}

		if (typeof text !== 'string') {
			throw new TypeError('Provided text is not a string!');
		}
		const image = await fetch(
			`${noapikey}${noapikeyEndpoints.textToBinary}?text=${text}`
		);
		const json = await image.json();

		if (!json.binary) {
			throw new Error('No binary text provided!');
		}

		return json.binary;
	}

	/**
	 *
	 * @param {numnber} binary
	 */

	async binaryToText(binary) {
		if (!binary) {
			throw new TypeError(
				'Please provide some numbers to convert to text!'
			);
		}

		if (typeof binary !== 'number') {
			throw new TypeError('Binary provided is not a number!');
		}
		const image = await fetch(
			`${noapikey}${noapikeyEndpoints.binaryToText}?binary=${binary}`
		);
		const json = await image.json();

		if (!json.text) {
			throw new Error(error);
		}

		return json.text;
	}

	async coinFlip() {
		const image = await fetch(`${noapikey}${noapikeyEndpoints.coinFlip}`);
		const json = await image.json();

		if (!json.coin) {
			throw new Error(error);
		}

		return json;
	}
}

module.exports = Random;
