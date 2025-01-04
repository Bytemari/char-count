export default function SocialMediaCards({ charCount }: { charCount: number }) {
  const platforms = [
    {
      name: "Twitter",
      icon: "TWITTER",
      color: "text-white",
      count: charCount,
      limit: 280,
      bgColor: "bg-customBlue", // Tailwind utility for bg-color
    },
    {
      name: "Pinterest",
      icon: "PINTEREST",
      color: "text-red-500",
      count: charCount,
      limit: 500,
      bgColor: "bg-customPink",
    },
    {
      name: "LinkedIn",
      icon: "LINKEDIN",
      color: "text-blue-700",
      count: charCount,
      limit: 1300,
      bgColor: "bg-customGreen",
    },
    {
      name: "Instagram",
      icon: "INSTAGRAM",
      color: "text-gray-700",
      count: charCount,
      limit: 2200,
      bgColor: "bg-customYellow",
    },
    {
      name: "YouTube",
      icon: "YOUTUBE",
      color: "text-red-600",
      count: charCount,
      limit: 5000,
      bgColor: "bg-customViolet",
    },
    {
      name: "Facebook",
      icon: "FACEBOOK",
      color: "text-blue-600",
      count: charCount,
      limit: 63206,
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-4 p-4  ">
      {platforms.map((platform, index) => {
        const reachedLimit = platform.count > platform.limit;
        return (
          <div key={index} className="relative group">
            <div className="w-full bg-black h-full transition absolute translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div
              className={`flex flex-col items-center justify-center w-36 h-24 shadow-md border-2 relative ${
                reachedLimit ? "border-red-500" : "border-gray-500"
              }  ${platform.bgColor}`}
            >
              {/* Displaying the icon */}
              <div className={`text-lg font-bold ${platform.color}`}>
                {platform.icon}
              </div>

              {/* Displaying the count/limit */}
              <div className="text-black font-semibold mt-2">
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
