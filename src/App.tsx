import { ThemeProvider } from "@mui/material";

import { CustomTheme } from "./theme/CustomTheme";
import MainBlock from "./components/MainBlock";
import Produtos from "./components/Produtos";
import EmailBlock from "./components/EmailBlock";

export const App = () => {
  const theme = CustomTheme;

  return (
    <>
      <ThemeProvider theme={theme}>

        <MainBlock />  
        <Produtos />   
        <EmailBlock /> 

      </ThemeProvider>
    </>
  );
}

export default App;
