import { Box, Button, Image, Text, } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
	const [singleData, setSingleData] = useState({}); // Initialize with null
	const [bordersData, setBordersData] = useState([])
	const { country } = useParams();


	const fetchData = async () => {
		try {
			const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
			const countryData = response.data[0];
			setSingleData(
				{
					name: countryData.name.common.toUpperCase(),
					nativeName: Object.values(countryData.name.nativeName)[0].official,
					capital: countryData.capital[0],
					langtitud: countryData.capitalInfo.latlng,
					flags: countryData.flags.png,
					description: countryData.flags.alt,
					currency: Object.values(countryData.currencies)[0].name,
					currency_symbol: Object.values(countryData.currencies)[0].symbol,
					region: countryData.region,
					timezones: countryData.timezones,
					languages: Object.values(countryData.languages),
					population: countryData.population.toLocaleString('en-IN'),
					borders: countryData.borders
				});
		} catch (error) {
			console.error("Error fetching country data:", error);
		}
	};

	const fetchBordersData = async (borders) => {
		try {
			const borderInfo = await Promise.all(
				borders.map(async (e) => {
					const response = await axios.get(`https://restcountries.com/v3.1/alpha/${e}`);
					return response.data[0].name.common;
				})
			);
			setBordersData(borderInfo)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchData();
	}, [country]);

	useEffect(() => {
		if (singleData.borders) {
			fetchBordersData(singleData.borders);
		}
	}, [singleData])

	return (
		<Box m={12}h={'100vh'}>
			<Button onClick={() => history.back()}>{<ArrowBackIcon />} &nbsp;Back</Button>&nbsp;
			<Link to={'/'}><Button>Home</Button></Link>
			<Box mt={5} display={'flex'} gap={16}>
				<Box>
					<Image src={singleData.flags} width={'100%'} h={'250px'} borderWidth={1}
						borderStyle="solid"
						borderColor="grey.50" />
				</Box>
				<Box display={'flex'} flexDirection={'column'} gap={3} maxW={'600px'}>
					<Text fontSize={'38px'} lineHeight={8}><b>{singleData.name}</b></Text>
					<Text fontSize={'16px'}><b>Native Name: </b>{singleData.nativeName}</Text>
					<Text fontSize={'16px'}><b>Currency: </b>{singleData.currency_symbol}&nbsp;{singleData.currency}</Text>
					<Text fontSize={'16px'}><b>Region: </b>{singleData.region}</Text>
					<Text fontSize={'16px'}><b>Languages: </b>{singleData.languages}</Text>
					<Text fontSize={'16px'}><b>Population: </b>{singleData.population}</Text>
					<Text fontSize={'16px'}><b>Time Zones: </b>{singleData.timezones}</Text>
				</Box>
				<Box maxW={'500px'}>
					<Text><b>Country Overview</b></Text>
					<Text>{singleData.description}</Text>
				</Box>
			</Box>

			<Box mt={5} display={'flex'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
				{
					bordersData.length > 0 ?
						<>
							<Text><b>Country Borders: </b></Text>
							{bordersData.map((e) => {
								return <Link to={`/${e}`} key={e}>
									<Text bg={'gray.100'} borderWidth={1} px={2} py={1} borderRadius={5}>{e}</Text>
								</Link>
							})}
						</> : <></>
				}
			</Box>
		</Box>
	);
};

export default SingleCountry;
