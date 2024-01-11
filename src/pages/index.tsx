import Head from "next/head";

import { useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import MenuSection from "@/components/MenuSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <HeroSection isOpen={isOpen} />

      <MenuSection isOpen={isOpen} />
    </>
  );
}
