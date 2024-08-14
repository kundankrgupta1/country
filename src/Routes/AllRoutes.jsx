import { Route, Routes } from "react-router-dom"
import SingleCountry from "../Components/SingleCountry"
import Home from "../Components/Home"

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:country" element={<SingleCountry />} />
			</Routes>
		</div>
	)
}

export default AllRoutes
