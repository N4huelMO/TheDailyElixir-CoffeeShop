import Header from "@/components/Header";

import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { socials } from "@/utils/constants";

import { spectralSc } from "@/utils/fonts";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`h-screen flex flex-col bg-cover bg-no-repeat bg-center text-white px-5 md:px-20 lg:px-28 pb-14 md:pb-20 transition-opacity duration-500 ${
          isOpen && "opacity-30 md:opacity-100"
        }`}
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(1,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 100%),url("/hero-image.jpg")`,
        }}
      >
        <div className="flex flex-col lg:items-end justify-center text-center md:text-left drop-shadow-xl">
          <div className="mt-48 md:w-max bg-black/30 px-4 py-6 rounded-md md:px-0 md:py-0 md:bg-transparent -z-20">
            <h1 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold">
              Start your day with an{" "}
              <span
                className={`text-[#b36f34] underline underline-offset-8 uppercase ${spectralSc.className}`}
              >
                elixir
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl mt-5 font-semibold">
              Start your day enjoying a{" "}
              <span
                className={`text-[#b36f34] underline underline-offset-4 uppercase ${spectralSc.className}`}
              >
                coffee
              </span>
            </h2>

            <div className="mt-10 flex gap-10 text-lg justify-center md:justify-normal">
              <button className="capitalize bg-[#b36f34] hover:bg-[#614126] px-5 py-2 duration-[300ms]">
                order now
              </button>

              <div className="relative group">
                <button className="capitalize bg-transparent border-2 duration-[300ms] hover:border-[#614126] border-[#b36f34] px-5 py-2">
                  read more
                </button>

                <div className="bg-[#614126] h-full w-0 duration-[400ms] absolute top-0 group-hover:w-full -z-10" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow flex items-end justify-center md:justify-start gap-10">
          {socials.map((social, i) => (
            <Link
              key={i}
              href={social.link}
              className="hover:text-[#b36f34] hover:scale-125 duration-200"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
