import Image from "next/image";
import {
  PiShoppingCartSimpleBold,
  PiPlusBold,
  PiMinusBold,
} from "react-icons/pi";

const Card = () => {
  return (
    <div className="w-72 md:w-60 bg-black/50 rounded-t-lg shadow-lg shadow-black/60">
      <Image
        src="/coffee.jpg"
        alt=""
        width={300}
        height={300}
        className="rounded-t-lg"
        priority
      />

      <div className="mt-2 px-3 pb-3">
        <p className="text-2xl font-bold text-[#b36f34] capitalize">
          Espresso Coffee
        </p>

        <p className="text-gray-200 md:text-lg">
          A shot of pure coffee essence. The perfect way to jumpstart your day.
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center justify-center gap-1">
            <p className="text-xl text-gray-200">$</p>{" "}
            <strong className="text-3xl">30</strong>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-between gap-1 flex-1 bg-[#b36f34]/10 p-2 rounded-sm">
              <button className="w-10 md:w-8 h-6 flex justify-center items-center">
                <PiMinusBold />
              </button>
              <p className="w-1/2 text-center">1</p>
              <button className="w-10 md:w-8 h-6 flex justify-center items-center">
                <PiPlusBold />
              </button>
            </div>

            <button className="capitalize bg-[#b36f34] text-black w-10 flex items-center justify-center rounded-sm w font-bold text-lg hover:bg-[#e68f44] transition-all active:translate-y-0.5">
              <PiShoppingCartSimpleBold />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
