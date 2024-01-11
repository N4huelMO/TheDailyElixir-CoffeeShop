import { navigationLinks } from "@/utils/constants";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

const DesktopNav = () => {
  const pathname = usePathname();

  return (
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
  );
};

export default DesktopNav;
