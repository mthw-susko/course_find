import Link from 'next/link'
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react'

const Nav = () => {
  return (
    <Box pt={3} >
       <Container p={2} maxW='container.md' wrap="wrap" align="center" justify='space-between'>
        <Flex>
          <Link  href='/'>
            <Text _hover={{ color:"#FFAD4D", textDecoration:'underline'}} as='b' fontSize='xl'>Course Find</Text> 
          </Link>
          <Spacer/>
          <Link href='/about'>
            <Text _hover={{ color:"#FFAD4D", textDecoration:'underline'}} as='b' fontSize='xl'>About</Text> 
          </Link>
        </Flex>
        </Container> 
    </Box>
    
  )
}

export default Nav