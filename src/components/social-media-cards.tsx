import Image from "next/image";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function SocialMediaCards({ charCount }: { charCount: number }) {
  const platforms = [
    {
      name: "X",
      logo: "/images/X-Logo.png",
      color: "text-white",
      count: charCount,
      limit: 280,
      bgColor: "bg-gray-400",
    },
    {
      name: "Pinterest",
      logo: "/images/pinterest-logo.png",
      color: "text-red-500",
      count: charCount,
      limit: 500,
      bgColor: "bg-rose-300",
    },
    {
      name: "LinkedIn",
      logo: "/images/linkedin-logo.webp",
      color: "text-blue-700",
      count: charCount,
      limit: 1300,
      bgColor: "bg-sky-300",
    },
    {
      name: "Instagram",
      logo: "/images/instagram-logo.png",
      color: "text-gray-700",
      count: charCount,
      limit: 2200,
      bgColor: "bg-yellow-300",
    },
    {
      name: "YouTube",
      logo: "/images/youtube-logo.webp",
      color: "text-red-600",
      count: charCount,
      limit: 5000,
      bgColor: "bg-rose-400",
    },
    {
      name: "Facebook",
      logo: "/images/facebook-logo.png",
      color: "text-blue-600",
      count: charCount,
      limit: 63206,
      bgColor: "bg-gray-200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-4 p-4 mt-3">
      {platforms.map((platform, index) => {
        const reachedLimit = platform.count > platform.limit;
        return (
          <div key={index} className="relative group">
            {/* Background shadow */}
            <div className="w-full bg-black h-full transition absolute translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Card */}
            <div
              className={`flex flex-col items-center justify-center w-36 h-24 shadow-md border-2 relative ${
                reachedLimit ? "border-red-500" : "border-transparent"
              } ${platform.bgColor}`}
            >
              {/* Displaying the logo */}
              <div className="m-1">
                <Image
                  alt="logo"
                  className="size-[30px]"
                  width={100}
                  height={100}
                  src={platform.logo}
                />
              </div>
              {/* Displaying the count/limit */}
              <div
                className={`text-black font-normal text-lg ${firaCode.className}`}
              >
                <span className={reachedLimit ? "text-red-500" : ""}>
                  {platform.count}
                </span>{" "}
                / {platform.limit}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
