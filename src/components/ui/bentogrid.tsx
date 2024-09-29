import { Box, CircleDollarSign, Mouse, Sparkles } from "lucide-react";

export const BentoGrid = () => {
  return (
    <section>
      <div className="py-16 bg-black ">
        <div className="mx-auto px20 max-w-6xl text-white">
          <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
  <div className="col-span-full lg:col-span-3 lg:row-span-2 overflow-hidden flex relative p-4 rounded-3xl bg-black backdrop-blur-md border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
    <div className="size-fit relative">
      <div className="relative flex flex-col">
        <span className="w-fit block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700">
          Find Famous SIP-Like Crates to invest in
        </span>
        <p className="text-lg mt-2">You can also create yours.</p>
      </div>
      <div className="flex flex-row overflow-x-auto">
        <img src="/images/Frame 34.png" className="my-4" alt="Frame 34" />
        <img src="/images/Frame 33.png" className="my-4 mx-3" alt="Frame 33" />
      </div>
    </div>
  </div>

  <div className="col-span-full bg-gradient-to-b from-[#070A12] to-[#111910] sm:col-span-3 lg:col-span-3 lg:row-span-4 overflow-hidden relative p-8 rounded-3xl bg-black backdrop-blur-md border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
    <p className="text-5xl w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
      Create and Share Crypto
      <span className="underline underline-white"> Crates</span>
    </p>

    <div className="flex flex-row mt-10">
      <div className="flex flex-col w-2/5 p-4 rounded-xl space-y-6">
        {/* Scroll Option */}
        <div className="flex items-center space-x-2 opacity-40 rounded-2xl p-2 hover:scale-105 hover:text-yellow-400 hover:border hover:border-yellow-400 transition-transform duration-300">
          <Mouse />
          <span className="text-lg">Scroll</span>
        </div>

        <div className="flex items-center space-x-2 opacity-40 p-2 rounded-2xl hover:scale-105 hover:text-yellow-400 hover:border hover:border-yellow-400 transition-transform duration-300">
          <CircleDollarSign />
          <span className="text-lg">Invest</span>
        </div>

        <div className="flex items-center space-x-2 opacity-40 p-2 rounded-2xl hover:scale-105 hover:text-yellow-400 hover:border hover:border-yellow-400 transition-transform duration-300">
          <Box />
          <span className="text-lg">Invest</span>
        </div>

        <div className="flex items-center space-x-2 opacity-40 p-2 rounded-2xl hover:scale-105 hover:text-yellow-400 hover:border hover:border-yellow-400 transition-transform duration-300">
          <Sparkles />
          <span className="text-lg">Krypto</span>
        </div>
      </div>

      <img src="/images/Frame 25.png" alt="Frame 25" />
    </div>
  </div>

  <div className="col-span-full lg:col-span-3 lg:row-span-2 overflow-hidden relative p-4 border rounded-3xl bg-gradient-to-b from-black to-gray-900 backdrop-blur-md">
    <div className="sm:grid-cols-2 flex flex-col w-fit">
      <div className="relative w-fit">
        <p className="text-5xl w-fit text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Prove everyone what your portfolio beholds!
        </p>
      </div>

      <div className="relative flex justify-end">
        <img
          src="/images/tetris z.png"
          alt="Tetris"
          className="w-48 h-auto"
        />
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};
