import { ThemeProvider } from "@mui/material";

import { CustomTheme } from "./theme/CustomTheme";
import MainBlock from "./components/MainBlock";
import EmailBlock from "./components/EmailBlock";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

export const App = () => {
  const theme = CustomTheme;

  return (
    <>
      <ThemeProvider theme={theme}>

        <MainBlock />  
        <EmailBlock /> 
        <Produtos /> 
        <Footer />  

      </ThemeProvider>
    </>
  );
}

export default App;