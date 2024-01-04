import Header from "@/components/Header";
import Head from "next/head";

import { Spectral_SC } from "next/font/google";

const spectralSc = Spectral_SC({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header />

      <div
        className="h-screen bg-cover bg-no-repeat bg-center text-white px-28"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(1,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 100%),url("/hero-image.jpg")`,
        }}
      >
        <div className="flex flex-col items-end justify-center drop-shadow-xl">
          <div className="mt-48 w-max">
            <h1 className="text-6xl font-semibold">
              Start your day with an{" "}
              <span
                className={`text-[#b36f34] underline underline-offset-8 uppercase ${spectralSc.className}`}
              >
                elixir
              </span>
            </h1>

            <h2 className="text-4xl mt-5 font-semibold">
              Start your day enjoying a{" "}
              <span
                className={`text-[#b36f34] underline underline-offset-4 uppercase ${spectralSc.className}`}
              >
                coffee
              </span>
            </h2>

            <div className="mt-10 flex gap-10 text-lg">
              <button className="capitalize bg-[#b36f34] hover:bg-[#614126] px-5 py-2 duration-[300ms]">
                order now
              </button>

              <div className="relative group">
                <button className="capitalize bg-transparent border-2 duration-[400ms] hover:border-[#614126] border-[#b36f34] px-5 py-2 ">
                  read more
                </button>

                <div className="bg-[#614126] h-full w-0 duration-[400ms] absolute top-0 group-hover:w-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
