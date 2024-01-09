import { MenuMobileProps } from "@/utils/interfaces";

const HamburgerIcon = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  return (
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
  );
};

export default HamburgerIcon;
