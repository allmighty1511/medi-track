import axios from "axios";

export const patientsApi = axios.create({
	baseURL: "https://63bedcf7f5cfc0949b634fc8.mockapi.io",
});
