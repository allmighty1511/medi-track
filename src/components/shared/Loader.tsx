interface ILoaderProps {
	classname: string;
}

const Loader = (props: ILoaderProps) => {
	return (
		<svg
			className={props.classname}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			width="200"
			height="200"
			style={{
				shapeRendering: "auto",
				display: "block",
				background: "transparent",
			}}>
			<g>
				<circle
					strokeLinecap="round"
					fill="none"
					strokeDasharray="47.12388980384689 47.12388980384689"
					stroke="#2196f3"
					strokeWidth="4"
					r="30"
					cy="50"
					cx="50">
					<animateTransform
						values="0 50 50;360 50 50"
						keyTimes="0;1"
						dur="1.8867924528301885s"
						repeatCount="indefinite"
						type="rotate"
						attributeName="transform"></animateTransform>
				</circle>
				<g></g>
			</g>
		</svg>
	);
};

export default Loader;
