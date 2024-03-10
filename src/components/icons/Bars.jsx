/* eslint-disable react/prop-types */
const Bars = ({ color }) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill={color}>
      <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
    </svg>
  );
};

export default Bars;
