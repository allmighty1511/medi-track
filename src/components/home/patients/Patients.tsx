import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../../context/HomeContext";
import PatientCard from "./patientCard/PatientCard";
import Pagination from "../../shared/Pagination";
import Loader from "../../shared/Loader";
import AddIcon from "./assets/AddIcon";
import Modal from "./modal/Modal";
import { IModal } from "../../../types";
import { LayoutContext } from "../../../context/LayoutContext";
import Notifications from "../../shared/notifications/Notifications";

const Patients = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [itemsPerPage, setItemsPerPage] =
		useState<number>(9);

	const { patients, modalState, setModalState } =
		useContext(HomeContext);

	const { notification } = useContext(LayoutContext);

	//Paginator variables
	const lastIndex = currentPage * itemsPerPage;
	const firstIndex = lastIndex - itemsPerPage;
	const currentPatients = patients.slice(
		firstIndex,
		lastIndex,
	);

	/* -- Functions -- */
	const paginate = (pageNumber: number) =>
		setCurrentPage(pageNumber);

	useEffect(() => {
		console.log(notification);
	}, [notification]);

	return (
		<div className="flex flex-col gap-y-4 flex-grow justify-between items-center">
			{currentPatients.length > 0 ? (
				<>
					{/* Add records */}
					<div className="flex w-full items-center justify-end">
						<button
							className=""
							onClick={() => {
								setModalState((modalState: any) => ({
									...modalState,
									active: true,
								}));
							}}>
							<AddIcon />
						</button>
					</div>
					<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{currentPatients.map((patient) => (
							<div
								key={patient.id}
								className="flex min-h-200 overflow-hidden">
								<PatientCard
									key={patient.id}
									{...patient}
								/>
							</div>
						))}
					</div>
					<Pagination
						itemsPerPage={itemsPerPage}
						totalItems={patients.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				</>
			) : (
				<Loader classname="left-auto" />
			)}
			{modalState.active && <Modal />}{" "}
			{notification && <Notifications />}
		</div>
	);
};

export default Patients;
