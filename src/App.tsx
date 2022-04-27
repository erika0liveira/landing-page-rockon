import { ThemeProvider } from "@mui/material";

import { CustomTheme } from "./theme/CustomTheme";
import MainBlock from "./components/MainBlock";
import EmailBlock from "./components/EmailBlock";

export const App = () => {
  const theme = CustomTheme;

  return (
    <>
      <ThemeProvider theme={theme}>

        <MainBlock />     
        <EmailBlock /> 

      </ThemeProvider>
    </>
  );
}

export default App;
