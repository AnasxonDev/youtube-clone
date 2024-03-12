import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  const imageHeight = {
    xl: 190,
    md: 210,
    sm: 260,
    xsm: 200,
    "2xsm": 280,
    "3xsm": 250,
  };
  const width = window.innerWidth;

  let height;
  if (width >= 1300) {
    height = imageHeight.xl;
  } else if (width >= 1100) {
    height = imageHeight.md;
  } else if (width >= 800) {
    height = imageHeight.sm;
  } else if (width >= 700) {
    height = imageHeight.xsm;
  } else if (width >= 650) {
    height = imageHeight["2xsm"];
  } else if (width >= 500) {
    height = imageHeight["3xsm"];
  }

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
