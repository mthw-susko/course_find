import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Box, Text, Stack, Divider, Link, Highlight, Badge } from '@chakra-ui/react'

const ListItem = ({ course }) => {
    const courseHeader = `${String(course.courseCode)} - ${String(course.courseName)}` 
    const profDisplay = []

    if (Array.isArray(course.courseRateMyProfUrl)) {
        for(var i = 0; i < course.courseRateMyProfUrl.length; i++) {
            profDisplay.unshift(
                <>
                    {course.courseRateMyProf[i] != "N/A" 
                        ? <><Link color={"#FFAD4D"} href={course.courseRateMyProfUrl[i]} isExternal>
                            <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseRateMyProf[i]}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                            </Link>&nbsp;</>
                        : <Text color={"#FFAD4D"}>{course.courseRateMyProf[i]}&nbsp;</Text>
                    }
                </>
            )
        }
    } else {
        profDisplay.unshift(
            <>
                {course.courseRateMyProf != "N/A" 
                    ? <><Link color={"#FFAD4D"} href={course.courseRateMyProfUrl} isExternal>
                        <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseRateMyProf}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                        </Link>&nbsp;</>
                    : <Text color={"#FFAD4D"}>{course.courseRateMyProf}</Text>
                }
            </>
        )
    }
    

  return (
    <Container 
    maxW={'container.md'} bgColor="#2B308B" 
    style={{borderRadius:'7px'}} p={'1em'}  mb={'1em'}
    _hover={{ boxShadow: "outline", outlineColor:'#5A81FA'}}
    >
        <Stack direction={'row'}>
            <Box style={{float:'left'}} width='60%'> 
                <Text fontSize={'2xl'} top='0' as='b'>
                    <Highlight query={course.courseCode} styles={{ color:'#FFAD4D'}}>
                        {courseHeader}
                    </Highlight>
                </Text>
                <Text>{course.courseDesc}</Text>
            </Box>
            <Box float={'left'}>
            <Divider orientation='vertical' borderColor={'#CEDEFF'} borderWidth='2px' borderRadius={'7px'} />
            </Box>
            <Box style={{float:'left'}} width='40%'>
                <Stack direction={'column'} alignContent={'center'} display={'inline'}>
                    <Text fontSize={'xl'}>
                        GPA:&nbsp;
                        {course.courseGpaUrl != "N/A" 
                            ?<Link color={"#FFAD4D"} href={course.courseGpaUrl} isExternal>
                                <Badge variant='subtle' fontSize={'0.9em'} color={'#FFAD4D'}>{course.courseGpa}<ExternalLinkIcon pb={'0.2em'}/></Badge>
                            </Link>
                            :<Text color={"#FFAD4D"}>{course.courseGpa}</Text>
                        }
                    </Text>
                    <Text fontSize={'xl'}>
                        Average Enrollment: <Text color={"#FFAD4D"}>{course.courseAvgEnroll}</Text>
                    </Text>
                    <Text fontSize={'xl'}>
                        Professor Name(s): 
                        {Array.isArray(course.courseProfName) 
                            ? course.courseProfName.map(function(prof, i){
                                console.log('test')
                                return <Text key={i} color={"#FFAD4D"}>{prof}<br/></Text>
                            })
                            : <Text color={"#FFAD4D"}>{course.courseProfName}</Text>
                            
                        }
                    </Text>
                    <Text fontSize={'xl'}>
                        Rate My Prof:&nbsp;
                        <Box display={'flex'}>
                        {
                            profDisplay.map((elem) => elem)
                        }
                        </Box>
                    </Text>
                </Stack>
            </Box>
        </Stack>
    </Container>
  )
}

export default ListItem