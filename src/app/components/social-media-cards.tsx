export default function SocialMediaCards() {
  const platforms = [
    {
      name: "Twitter",
      icon: "TWITTER",
      color: "text-white",
      count: "280",
      limit: "280",
      bgColor: "bg-customBlue", // Tailwind utility for bg-color
    },
    {
      name: "Pinterest",
      icon: "PINTEREST",
      color: "text-red-500",
      count: "500",
      limit: "500",
      bgColor: "bg-customPink",
    },
    {
      name: "LinkedIn",
      icon: "LINKEDIN",
      color: "text-blue-700",
      count: "1300",
      limit: "1300",
      bgColor: "bg-customGreen",
    },
    {
      name: "Instagram",
      icon: "INSTAGRAM",
      color: "text-gray-700",
      count: "2200",
      limit: "2200",
      bgColor: "bg-customYellow",
    },
    {
      name: "YouTube",
      icon: "YOUTUBE",
      color: "text-red-600",
      count: "5000",
      limit: "5000",
      bgColor: "bg-customViolet",
    },
    {
      name: "Facebook",
      icon: "FACEBOOK",
      color: "text-blue-600",
      count: "63206",
      limit: "63206",
      bgColor: "bg-gray-100",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center w-36 h-24 shadow-md border-2 border-gray-500 ${platform.bgColor}`}
        >
          {/* Displaying the icon */}
          <div className={`text-lg font-bold ${platform.color}`}>
            {platform.icon}
          </div>

          {/* Displaying the count/limit */}
          <div className="text-black font-semibold mt-2">
            {platform.count} / {platform.limit}
          </div>
        </div>
      ))}
    </div>
  );
}
