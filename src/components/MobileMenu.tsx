import { navigationLinks } from "@/utils/constants";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuMobileProps } from "@/utils/interfaces";

const MobileMenu = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`md:hidden z-10 fixed top-[4.55rem] transition-all duration-500 test w-full h-screen bg-neutral-900 flex flex-col ${
        isOpen
          ? "translate-x-48 sm:translate-x-[calc(100%_-_20rem)]"
          : "translate-x-[calc(100%_+_1rem)]"
      }`}
    >
      {navigationLinks.map((link, i) => (
        <Link
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          key={i}
          href={link.href}
          className={`p-4 text-xl font-bold ${
            pathname === link.href && "text-[#b36f34]"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
