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
        className="xl:h-screen flex flex-col bg-cover bg-no-repeat bg-bottom text-white px-5 md:px-16 lg:px-20 pb-20"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(1,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%),url("/menu-image.jpg")`,
        }}
      >
        <h1 className="mt-32 text-5xl md:text-6xl font-bold">
          Featured Orders
        </h1>

        <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-y-4 gap-x-2 md:justify-start sm:gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
