/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f8ff", // muy claro
					100: "#bbdefb",
					200: "#90caf9",
					300: "#64b5f6",
					400: "#42a5f5",
					500: "#2196f3", // azul predeterminado
					600: "#1e88e5",
					700: "#1976d2",
					800: "#1565c0",
					900: "#0d47a1", // muy oscuro
				},
				secondary: {
					50: "#e8f5e9",
					100: "#c8e6c9",
					200: "#a5d6a7",
					300: "#81c784",
					400: "#66bb6a",
					500: "#4caf50", // verde predeterminado
					600: "#43a047",
					700: "#388e3c",
					800: "#2e7d32",
					900: "#1b5e20", // muy oscuro
				},
				alert: {
					300: "#ffcdd2", // rojo claro
					500: "#f44336", // rojo para alertas
					700: "#d32f2f", // rojo oscuro
				},
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#eeeeee",
					300: "#e0e0e0",
					400: "#bdbdbd",
					500: "#9e9e9e", // gris predeterminado
					600: "#757575",
					700: "#616161",
					800: "#424242",
					900: "#212121", // muy oscuro
				},
			},
			boxShadow: {
				card: "3px 3px 15px 0px rgba(0, 0, 0, 0.10)",
			},
			width: {
				0.25: "1px",
			},
			minHeight: {
				176: "176px",
			},
			backgroundColor: ["focus-within"],
			borderColor: ["focus-within"],
		},
	},
	plugins: [],
};
