import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

const Header = () => {
  /* pathname to highlight the active tab  
  const pathname = usePathname(); */

  return (
    <header id="header-nav" className="text-white fixed top-0 z-50 w-full py-6">
      <div className="flex justify-around items-center">
        <Link href="/">
          <Image priority src="/logo.png" alt="a" width={350} height={350} />
        </Link>

        <nav className="flex gap-10 items-center text-lg uppercase">
          <Link href="#" className="hover:text-[#b36f34]">
            Home
          </Link>
          <Link href="#" className="hover:text-[#b36f34]">
            Menu
          </Link>
          <Link href="#" className="hover:text-[#b36f34]">
            Blog
          </Link>
          <Link href="#" className="hover:text-[#b36f34]">
            About us
          </Link>

          <div className="hover:text-[#b36f34] cursor-pointer">
            <PiShoppingCartSimpleBold size={20} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
