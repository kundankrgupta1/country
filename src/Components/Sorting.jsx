import { Select } from "@chakra-ui/react"

const Sorting = ({ setSorting }) => {
	return (
		<Select placeholder="sort population" width={'200px'} onChange={(e) => setSorting(e.target.value)}>
			<option value="high">Largest Population</option>
			<option value="low">Smallest Population</option>
		</Select>
	)
}

export default Sorting
