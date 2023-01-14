import { Box, Container } from "@chakra-ui/react"
import WindowedSelect from 'react-windowed-select'

const Search = ({ availableCourses, courseSelectChange }) => {

  const customStyles = {
    control: (styles) => ({ ...styles, height: '3em', marginBottom: '2em', backgroundColor: '#2B308B', color: 'white' }),
    input: (styles) => ({
      ...styles,
      color: 'white'
    }),
    multiValue: (styles,) => {
      const color = '#CEDEFF';
      return {
        ...styles,
        backgroundColor: color,
        color: '#2B308B',
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
      fontSize: '1em'
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: "#FFAD4D",
        color: 'white',
      },
    }),
    menuList: (base) => ({
      ...base,
      color: '#5A81FA'
    })
  };


  return (
    <Container maxW='container.md' p={'1em'}>
      <Box>
        <WindowedSelect
          options={availableCourses}
          styles={customStyles}
          onChange={courseSelectChange}
          isMulti
        />
      </Box>
    </Container>
  )
}

export default Search
