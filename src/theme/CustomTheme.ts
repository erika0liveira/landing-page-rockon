import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const CustomTheme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200
    }
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: grey[600],
    },
  },
  typography: {
    h1: {
      fontFamily: "Metal Mania, Arial",
    },
    body1: {
      color: "gray",
    },

    fontFamily: "Ubuntu Condensed",

    allVariants: {
      color: "black",
      fontWeight: "bold"
    },
  }
});