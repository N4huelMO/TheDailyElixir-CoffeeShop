import Image from "next/image";
import Link from "next/link";

import { MenuMobileProps } from "@/utils/interfaces";

import MobileMenu from "./Menus/MobileMenu";
import DesktopMenu from "./Menus/DesktopMenu";
import HamburgerIcon from "./Menus/HamburgerIcon";

const Header = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  return (
    <>
      <header
        id="header-nav"
        className="text-white bg-black/35 md:bg-transparent fixed top-0 z-50 w-full py-6"
      >
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

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

          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />

          <DesktopMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
