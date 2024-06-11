import { useContext, useState } from "react";
import CloseButton from "../patientCard/assets/CloseButton";
import "./modal.css";
import { HomeContext } from "../../../../context/HomeContext";
import AddIcon from "../assets/AddIcon";
import TextInput from "../../../shared/textInput/TextInput";
import Button from "../../../shared/Button";
import { IModal } from "../../../../types";

interface IModalProps {
	mode: "create" | "edit";
}

const requiredFields = [
	"name",
	"avatarUrl",
	"description",
	"website",
];

const Modal = () => {
	const [errors, setErrors] = useState<boolean>(false);

	const {
		modalState,
		setModalState,
		patients,
		setPatients,
	} = useContext(HomeContext);

	return (
		<div className="modalContainer">
			<div className="relative modal p-4">
				{/* Close Section */}
				<div className="flex justify-between items-center w-full mb-5">
					<h3 className="text-xl font-semibold text-blue-900">
						Add new patient
					</h3>
					<button
						onClick={() => {
							setModalState((modalState: any) => ({
								...modalState,
								active: false,
							}));
						}}>
						<div className="flex items-center justify-center relative w-8 h-8 rotate-45">
							<div className="absolute bg-primary-900 w-1 rounded-full h-6 duration-300 rotate-180"></div>
							<div className="absolute bg-primary-900 w-1 rounded-full h-6 rotate-90"></div>
						</div>
					</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Name */}
					<div className="w-full">
						<TextInput
							error={errors}
							id="name"
							name={"Name"}
							currentText={modalState.name ?? ""}
							handleChange={(event) => {
								setModalState((modalState) => ({
									...modalState,
									name: event,
								}));
							}}
						/>
					</div>
					{/* Avatar Url */}
					<div>
						<TextInput
							error={errors}
							id="avatarUrl"
							name={"Avatar URL"}
							currentText={modalState.avatarUrl ?? ""}
							handleChange={(event) => {
								setModalState((modalState) => ({
									...modalState,
									avatarUrl: event,
								}));
							}}
						/>
					</div>
					{/* Description */}
					<div>
						<TextInput
							error={errors}
							id="description"
							name={"Description"}
							currentText={modalState.description ?? ""}
							handleChange={(event) => {
								setModalState((modalState) => ({
									...modalState,
									description: event,
								}));
							}}
						/>
					</div>
					{/* Website */}
					<div>
						<TextInput
							error={errors}
							id="website"
							name={"Website"}
							currentText={modalState.website ?? ""}
							handleChange={(event) => {
								setModalState((modalState) => ({
									...modalState,
									website: event,
								}));
							}}
						/>
					</div>
					{/* Details */}
					<div>
						<TextInput
							id="details"
							name={"Details"}
							currentText={modalState.details ?? ""}
							handleChange={(event) => {
								setModalState((modalState) => ({
									...modalState,
									details: event,
								}));
							}}
						/>
					</div>
				</div>
				<Button
					text={"Submit"}
					classname="w-32 absolute p-4 text-center items-center bottom-5 right-5"
					handleClick={() => {
						let auxError = false;

						if (
							modalState?.name &&
							modalState?.name?.length > 0 &&
							modalState.description &&
							modalState.description?.length > 0 &&
							modalState.avatarUrl &&
							modalState.avatarUrl?.length > 0 &&
							modalState.website &&
							modalState.website?.length > 0
						) {
						} else {
							auxError = true;
							setErrors(true);
						}

						if (!auxError) {
							const currentDate = new Date();
							const isoStringDate =
								currentDate.toISOString();
							let auxPatients = patients;
							if (
								modalState.name &&
								modalState.avatarUrl &&
								modalState.description &&
								modalState.website
							) {
								auxPatients.push({
									createdAt: isoStringDate,
									name: modalState.name,
									avatar: modalState.avatarUrl,
									description: modalState.description,
									website: modalState.website,
									id: (
										parseInt(
											patients[patients.length - 1].id,
										) + 1
									).toString(),
									params: {
										description: modalState.description,
									},
								});

								setPatients(auxPatients);

								setModalState((modalState: any) => ({
									...modalState,
									active: false,
								}));
							}
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Modal;
