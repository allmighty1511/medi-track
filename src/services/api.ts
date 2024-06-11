import axios from "axios";

export const patientsApi = axios.create({
	baseURL: `${process.env.REACT_APP_PATIENTS_API_URL}`,
});
