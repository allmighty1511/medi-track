import {
	createContext,
	useState,
	ReactNode,
	useEffect,
	useContext,
} from "react";
import { patientsApi } from "../services/api";
import { IModal, IPatient } from "../types";
import { LayoutContext } from "./LayoutContext";

// Define the type for your context state
type HomeContextType = {
	patients: IPatient[];
	setPatients: (patients: IPatient[]) => void;
	activeCard: string | undefined;
	setActiveCard: (activeCard: string | undefined) => void;
	modalState: IModal;
	setModalState: React.Dispatch<
		React.SetStateAction<IModal>
	>;
};

// Set the default value for the context
const defaultContextValue: HomeContextType = {
	patients: [],
	setPatients: () => {},
	activeCard: undefined,
	setActiveCard: () => {},
	modalState: {
		active: false,
		mode: "create",
	},
	setModalState: () => {},
};

export const HomeContext = createContext<HomeContextType>(
	defaultContextValue,
);

// Define the type for your provider props
type HomeProviderProps = {
	children: ReactNode;
};

export const HomeProvider = ({
	children,
}: HomeProviderProps) => {
	const [patients, setPatients] = useState<IPatient[]>([]);
	const [activeCard, setActiveCard] = useState<
		string | undefined
	>();
	const [modalState, setModalState] = useState<IModal>({
		active: false,
		mode: "create",
	});

	const getPatients = async () => {
		try {
			const response = await patientsApi.get<IPatient[]>(
				"/users",
			);
			// Ensure you're accessing the `data` property of the response object
			const patients: IPatient[] = response.data;

			setPatients(patients); // Assuming setPatients is a state setter from useState
		} catch (error) {
			console.error("Failed to fetch patients:", error);
			// Handle the error appropriately (e.g., set an error state, show a message, etc.)
		}
	};

	useEffect(() => {
		getPatients();
	}, []);

	return (
		<HomeContext.Provider
			value={{
				patients,
				setPatients,
				activeCard,
				setActiveCard,
				modalState,
				setModalState,
			}}>
			{children}
		</HomeContext.Provider>
	);
};
