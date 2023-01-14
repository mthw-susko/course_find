import { Container, Box, Text, Flex} from '@chakra-ui/react'
import Logo from '../components/logo'
import Search from '../components/search'
import ContentList from '../components/list'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() { 

  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  const [courseList, setCourseList] = useState([])
  const [availableCourses, setAvailableCourses] = useState([])
  useEffect(() => {
        axios.get('http://127.0.0.1/course')
          .then(res => {
            const course_codes = res.data.course_codes
            const course_options = []
            course_codes.map((course_code) => {
              course_options.push({value: course_code, label: course_code})
            })
            setAvailableCourses(course_options)
          })
          .catch(err => {console.log(err)})

  },[])

  const handleSelectedItemsChange = async (value) => {
    if (value) {
      if (value.length > 0) {
        const selected_courses = []
        for (var i = 0; i < value.length; i++) {
          const res = await axios.get(`http://127.0.0.1/course/${value[i].value}`).catch(err => console.log(err))
          const course_info = res.data.course_info
          const fetchedCourse = {
                id: course_info.id,
                courseName: course_info.name, 
                courseCode: course_info.code,
                courseDesc: course_info.description,
                courseGpa: course_info.gpa,
                courseGpaUrl: course_info.gpa_url,
                courseProfName: course_info.professor_name,
                courseAvgEnroll: course_info.enroll,
                courseRateMyProf: course_info.rate_my_prof,
                courseRateMyProfUrl: course_info.rate_my_prof_url
          }
          if (fetchedCourse.courseRateMyProf.includes(',')) {
            fetchedCourse.courseRateMyProf = fetchedCourse.courseRateMyProf.split(',')
            fetchedCourse.courseRateMyProfUrl = fetchedCourse.courseRateMyProfUrl.split(',')
            fetchedCourse.courseProfName = fetchedCourse.courseProfName.split(',')
          }
          console.log(fetchedCourse.courseProfName)
          selected_courses.unshift(fetchedCourse)
        }
        setCourseList(selected_courses)
        
      } else {
        setCourseList(value)
      }
    }
  }

  return (
    <Box display={'flex'} flexDirection='column'>
      <Container maxW='container.md' height='50%'>
          <Logo />
          <Search availableCourses={availableCourses} courseSelectChange={handleSelectedItemsChange}/>
      </Container>
      <Box height='50%'>
          <ContentList courses={courseList} />
      </Box>
    </Box>
  )
}
