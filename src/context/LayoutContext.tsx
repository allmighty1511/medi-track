import { createContext, useState, ReactNode } from "react";

// Define the type for your context state
type LayoutContextType = {
	users: any[];
	setUsers: (users: any[]) => void;
};

// Set the default value for the context
const defaultContextValue: LayoutContextType = {
	users: [],
	setUsers: () => {},
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
	const [users, setUsers] = useState<any[]>([]);

	return (
		<LayoutContext.Provider
			value={{
				users,
				setUsers,
			}}>
			{children}
		</LayoutContext.Provider>
	);
};
