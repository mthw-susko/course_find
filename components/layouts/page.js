import { Container } from "@chakra-ui/react"
import Head from "next/head"

const Page = ({ children, title }) => {
  return (
    <Container maxW='container.md'>
      { title && (
        <>
        <Head>
          {title} - Course Find
        </Head>
        </>
      )
      }
        {children}
    </Container>
  )
}

export default Page