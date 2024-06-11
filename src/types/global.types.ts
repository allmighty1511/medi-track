export interface IModal {
	active: boolean;
	mode: "edit" | "create";
	name?: string;
	avatarUrl?: string;
	description?: string;
	website?: string;
	details?: string;
}
