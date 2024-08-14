import { Box } from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountryContainer from "./CountryContainer"
import { useState } from "react"
import Sorting from "./Sorting"
import SimmerUI from "./SimmerUI"


const Home = () => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')
	const [sorting, setSorting] = useState('')
	return (
		<>
			<Box p={12} display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={10}>
				<SearchBar setSearch={setSearch} />
				<SelectMenu setRegion={setRegion} />
				<Sorting setSorting={setSorting} />
			</Box>
			<CountryContainer search={search} region={region} sorting={sorting} />
			{/* <SimmerUI /> */}
		</>
	)
}

export default Home