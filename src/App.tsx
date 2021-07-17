import { ThemeContextProvider } from "./services/Contexts";
import Routing from "./services/Routing";
import { Header, Footer } from "./components";
import { Box } from "@material-ui/core";
import "@fontsource/roboto";

export default function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Box mt={10} mb={10}>
        <Routing />
      </Box>
      <Footer />
    </ThemeContextProvider>
  );
}
