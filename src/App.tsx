import { ThemeProvider } from "@mui/material";

import { CustomTheme } from "./theme/CustomTheme";
import MainBlock from "./components/MainBlock";

export const App = () => {
  const theme = CustomTheme;

  return (
    <>
      <ThemeProvider theme={theme}>

        <MainBlock />      

      </ThemeProvider>
    </>
  );
}

export default App;
