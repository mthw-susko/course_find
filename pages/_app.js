import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../theme/theme'

const Main = ({ Component, pageProps}) => {

  return (
  <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
  </ChakraProvider>

  )
}

export default Main