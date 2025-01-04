"use client";

import { useState } from "react";
import SocialMediaCards from "./components/social-media-cards";
import TextareaStyleDefault from "./components/textarea";
import H1 from "./components/h1";
export default function Home() {
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (count: number) => {
    setCharCount(count);
  };

  return (
    <div>
      <div>
        <H1 />
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
