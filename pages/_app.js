import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider } from '@mui/material/styles';
import theme from "../styles/theme/index"
import Header from "../components/Header/index";
import Footer from '../components/Footer/index';

export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Header/>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />

    </ThemeProvider>
  </>
}
