export interface IModal {
	active: boolean;
	mode: "edit" | "create";
	id?: string;
	name?: string;
	avatarUrl?: string;
	description?: string;
	website?: string;
	details?: string;
}

export interface INotification {
	type: "successful" | "error";
	message: string;
	closing: boolean;
}

export type RequiredFields =
	| "name"
	| "avatarUrl"
	| "description"
	| "website";
