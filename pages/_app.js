import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "mapbox-gl/dist/mapbox-gl.css"
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
