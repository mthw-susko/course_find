import { Box, Text, Container, Stack } from '@chakra-ui/react'
import ListItem from './listItem'
import NoCourses from './noCourses'

const ContentList = ({ courses }) => {
  const CourseList = () => {
    return (
      <Box bgColor="#CEDEEF">
        <Container maxW={'container.md'} minH='54vh'>
          <Container maxW={'container.md'} p={'1em'} maxH='70vh'  overflow={'hidden'} 
          style={{overflowY:'auto', scrollbarColor:"white #CEDEEF"}} >
              <Stack direction={['column', 'row']} spacing='2em'></Stack>
                {courses.map((course) => course != false &&
                <ListItem key={course.id} course={course} />
                )}  
              <Stack/>
          </Container>
        </Container>
      </Box>
    )
  }

  return (
      <>
      {courses.length > 0 ? <CourseList /> : <NoCourses /> }
      </>

  )
}

export default ContentList