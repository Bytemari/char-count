import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
export default function TextareaStyleDefault() {
  return (
    <textarea
      rows={10}
      placeholder="type something..."
      className={`px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs text-2xl ${firaCode.className}`}
      style={{
        minWidth: "200px",
        minHeight: "200px",
        width: "50%",
        height: "auto",
      }}
    />
  );
}
