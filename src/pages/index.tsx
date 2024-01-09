import Header from "@/components/Header";

import Head from "next/head";

import { useState } from "react";

import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <HeroSection isOpen={isOpen} />
    </>
  );
}
