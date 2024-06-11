interface IEditIconProps {
	classname?: string;
	
}

const EditIcon = (props: IEditIconProps) => {
	return (
		<svg
			className={props.classname}
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="26"
			viewBox="0 0 26 26"
			fill="none">
			<path
				d="M15.9583 25.125H5.95833C2.73647 25.125 0.125 22.5135 0.125 19.2917V5.95833C0.125 2.73647 2.73647 0.125 5.95833 0.125H15.1271C15.5876 0.125 15.9605 0.497907 15.9605 0.958333C15.9605 1.41876 15.5876 1.79167 15.1271 1.79167H5.95833C3.65729 1.79167 1.79167 3.65729 1.79167 5.95833V19.2917C1.79167 21.5927 3.65729 23.4583 5.95833 23.4583H15.9583C20.101 23.4583 23.4583 20.101 23.4583 15.9583V10.1229C23.4583 9.66244 23.8312 9.28953 24.2917 9.28953C24.7521 9.28953 25.125 9.66244 25.125 10.1229V15.9583C25.125 21.0207 21.0207 25.125 15.9583 25.125Z"
				className="fill-white"
			/>
			<path
				d="M18.3178 24.2909H16.6511V20.2067C16.6511 18.2452 18.2459 16.6504 20.2074 16.6504H24.2917V18.3171H20.2074C19.1657 18.3171 18.3178 19.165 18.3178 20.2066L18.3178 24.2909Z"
				className="fill-white"
			/>
			<path
				d="M8.39367 19.462C7.04887 19.462 5.9541 18.3683 5.9541 17.0225C5.9541 15.5537 6.52701 14.1745 7.56453 13.1382L19.1613 1.54141C20.4624 0.241406 22.576 0.241406 23.876 1.54141C25.175 2.84141 25.175 4.95607 23.876 6.25607L12.2781 17.8539C11.2552 18.8768 9.84063 19.4644 8.39493 19.4644L8.39367 19.462ZM21.5187 2.23191C21.0916 2.23191 20.6646 2.39441 20.3396 2.71837L8.7417 14.3162C8.01879 15.0391 7.62087 16.0006 7.61983 17.0224C7.61983 17.4474 7.96672 17.7942 8.39274 17.7942C9.39898 17.7942 10.3865 17.3859 11.0981 16.6724L22.6959 5.0745C23.3449 4.4245 23.3449 3.36722 22.6959 2.71722C22.3709 2.39221 21.9439 2.23077 21.5178 2.23077L21.5187 2.23191Z"
				className="fill-white"
			/>
			<path
				d="M17.1978 4.64871L18.4092 3.50391L21.8447 7.13937L20.6332 8.28417L17.1978 4.64871Z"
				className="fill-white"
			/>
		</svg>
	);
};

export default EditIcon;