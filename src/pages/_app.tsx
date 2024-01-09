import "@/styles/globals.css";
import { robotoCondensed } from "@/utils/fonts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${robotoCondensed.className} bg-neutral-800 text-white`}>
      <Component {...pageProps} />
    </main>
  );
}
