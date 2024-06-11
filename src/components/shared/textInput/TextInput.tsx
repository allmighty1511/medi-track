import cx from "classnames";

interface ITextInputProps {
	id: string;
	name: string;
	currentText: string;
	handleChange: (value: string) => void;
	error?: boolean;
}

const TextInput = ({
	id,
	name,
	currentText,
	handleChange,
	error,
}: ITextInputProps) => {
	return (
		<div className="flex flex-col gap-2 textInputContainer">
			<label
				htmlFor={id}
				className="text-primary-900 font-semibold text-lg">
				{name}
			</label>
			<input
				id={id}
				name={id}
				type="text"
				value={currentText}
				onChange={(e) => handleChange(e.target.value)}
				className={cx("w-full p-2 rounded-lg border", {
					"border-alert-500": error,
					"border-neutral-700": !error,
				})}
			/>
			{error && (
				<p className="text-red-500 text-sm mt-1">
					This field is required.
				</p>
			)}
		</div>
	);
};

export default TextInput;
