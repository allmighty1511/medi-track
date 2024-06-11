import cx from "classnames";

interface ICloseButtonProps {
	active: boolean;
	handleClick: () => void;
}

const CloseButton = (props: ICloseButtonProps) => {
	return (
		<button
			className="absolute -bottom-2 -right-2"
			onClick={props.handleClick}>
			<div className="flex items-center justify-center relative w-8 h-8">
				<div
					className={cx(
						"absolute bg-primary-900 w-1 rounded-full h-6 duration-300",
						props.active ? "rotate-90" : "rotate-180",
					)}></div>
				<div className="absolute bg-primary-900 w-1 rounded-full h-6 rotate-90"></div>
			</div>
		</button>
	);
};

export default CloseButton;
