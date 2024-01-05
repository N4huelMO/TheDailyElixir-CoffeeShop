import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About us", href: "#" },
];

const Header = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      id="header-nav"
      className="text-white bg-black/35 md:bg-transparent fixed top-0 z-50 w-full py-6"
    >
      <div className="flex justify-between px-8 md:px-0 md:justify-around items-center">
        <Link href="/">
          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={350}
            height={350}
            className="hidden md:block"
          />

          <Image
            priority
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="block md:hidden"
          />
        </Link>

        <button
          className="flex flex-col justify-center items-center cursor-pointer md:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            className={`bg-[#b36f34] w-6  h-0.5 transition-all ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <div
            className={`bg-[#b36f34] w-6  h-0.5 transition-all my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`bg-[#b36f34] w-6  h-0.5 transition-all ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </button>

        <nav className="hidden gap-5 xl:gap-10 items-center text-lg uppercase md:flex">
          {navigationLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`hover:text-[#b36f34] font-bold ${
                pathname === link.href && "text-[#b36f34]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="hover:text-[#b36f34] cursor-pointer">
            <PiShoppingCartSimpleBold size={20} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
