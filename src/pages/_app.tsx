import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${robotoCondensed.className} bg-neutral-800 text-white`}>
      <Component {...pageProps} />
    </main>
  );
}
