"use client";

import { useState } from "react";
import SocialMediaCards from "../components/social-media-cards";
import TextareaStyleDefault from "../components/textarea";
import { Press_Start_2P } from "next/font/google";
import Image from "next/image";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [charCount, setCharCount] = useState<number>(0); // Default to 0

  const handleCharCount = (count: number) => {
    setCharCount(count);
  };

  const gifSize = 50;

  return (
    <div>
      <div className="flex justify-center items-center mt-14">
        <Image
          className="block"
          src="/images/cat.gif"
          width={gifSize}
          height={gifSize}
          alt="cat image"
        />
        <h1 className={`text-5xl mx-4 text-white ${pressStart.className}`}>
          CHARCOUNT
        </h1>
        <Image
          className="block -ml-3"
          src="/images/cat.gif"
          width={gifSize}
          height={gifSize}
          alt="cat image"
        />
      </div>
      <div className="flex justify-center mt-5">
        <TextareaStyleDefault handleCharCount={handleCharCount} />
      </div>
      <div className="flex justify-center">
        <SocialMediaCards charCount={charCount} />
      </div>
    </div>
  );
}
