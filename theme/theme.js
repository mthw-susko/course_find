import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: `'Lato', sans-serif`,
        body: `'Lato', sans-serif`, 
    },
    global: {
      "#root": {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
      },
    },


})


export default theme