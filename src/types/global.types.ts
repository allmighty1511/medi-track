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

export type RequiredFields =
	| "name"
	| "avatarUrl"
	| "description"
	| "website";
