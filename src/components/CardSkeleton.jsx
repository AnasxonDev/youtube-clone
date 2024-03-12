import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  const imageHeight = { xl: 190, md: 210 };
  const height = window.innerWidth >= 1300 ? imageHeight.xl : imageHeight.md;

  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="size-full max-w-[500px]">
        <div className="mb-2 w-full">
          <Skeleton height={height} />
        </div>
        <h1>
          <Skeleton width={250} />
        </h1>
        <h1>
          <Skeleton width={150} />
        </h1>
        <h1>
          <Skeleton width={200} />
        </h1>
      </div>
    ));
};

export default CardSkeleton;
