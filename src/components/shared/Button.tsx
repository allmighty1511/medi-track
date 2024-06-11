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
				"flex bg-primary-500 hover:bg-primary-500 duration-300 rounded-lg",
				props.classname,
			)}>
			{props.text}
		</button>
	);
};

export default Button;
