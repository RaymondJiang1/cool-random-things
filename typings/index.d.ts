export declare class Neko {
	tickle(): Promise<Client.RequestResults>;
	slap(): Promise<Client.RequestResults>;
	smug(): Promise<Client.RequestResults>;
	baka(): Promise<Client.RequestResults>;
	poke(): Promise<Client.RequestResults>;
	pat(): Promise<Client.RequestResults>;
	neko(): Promise<Client.RequestResults>;
	nekoGif(): Promise<Client.RequestResults>;
	cat(): Promise<Client.RequestResults>;
	lizard(): Promise<Client.RequestResults>;
	kiss(): Promise<Client.RequestResults>;
	hug(): Promise<Client.RequestResults>;
	foxGirl(): Promise<Client.RequestResults>;
	feed(): Promise<Client.RequestResults>;
	cuddle(): Promise<Client.RequestResults>;
	dog(): Promise<Client.RequestResults>;
	why(): Promise<Client.WhyResult>;
	catText(): Promise<Client.CatResult>;
	OwOify(opts: Client.QueryParams): Promise<Client.OwOResult>;
	eightball(opts: Client.QueryParams): Promise<Client.ChatResults>;
	fact(): Promise<Client.FactResult>;
	kemonomimi(): Promise<Client.RequestResults>;
	holo(): Promise<Client.RequestResults>;
	spoiler(opts: Client.QueryParams): Promise<Client.OwOResult>;
	avatar(): Promise<Client.RequestResults>;
	waifu(): Promise<Client.RequestResults>;
	gecg(): Promise<Client.RequestResults>;
	goose(): Promise<Client.RequestResults>;
	wallpaper(): Promise<Client.RequestResults>;
}

export declare class Random {
	meme(): Promise<Client.ImageRequestResults>;
	bear(): Promise<Client.AnimalRequestResults>;
	panda(): Promise<Client.AnimalRequestResults>;
	quote(): Promise<Client.QuoteRequestResults>;
	riddle(): Promise<Client.RiddleRequestResults>;
	flipText(): Promise<Client.FliptextRequestResults>;
	generatePassword(): Promise<Client.GeneratePasswordRequestResults>;
	car(): Promise<Client.ImageRequestResults>;
	textToBinary(): Promise<Client.TextToBinaryRequestResults>;
	binaryToText(): Promise<Client.BinaryToTextRequestResults>;
	coinFlip(): Promise<Client.CoinFlipRequestResults>;
}

declare namespace Client {
	export interface QueryParams {
		text: string;
	}
	export interface RequestResults {
		url: string;
	}
	export interface ImageRequestResults {
		image: string;
	}
	export interface AnimalRequestResults {
		fact: string;
		image: string;
	}
	export interface QuoteRequestResults {
		quote: string;
		author: string;
	}
	export interface RiddleRequestResults {
		question: string;
		answer: string;
	}
	export interface FliptextRequestResults {
		message: string;
	}
	export interface GeneratePasswordRequestResults {
		password: string;
		length: number;
		note: string;
	}
	export interface TextToBinaryRequestResults {
		binary: string;
	}
	export interface BinaryToTextRequestResults {
		text: string;
	}
	export interface CoinFlipRequestResults {
		coin: string;
		image: string;
		gif: string;
	}
	export interface ChatResults {
		response: string;
		url?: string;
	}
	export interface CatResult {
		cat: string;
	}
	export interface WhyResult {
		why: string;
	}
	export interface OwOResult {
		owo: string;
	}
	export interface FactResult {
		fact: string;
	}
}
