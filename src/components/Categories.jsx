/* eslint-disable no-unused-vars */
import { LeftArrow, RightArrow } from "./icons";

const Categories = () => {
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Mixes",
    "AI",
    "Movies",
    "Live",
    "Recently uploaded",
    "New to you",
    "Trending",
    "Tech Reviews",
    "Cooking",
    "Travel",
    "Fitness",
    "Education",
    "Vlogs",
    "Funny",
    "How-to Guides",
    "Fashion",
    "Documentaries",
    "Sports",
    "Pets",
    "News",
    "DIY Projects",
    "Science",
    "Art",
    "Book Reviews",
    "Podcasts",
    "Motivational",
    "History",
  ];

  return (
    <div className="flex h-[55px] w-full items-center gap-2 px-2">
      <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
        <LeftArrow color="black" />
      </button>
      <div className="flex h-full flex-grow items-center gap-4 overflow-hidden">
        {categories.map((category) => (
          <button
            key={category}
            className="font-roboto flex-shrink-0 select-none rounded-lg bg-[#F2F2F2] px-2.5 py-1 hover:bg-[#EAEAEA]"
          >
            {category}
          </button>
        ))}
      </div>
      <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
        <RightArrow color="black" />
      </button>
    </div>
  );
};

export default Categories;
