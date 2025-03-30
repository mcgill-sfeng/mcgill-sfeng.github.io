import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import i18n from "./i18n";
import { PageRouter } from "./pages";
import { I18nextProvider } from "react-i18next";

const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
});

const App = () => (
  <>
    <I18nextProvider i18n={i18n}>
      <MantineProvider theme={theme}>
        <PageRouter />
      </MantineProvider>
    </I18nextProvider>
  </>
);

export default App;
