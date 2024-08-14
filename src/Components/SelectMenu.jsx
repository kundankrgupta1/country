import { Select } from '@chakra-ui/react'

const SelectMenu = ({ setRegion }) => {
	return (
		<Select placeholder='Select Region' width={'200px'} onChange={(e) => setRegion(e.target.value)}>
			<option value='Antarctic'>Antarctic</option>
			<option value='Americas'>Americas</option>
			<option value='Europe'>Europe</option>
			<option value='Africa'>Africa</option>
			<option value='Asia'>Asia</option>
			<option value='Oceania'>Oceania</option>
			<option value='Americas'>Americas</option>
		</Select>
	)
}

export default SelectMenu