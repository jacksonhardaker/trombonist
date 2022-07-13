import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
