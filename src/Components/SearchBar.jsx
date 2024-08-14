import { Box, Input } from '@chakra-ui/react'

const SearchBar = ({ setSearch }) => {
	return (
		<Box width={'200px'}>
			<Input type='text' onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search county...' />
		</Box>
	)
}

export default SearchBar