"use client";

import { useState } from "react";
import SocialMediaCards from "./components/social-media-cards";
import TextareaStyleDefault from "./components/textarea";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
export default function Home() {
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (count: number) => {
    setCharCount(count);
  };

  return (
    <div>
      <h1 className={`text-center text-5xl mt-20${firaCode.className}`}>
        charCount
      </h1>
      <div className="flex justify-center mt-10">
        <TextareaStyleDefault handleCharCount={handleCharCount} />
      </div>
      <div className="flex justify-center">
        <SocialMediaCards charCount={charCount} />
      </div>
    </div>
  );
}
