import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1b9938',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'FinkHeavy',
    button: {
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
