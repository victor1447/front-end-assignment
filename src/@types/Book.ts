export interface bookDestination {
	name: string;
	slug?: string;
	code?: string;
	thumbnail: string;
	countHotels?: number;
	alias: string[]
}

export interface Book {
	name: string;
	slug?: string;
	thumbnail: string;
	countHotels?: number;
	countDestinations?: number;
	destinations: bookDestination[];
}