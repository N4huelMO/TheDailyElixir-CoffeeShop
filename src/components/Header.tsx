import Image from "next/image";
import Link from "next/link";

import { MenuMobileProps } from "@/utils/interfaces";

import MobileNav from "./Nav/MobileNav";
import DesktopNav from "./Nav/DesktopNav";
import HamburgerIcon from "./Nav/HamburgerIcon";

const Header = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  return (
    <>
      <header
        id="header-nav"
        className="text-white bg-black/35 md:bg-transparent fixed top-0 z-50 w-full py-6"
      >
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="flex justify-between px-5 md:px-0 md:justify-around items-center">
          <Link href="/">
            <Image
              priority
              src="/logo.png"
              alt="logo"
              width={300}
              height={300}
              className="hidden md:block w-auto"
            />

            <Image
              priority
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="block md:hidden w-64"
            />
          </Link>

          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />

          <DesktopNav />
        </div>
      </header>
    </>
  );
};

export default Header;
