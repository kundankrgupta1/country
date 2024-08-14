import { Box, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "../index.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Header = ({ setIsDark, isDark }) => {

	return (
		<Box boxShadow={'lg'} bg={isDark ? "blue.100":'teal.200'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={10} py={4}>
			<Link to="/" ><Text fontSize={'xl'} fontWeight={'700'}>Know About Countries:</Text></Link>
			<Button
				onClick={() => {
					setIsDark(!isDark)
					localStorage.setItem("isDarkMode", !isDark)
				}}
			>{isDark ? <SunIcon /> : <MoonIcon />}</Button>
		</Box>
	)
}

export default Header
