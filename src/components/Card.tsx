import Image from "next/image";

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

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 text-black font-bold text-xs">
            <p className="px-2 py-0.5 bg-[#b36f34]">Tags</p>
            <p className="px-2 py-0.5 bg-[#b36f34]">Tags</p>
          </div>

          <p className="text-3xl text-gray-200">
            $ <strong>30</strong>
          </p>
        </div>

        <button className="capitalize bg-[#b36f34] text-black px-3 py-1 w-full font-bold text-lg mt-2 hover:bg-[#e68f44] transition-all active:scale-95">
          add cart
        </button>
      </div>
    </div>
  );
};

export default Card;
