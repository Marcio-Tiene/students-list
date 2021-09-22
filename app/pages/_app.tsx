import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../GlobalStyle'

const theme = {
  colors: {
    primary: '#054BBA',
    primaryLight: '#1B5CC4',
    headingOnLight: '#000000',
    textOnLight: '#F9F9F9',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
