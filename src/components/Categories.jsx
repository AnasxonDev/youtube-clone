import { LeftArrow, RightArrow } from "./icons";

const Categories = ({ category, setCategory, isDarkMode }) => {
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
  ];

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex h-[55px] w-full items-center gap-2 px-2 dark:bg-[#0F0F0F] dark:text-white">
        <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#3F3F3F]">
          <LeftArrow color={isDarkMode ? "white" : "black"} />
        </button>
        <div className="flex h-full flex-grow items-center gap-4 overflow-hidden">
          {allCategories.map((item) => (
            <button
              key={item.id}
              className={`font-roboto flex-shrink-0 select-none rounded-lg ${category === item.id ? "bg-[#0F0F0F] text-white dark:bg-white dark:text-black" : "bg-[#F2F2F2] hover:bg-[#EAEAEA] dark:bg-[#272727] dark:hover:bg-[#353535]"} px-2.5 py-1`}
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
        <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)] dark:hover:bg-[#3F3F3F]">
          <RightArrow color={isDarkMode ? "white" : "black"} />
        </button>
      </div>
    </div>
  );
};

export default Categories;
