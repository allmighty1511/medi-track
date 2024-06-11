import cx from "classnames";

export interface IButtonProps {
	text: string;
	classname?: string;
	handleClick: (event: any) => void;
}

const Button = (props: IButtonProps) => {
	return (
		<button
			onClick={props.handleClick}
			className={cx(
				"flex bg-primary-900 hover:bg-primary-500 duration-300 rounded-lg",
				props.classname,
			)}>
			<p className="text-center w-full text-white font-semibold">
				{props.text}
			</p>
		</button>
	);
};

export default Button;
