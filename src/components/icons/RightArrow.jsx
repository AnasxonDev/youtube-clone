/* eslint-disable react/prop-types */
const RightArrow = ({ color, size }) => {
  return (
    <svg
      height={size || 24}
      viewBox="0 0 24 24"
      width={size || 24}
      focusable="false"
      fill={color}
    >
      <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
    </svg>
  );
};

export default RightArrow;
