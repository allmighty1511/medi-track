import { useContext, useState } from "react";
import CloseButton from "../patientCard/assets/CloseButton";
import "./modal.css";
import { HomeContext } from "../../../../context/HomeContext";
import AddIcon from "../assets/AddIcon";
import TextInput from "../../../shared/textInput/TextInput";
import Button from "../../../shared/Button";
import {
	IModal,
	IPatient,
	RequiredFields,
} from "../../../../types";
import { LayoutContext } from "../../../../context/LayoutContext";

interface IModalProps {
	mode: "create" | "edit";
}

const requiredFields: RequiredFields[] = [
	"name",
	"avatarUrl",
	"description",
	"website",
];

const Modal = () => {
	const [errors, setErrors] = useState<string[]>([]);

	const {
		modalState,
		setModalState,
		patients,
		setPatients,
	} = useContext(HomeContext);

	const { setNotification } = useContext(LayoutContext);

	return (
		<div className="modalContainer">
			<div className="relative modal p-2 md:p-4">
				{/* Close Section */}
				<div className="flex justify-between items-center w-full mb-2 md:mb-5">
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
					{/* Name */}
					<div className="w-full">
						<TextInput
							error={errors.indexOf("name") >= 0}
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
							error={errors.indexOf("avatarUrl") >= 0}
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
							error={errors.indexOf("description") >= 0}
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
							error={errors.indexOf("website") >= 0}
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
					classname="w-32 ml-auto mt-2 md:mt-0 md:absolute p-2 md:p-4 text-center items-center  bottom-2 right-2 md:bottom-5 md:right-5"
					handleClick={() => {
						let pendingRequiredFields = requiredFields;

						const dataKeys = Object.keys(modalState);

						pendingRequiredFields = requiredFields.filter(
							(requiredField: RequiredFields) => {
								let selectedField =
									modalState[requiredField];

								if (dataKeys.indexOf(requiredField) < 0) {
									return true;
								} else if (selectedField?.length == 0) {
									return true;
								}
							},
						);

						setErrors(pendingRequiredFields);

						//Aca obviamente preferiria usar una API de manera asincronica

						//Handle creation
						if (
							pendingRequiredFields.length <= 0 &&
							modalState.name &&
							modalState.avatarUrl &&
							modalState.description &&
							modalState.website &&
							!modalState.id
						) {
							const currentDate = new Date();
							const isoStringDate =
								currentDate.toISOString();
							let auxPatients = patients;

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

							setModalState({
								active: false,
								mode: "create",
							});

							setNotification({
								type: "successful",
								message: `Your patient "${modalState.name}" has been created succesfully`,
								closing: false,
							});
						} else if (
							pendingRequiredFields.length <= 0 &&
							modalState.name &&
							modalState.avatarUrl &&
							modalState.description &&
							modalState.website &&
							modalState.id
						) {
							let auxPatients = patients.reduce<any>(
								(acc, el) => {
									let updatedElement = {
										...el,
									};

									if (el.id == modalState.id) {
										updatedElement.avatar =
											modalState.avatarUrl ?? "";
										updatedElement.name =
											modalState.name ?? "";
										updatedElement.website =
											modalState.website ?? "";
										updatedElement.description =
											modalState.description ?? "";
										updatedElement.params = el.params && {
											description: modalState.details ?? "",
										};
									}

									return [...acc, updatedElement];
								},
								[],
							);

							setPatients(auxPatients);

							setModalState({
								active: false,
								mode: "create",
							});

							setNotification({
								type: "successful",
								message: `Your patient "${modalState.name}" has been updated succesfully`,
								closing: false,
							});
						}
					}}
				/>
			</div>
		</div>
	);
};

export default Modal;
