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
	meme(): Promise<Client.noapikeyRequestResults>;
}

declare namespace Client {
	export interface QueryParams {
		text: string;
	}
	export interface RequestResults {
		url: string;
	}
	export interface noapikeyRequestResults {
		image: string;
	}
	export interface AnimalRequestResults {
		fact: string;
		image: string;
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
