import React, { ReactNode } from "react";
import Header from "./Nav";
import Footer from "./Footer";
import Nav from "./Nav";
import { LayoutProvider } from "../context/LayoutContext";

interface ILayoutProps {
	children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
	return (
		<LayoutProvider>
			<div className="flex flex-col min-h-screen">
				<Nav title="MediTrack" />

				<main className="flex flex-col flex-grow">
					{props.children}
				</main>

				<Footer />
			</div>
			
		</LayoutProvider>
	);
};
export default Layout;
