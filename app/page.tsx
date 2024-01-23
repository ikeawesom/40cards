"use client";
import Logo from "@/src/components/Logo";
import PrimaryButton from "@/src/components/PrimaryButton";
import { GAMES } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [spun, setSpun] = useState(false);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (spinning) {
      const timing = Math.floor(Math.random() * 3000);
      if (!spun) setSpun(true);
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % GAMES.length);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setSpinning(false);
      }, timing);
    }
  }, [spinning]);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-6 mt-4">
      <Logo />

      <div className="min-[520px]:p-6 p-4 bg-gray-50/5 border-dashed border-2 border-gray-50 rounded-xl flex items-center justify-center flex-col min-[520px]:gap-y-6 gap-y-4 sm:w-fit w-full">
        <PrimaryButton
          onClick={() => setSpinning(true)}
          className="sm:text-4xl sm:py-4 text-xl"
          disabled={spinning}
        >
          {spinning ? "Picking..." : spun ? "Retry" : "Pick for Me"}
        </PrimaryButton>

        {spun && activeIndex !== -1 && (
          <h1 className="sm:text-4xl text-3xl text-center my-2 text-red-600">
            {GAMES[activeIndex].name}
          </h1>
        )}
        <div className="grid grid-rows-2 min-[440px]:grid-cols-2 gap-6">
          {GAMES.map((item: any, index: number) => {
            const { name, desc, id } = item;
            return (
              <Link
                href={`/${id}`}
                key={id}
                className={twMerge(
                  "flex flex-col gap-y-3 items-center justify-center p-4 rounded-xl hover:scale-105 duration-150",
                  index === activeIndex
                    ? "bg-blue-600 hover:bg-blue-700 scale-105"
                    : "bg-gray-50 hover:bg-gray-200",
                  spun &&
                    index !== activeIndex &&
                    "pointer-events-none opacity-50"
                )}
              >
                <Image
                  alt="40Cards"
                  src="/images/logo.png"
                  width={50}
                  height={50}
                />

                <h1 className="text-2xl">{name}</h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
