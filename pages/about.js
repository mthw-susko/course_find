import { Container, Box, Text, Card, CardBody, CardHeader, Heading, Link } from '@chakra-ui/react'

const About = () => {
  return (
      <Box pt='3em' maxh="100vh">
          <Container maxW={'container.md'} bgColor>
              <Card bgColor="#5A81FA">
                <CardHeader alignSelf={'center'}>
                  <Heading>About CourseFind</Heading>  
                </CardHeader>
                  <CardBody>
                      <Text fontSize={'xl'}>
                        CourseFind is the one stop shop for all the information you might need for classes
                        you are already taking or planning on taking! I created CourseFind because I was sick of going to the
                        same sites over and over again to find out information about the courses I was going to take for 
                        the semester. So, I decided to compile all this information into one place so you don't have to 
                        go searching for it anymore. This application is greatly inspired by {' '}<Link color={'#FFAD4D'} isExternal href='https://ekimerton.github.io/classio/'>Classio</Link> and 
                        I think if you have the time you should definately check it out (although it hasn't been updated in sometime). Hope this application is helpful and makes your life just a little 
                        easier. School can be hard, I don't think trying to plan out your classes should be as well.<br/><br/>

                        Hope you're doing well and good luck in all your studies!<br/><br/>

                        All the best<br/><br/>

                        Matthew (<Link color={'#FFAD4D'} href='https://matthewsusko.ca' isExternal>Portfolio</Link>) (<Link color={'#FFAD4D'} href='https://github.com/mthw-susko' isExternal>Github</Link>) (<Link color={'#FFAD4D'} href='https://www.linkedin.com/in/matthew-mb-susko/' isExternal>Linkedin</Link>)
                      </Text>
                  </CardBody>
              </Card>
          </Container>
      </Box>
  )
}

export default About