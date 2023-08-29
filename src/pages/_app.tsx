import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}
