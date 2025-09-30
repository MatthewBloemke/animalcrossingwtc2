import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b9938',
    },
    secondary: {
      main: '#fdf6e3',
    },
  },
  typography: {
    fontFamily: `${inter.style.fontFamily}, Arial, sans-serif`,
    h1: {
      fontFamily: 'FinkHeavy, ' + inter.style.fontFamily,
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'FinkHeavy, ' + inter.style.fontFamily,
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'FinkHeavy, ' + inter.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      fontFamily: 'FinkHeavy, ' + inter.style.fontFamily,
      textTransform: 'none',
      fontSize: '1.3rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <main>
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
