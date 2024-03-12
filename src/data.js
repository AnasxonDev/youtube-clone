export const API_KEY = "AIzaSyBqkZf_NZ37Z9hB2UVEK0SHHJKbPe2zmbY";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
