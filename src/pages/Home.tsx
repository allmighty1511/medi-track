import { useContext } from "react";
import {
	HomeContext,
	HomeProvider,
} from "../context/HomeContext";
import Layout from "../layout/Layout";
import Patients from "../components/home/patients/Patients";

const Home = () => {
	return (
		<Layout>
			<HomeProvider>
				<div className="flex flex-col flex-grow mx-auto mt-4 mb-5 px-4 ">
					<Patients />
				</div>
			</HomeProvider>
		</Layout>
	);
};

export default Home;
