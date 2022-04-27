import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: "Metal Mania",

    allVariants: {
      color: "black",
    }
  }
});