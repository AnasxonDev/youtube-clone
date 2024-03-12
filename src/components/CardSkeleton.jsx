import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div key={item} className="size-full max-w-[500px]">
        <div className="mb-2 w-full">
          <Skeleton height={200} />
        </div>
        <h1>
          <Skeleton width={200} />
        </h1>
        <h1>
          <Skeleton width={100} />
        </h1>
        <h1>
          <Skeleton width={150} />
        </h1>
      </div>
    ));
};

export default CardSkeleton;
