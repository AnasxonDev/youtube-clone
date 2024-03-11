/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LeftArrow, RightArrow } from "./icons";

const Categories = ({ category, setCategory }) => {
  const allCategories = [
    { id: "0", name: "All" },
    { id: "20", name: "Gaming" },
    { id: "2", name: "Auto Mobiles" },
    { id: "17", name: "Sports" },
    { id: "24", name: "Entertainment" },
    { id: "28", name: "Technology" },
    { id: "10", name: "Music" },
    { id: "22", name: "Blogs" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
    { id: "25", name: "News" },
  ];

  return (
    <div className="flex h-[55px] w-full items-center gap-2 px-2">
      <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
        <LeftArrow color="black" />
      </button>
      <div className="flex h-full flex-grow items-center gap-4 overflow-hidden">
        {allCategories.map((item) => (
          <button
            key={item.id}
            className={`font-roboto flex-shrink-0 select-none rounded-lg ${category === item.id ? "bg-[#0F0F0F] text-white" : "bg-[#F2F2F2] hover:bg-[#EAEAEA]"} px-2.5 py-1`}
            onClick={() => {
              if (category !== item.id) {
                setCategory(item.id);
              }
            }}
          >
            {item.name}
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
