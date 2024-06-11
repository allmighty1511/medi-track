import {
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { IPatient } from "../../../../types";
import { truncateText } from "../../../../utils/helpers";
import CloseButton from "./assets/CloseButton";
import WebsiteIcon from "./assets/WebsiteIcon";
import { HomeContext } from "../../../../context/HomeContext";
import cx from "classnames";

const PatientCard = (props: IPatient) => {
	const { activeCard, setActiveCard } =
		useContext(HomeContext);
	const [cardWidth, setCardWidth] = useState<number>(0);

	const cardRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		setActiveCard(
			props.id == activeCard ? undefined : props.id,
		);
	};

	useEffect(() => {
		const handleResize = () => {
			if (cardRef.current) {
				setCardWidth(cardRef.current.offsetWidth); // Set width from the card element
			}
		};

		handleResize(); // Set width on mount

		window.addEventListener("resize", handleResize); // Add resize listener

		return () => {
			window.removeEventListener("resize", handleResize); // Clean up listener
		};
	}, []);

	return (
		<div
			ref={cardRef}
			className={cx(
				"fadeIn bg-white rounded-lg shadow-card py-5 px-4 ",
				{
					absolute: activeCard == props.id,
					"h-76": activeCard == props.id,
					"z-10": activeCard == props.id,
				},
			)}
			style={{
				width:
					activeCard == props.id
						? `${cardWidth}px`
						: "100%",
			}}>
			<div className="relative flex gap-x-4">
				{/* User Image */}
				<div
					className="w-20 h-20 shrink-0 rounded-full"
					style={{
						backgroundImage: `url(${props.avatar})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}></div>

				{/* User Details */}
				<div className="flex flex-col gap-y-2 ">
					{/* Title Container */}
					<div className="flex gap-x-4 items-center justify-start">
						<p
							className={cx(
								"text-primary-900 font-semibold",
								props.params?.description
									? "text-lg"
									: "text-2xl",
							)}>
							{props.name}
						</p>
						<div className="w-0.25 bg-primary-900 h-7 shrink-0">
							&nbsp;
						</div>
						{props.params?.description && (
							<>
								<p
									className={cx(
										"text-primary-900 font-semibold",
										props.params?.description
											? "text-lg"
											: "text-2xl",
									)}>
									{props.params.description}
								</p>
								<div className="w-0.25 bg-primary-900 h-7 shrink-0">
									&nbsp;
								</div>
							</>
						)}
						<a
							target="_blank"
							href={props.website}
							className="h-8 w-8">
							<WebsiteIcon />
						</a>
					</div>
					{/* Description */}
					<p className="text-neutral-800">
						{props.id == activeCard
							? props.description
							: truncateText(props.description, 255)}
					</p>
				</div>
				<CloseButton
					active={props.id == activeCard}
					handleClick={handleClose}
				/>
			</div>
		</div>
	);
};

export default PatientCard;
