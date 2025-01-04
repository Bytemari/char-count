import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
export default function TextareaStyleDefault({
  handleCharCount,
}: {
  handleCharCount: (count: number) => void;
}) {
  return (
    <div className="min-w-[200px] min-h-[200px] w-1/2 h-auto relative">
      <div className="w-full bg-black inset-2 absolute h-full" />
      <textarea
        onChange={(e) => {
          const length = e.target.value.length;
          handleCharCount(length);
        }}
        rows={10}
        placeholder="type something..."
        className={`bg-customPale p-2 w-full border-2 block border-black relative shadow-md transition focus:outline-none focus:shadow-xs text-2xl ${firaCode.className}`}
      />
    </div>
  );
}
