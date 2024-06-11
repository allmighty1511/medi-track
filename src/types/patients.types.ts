export interface IPatient {
	createdAt: string;
	name: string;
	avatar: string;
	description: string;
	website: string;
	id: string;
	params?: IParams;
}

export interface IParams {
	description: string;
}
