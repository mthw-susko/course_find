import { Box, Container, Stack, Text } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Box pt='5em' pb='5em'>
        <Stack direction={['column', 'row']} spacing='4em'>
        <Text fontSize='7xl' as='b'>
            Course Find
        </Text>
        <Text pt='2.75em'>
           CourseFind is a application to help Queen's Students quickly find out what they're about to get themselves
           into for the term. You can enter the course codes of the courses you are planning on taking for the semester
           and it will give you a variety of information about what the course (average GPA, average enrolment) and what the professor is like (rate my prof score). Currently, CourseFind contains only for the current semester
           (Winter 2023). Thank you so much for using CourseFind!
        </Text>
        </Stack>
    </Box>
  )
}

export default Logo
