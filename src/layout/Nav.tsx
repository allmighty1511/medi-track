// src/components/Nav.tsx
import React, { useState } from "react";
import meditrackLogo from "../assets/images/icons/meditrackIcon.svg";

interface NavProps {
	title: string;
}

const Nav: React.FC<NavProps> = ({ title }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex items-center justify-start gap-4 w-full h-16 bg-primary-500 px-3 sm:px-6">
			<img
				src={meditrackLogo}
				alt="Meditrack Logo"
				className="w-10 h-10"
			/>{" "}
			<h3 className="font-semibold text-neutral-50 text-2xl ">
				MediTrack
			</h3>
		</nav>
	);
};

export default Nav;
