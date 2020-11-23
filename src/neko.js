const fetch = require('node-fetch'),
	{ nekoslife } = require('../json/domains.json'),
	{ nekoslifeEndpoints } = require('../json/api_endpoints.json'),
	error = 'No image/gif provided from api';

class Neko {
	async smug() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.smug}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async baka() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.baka}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async tickle() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.tickle}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async slap() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.slap}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async poke() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.poke}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async pat() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.pat}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async neko() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.neko}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async nekoGif() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.nekoGif}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async cat() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.cat}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async lizard() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.lizard}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async kiss() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.kiss}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async hug() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.hug}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async foxGirl() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.foxGirl}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async feed() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.feed}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async cuddle() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.cuddle}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async kemonomimi() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.kemonomimi}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async dog() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.dog}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async wallpaper() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.wallpaper}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async goose() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.goose}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async gecg() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.gecg}`);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async avatar() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.avatar}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async waifu() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.waifu}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async why() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.why}`);
		const json = await image.json();

		if (!json.why) {
			throw new Error(error);
		}

		return json.why;
	}

	async catText() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.catText}`
		);
		const json = await image.json();

		if (!json.cat) {
			throw new Error(error);
		}

		return json.cat;
	}

	/**
	 *
	 * @param {string} text
	 */
	async OwOText(text) {
		if (!text) {
			throw new TypeError('Please provide something to OwOify!');
		}
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.OwOify}?text=${text}`
		);
		const json = await image.json();

		if (!json.owo) {
			throw new Error(error);
		}

		return json.owo;
	}
  async holo(){
    const image = await fetch("https://nekobot.xyz/api/image?type=holo");
    const json = await main.json();
    if (!json.message) {
			throw new Error(error);
		}
    return json.message;
  }
  async wink(){
    const image = await fetch("https://some-random-api.ml/animu/wink");
    const json = await main.json();
    if (!json.link) {
			throw new Error(error);
		}
    return json.link;
  }
  async punch(){
    const image = await fetch("https://neko-love.xyz/api/v1/punch");
    const json = await main.json();
    if (!json.url) {
			throw new Error(error);
		}
    return json.url;
  }
  async cry(){
    const image = await fetch("https://neko-love.xyz/api/v1/cry");
    const json = await main.json();
    if (!json.url) {
			throw new Error(error);
		}
    return json.url;
  }
  async coffee(){
    const image = await fetch("https://nekobot.xyz/api/image?type=coffee");
    const json = await main.json();
    if (!json.message) {
			throw new Error(error);
		}
    return json.message;
  }
  async kanna(){
    const image = await fetch("https://nekobot.xyz/api/image?type=kanna");
    const json = await main.json();
    if (!json.message) {
			throw new Error(error);
		}
    return json.message;
  }
	async eightball() {
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.eightball}`
		);
		const json = await image.json();

		if (!json.url) {
			throw new Error(error);
		}

		return json.url;
	}

	async fact() {
		const image = await fetch(`${nekoslife}${nekoslifeEndpoints.sfw.fact}`);
		const json = await image.json();

		if (!json.fact) {
			throw new Error(error);
		}

		return json.fact;
	}

	/**
	 *
	 * @param {string} text
	 */
	async spoiler(text) {
		if (!text) {
			throw new TypeError('Please provide some text to spoilerfy!');
		}
		const image = await fetch(
			`${nekoslife}${nekoslifeEndpoints.sfw.spoiler}?text=${text}`
		);
		const json = await image.json();

		if (!json.owo) {
			throw new Error(error);
		}

		return json.owo;
	}
}

module.exports = Neko;
