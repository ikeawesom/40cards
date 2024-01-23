import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex min-[440px]:gap-x-3 gap-x-1 hover:gap-x-6 duration-150 items-center justify-center">
        <Image alt="40Cards" src="/images/logo.png" width={100} height={100} />
        <h1 className="text-gray-50 font-bold min-[440px]:text-6xl text-4xl">
          40C<span className="text-red-600">a</span>rds
        </h1>
      </div>
    </Link>
  );
}
