import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",//
      light: "#FFFFFF", //white text
      dark: "#2A2D32",  //black text
    },
    secondary: {
      main: "#FFFFFF",
      light: "#E6E8EC", 
      dark: '#FFFFFF'
    }
  },
});

export default theme;