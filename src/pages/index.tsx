import Head from "next/head";

import { useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <HeroSection isOpen={isOpen} />

      <div
        id="menu"
        className="flex flex-col bg-cover bg-no-repeat bg-bottom text-white px-5 md:px-16 lg:px-20 pb-20"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(1,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%),url("/menu-image.jpg")`,
        }}
      >
        <h1 className="mt-28 text-5xl md:text-6xl font-bold">
          Featured Orders
        </h1>

        <div className="mt-10 md:mt-16 flex flex-col gap-10">
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-2 sm:gap-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex items-end justify-center">
            <button className="capitalize px-5 py-2 bg-[#b36f34] text-black font-bold text-xl w-full md:w-1/2 xl:w-1/5 shadow-lg shadow-black/80 hover:scale-105 transition-all">
              see more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
