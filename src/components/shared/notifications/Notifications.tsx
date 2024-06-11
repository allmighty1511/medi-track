import { useContext, useEffect } from "react";
import { LayoutContext } from "../../../context/LayoutContext";
import "./notifications.css";
import cx from "classnames";

const Notifications = () => {
	const { notification, setNotification } =
		useContext(LayoutContext);

	useEffect(() => {
		if (notification && !notification.closing) {
			// Setea 'closing' como true después de 3 segundos
			const timer = setTimeout(() => {
				setNotification({ ...notification, closing: true });
			}, 3000);

			// Limpiar el timer al desmontar o cambiar la notificación
			return () => clearTimeout(timer);
		}

		// Si la notificación está en proceso de cierre, la elimina después de 500ms
		if (notification && notification.closing) {
			const timer = setTimeout(() => {
				setNotification(undefined);
			}, 500);

			// Limpiar el timer al desmontar o cambiar la notificación
			return () => clearTimeout(timer);
		}
	}, [notification]);

	return (
		<div
			className={cx("notification", {
				"bg-secondary-500":
					notification?.type === "successful",
				slideInRight: !notification?.closing,
				slideOutRight: notification?.closing,
			})}>
			{notification?.message}
		</div>
	);
};

export default Notifications;
