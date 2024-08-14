import axios from "axios"
import { useEffect, useState } from "react"
import { SimpleGrid } from "@chakra-ui/react"
import CountryCard from "./CountryCard"
import SimmerUI from "./SimmerUI"

const CountryContainer = ({ search, region, sorting }) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false);
	const getData = async (region) => {
		setIsLoading(true)
		try {
			const url = region ? `https://restcountries.com/v3.1/region/${region}` : "https://restcountries.com/v3.1/all"
			const fetchData = await axios.get(url)
			setData(fetchData.data)
			setIsLoading(false)
		} catch (error) {
			console.log(error);
			setIsLoading(false)
		}
	}
	useEffect(() => {
		getData(region);
	}, [region])

	const sortedData = () => {
		let sortedArray = [...data];
		if (sorting === "high") {
			sortedArray.sort((a, b) => b.population - a.population);
		} else if (sorting === "low") {
			sortedArray.sort((a, b) => a.population - b.population);
		}
		return sortedArray;
	}

	return (
		<SimpleGrid minChildWidth={'270px'} spacing={5} px={12}>
			{isLoading && <SimmerUI />}
			{!isLoading && sortedData().filter((e) => e.name.common.toLowerCase().includes(search)).map((e, ind) => {
				return <CountryCard key={ind} {...e} />
			})}
		</SimpleGrid>
	)
}

export default CountryContainer
