import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400", // Specify the weight explicitly
});

export default function H1() {
  return (
    <h1
      className={`text-center text-5xl text-white mt-20 ${pressStart.className}`}
    >
      CHARCOUNT
    </h1>
  );
}
