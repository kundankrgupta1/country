import { Box } from "@chakra-ui/react"
import AllRoutes from "./Routes/AllRoutes"
import Header from "./Components/Header"
import { useState } from "react";
import "./index.css";

const App = () => {
	const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")));

	return (
		<Box className={isDark ? "dark" : "light"}>
			<Header isDark={isDark} setIsDark={setIsDark} />
			<AllRoutes />
		</Box>
	)
}

export default App