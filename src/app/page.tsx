"use client";

import { useState } from "react";
import SocialMediaCards from "../components/social-media-cards";
import TextareaStyleDefault from "../components/textarea";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [charCount, setCharCount] = useState<number>(0); // Default to 0

  const handleCharCount = (count: number) => {
    setCharCount(count);
  };

  return (
    <div>
      <div>
        <h1
          className={`text-center text-5xl text-white mt-20 ${pressStart.className}`}
        >
          CHARCOUNT
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <TextareaStyleDefault handleCharCount={handleCharCount} />
      </div>
      <div className="flex justify-center">
        <SocialMediaCards charCount={charCount} />
      </div>
    </div>
  );
}
