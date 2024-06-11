import { createContext, useState, ReactNode } from "react";
import { INotification } from "../types";

// Define the type for your context state
type LayoutContextType = {
	notification: INotification | undefined;
	setNotification: (
		notification: INotification | undefined,
	) => void;
};

// Set the default value for the context
const defaultContextValue: LayoutContextType = {
	notification: undefined,
	setNotification: () => {},
};

export const LayoutContext =
	createContext<LayoutContextType>(defaultContextValue);

// Define the type for your provider props
type LayoutProviderProps = {
	children: ReactNode;
};

export const LayoutProvider = ({
	children,
}: LayoutProviderProps) => {
	const [notification, setNotification] = useState<
		INotification | undefined
	>();

	return (
		<LayoutContext.Provider
			value={{
				notification,
				setNotification,
			}}>
			{children}
		</LayoutContext.Provider>
	);
};
