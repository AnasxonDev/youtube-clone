/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LeftArrow, RightArrow } from "./icons";

const Categories = ({ setCategory }) => {
  const allCategories = [
    { id: "0", name: "All" },
    { id: "1", name: "Film & Animation" },
    { id: "2", name: "Autos & Vehicles" },
    { id: "10", name: "Music" },
    { id: "15", name: "Pets & Animals" },
    { id: "17", name: "Sports" },
    { id: "20", name: "Gaming" },
    { id: "22", name: "People & Blogs" },
    { id: "23", name: "Comedy" },
    { id: "24", name: "Entertainment" },
    { id: "25", name: "News & Politics" },
    { id: "26", name: "Howto & Style" },
    { id: "27", name: "Education" },
    { id: "28", name: "Science & Technology" },
    { id: "29", name: "Nonprofits & Activism" },
    { id: "30", name: "Movies" },
    { id: "31", name: "Anime/Animation" },
    { id: "32", name: "Action/Adventure" },
    { id: "33", name: "Classics" },
    { id: "34", name: "Comedy" },
    { id: "35", name: "Documentary" },
    { id: "36", name: "Drama" },
    { id: "37", name: "Family" },
    { id: "38", name: "Foreign" },
    { id: "39", name: "Horror" },
    { id: "40", name: "Sci-Fi/Fantasy" },
    { id: "41", name: "Thriller" },
    { id: "42", name: "Shorts" },
    { id: "43", name: "Shows" },
    { id: "44", name: "Trailers" },
  ];

  return (
    <div className="flex h-[55px] w-full items-center gap-2 px-2">
      <button className="rounded-full p-2 hover:bg-[hsl(0,0%,90%)]">
        <LeftArrow color="black" />
      </button>
      <div className="flex h-full flex-grow items-center gap-4 overflow-hidden">
        {allCategories.map((category) => (
          <button
            key={category.id}
            className="font-roboto flex-shrink-0 select-none rounded-lg bg-[#F2F2F2] px-2.5 py-1 hover:bg-[#EAEAEA]"
            onClick={() => {
              setCategory(category.id);
            }}
          >
            {category.name}
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
