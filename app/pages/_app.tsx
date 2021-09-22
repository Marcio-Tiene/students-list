import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../GlobalStyle'
import { theme } from '../theme'

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
