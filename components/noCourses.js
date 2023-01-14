import { Container, Box, Text, Card, CardBody } from '@chakra-ui/react'

const NoCourses = () => {
  return (
    <Box align='center' bgColor="#CEDEEF"  pt='5em' pb='5em' style={{display:'flex',minHeight:'54vh', flexDirection:'column',}}>
        <Container maxW={'container.md'}>
            <Card bgColor="#5A81FA">
                <CardBody>
                    <Text fontSize={'xl'}>No Courses Selected</Text>
                </CardBody>
            </Card>
        </Container>
    </Box>
  )
}

export default NoCourses