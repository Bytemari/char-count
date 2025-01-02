import SocialMediaCards from "./components/social-media-cards";
import TextareaStyleDefault from "./components/textarea";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <h1 className={`text-center text-5xl mt-20${firaCode.className}`}>
        charCount
      </h1>
      <div className="flex justify-center mt-10">
        <TextareaStyleDefault />
      </div>
      <div className="flex justify-center">
        <SocialMediaCards />
      </div>
    </div>
  );
}
