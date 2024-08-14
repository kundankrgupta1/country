import { Box, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const CountryCard = ({ name, flags, capital, region, population }) => {
	return (
		<Link to={`/${name.common}`}>
			<Box boxShadow={'lg'} borderWidth={'1px'} w={'270px'} borderRadius={8} p={2}>
				<Image
					src={flags.png} alt={flags.alt}
					borderWidth={1}
					borderStyle="solid"
					borderColor="grey.50"
					w={'100%'}
					h={'170px'}
					borderRadius={8} />
				<Box mt={3} display={'flex'} flexDirection={'column'} gap={2}>
					<Text as={'h3'} textAlign={'center'} fontSize={'18px'}><b>{ }{name.common}</b></Text>
					<Text as={'h6'} fontSize={'16px'}><b>Population: </b>{population.toLocaleString('en-IN')}</Text>
					<Text as={'h6'} fontSize={'16px'}><b>Region: </b>{region}</Text>
					<Text as={'h6'} fontSize={'16px'}><b>Capital: </b>{capital}</Text>
				</Box>
			</Box>
		</Link>
	)
}

export default CountryCard