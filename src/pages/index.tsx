import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";

import { Spectral_SC } from "next/font/google";

import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const spectralSc = Spectral_SC({
  subsets: ["latin"],
  weight: "700",
});

const socials = [
  { name: "Linkedin", link: "#", icon: <BsLinkedin size={40} /> },
  { name: "GitHub", link: "#", icon: <BsGithub size={40} /> },
  { name: "Instagram", link: "#", icon: <BsInstagram size={40} /> },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Daily Elixir</title>
      </Head>

      <Header />

      <div
        className="h-screen flex flex-col bg-cover bg-no-repeat bg-center text-white px-5 md:px-28 pb-20"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(1,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 100%),url("/hero-image.jpg")`,
        }}
      >
        <div className="flex flex-col md:items-end justify-center text-center md:text-left drop-shadow-xl">
          <div className="mt-48 md:w-max bg-black/30 px-4 py-6 rounded-md md:px-0 md:py-0 md:bg-transparent -z-20">
            <h1 className="text-5xl lg:text-6xl font-semibold">
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
