import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    primary: {
      main: "#000000",
    }
  },
  typography: {
    h1: {
      fontFamily: "Metal Mania",
    },

    fontFamily: "Ubuntu Condensed",

    allVariants: {
      color: "black",
      fontWeight: "bold"
    },
  }
});