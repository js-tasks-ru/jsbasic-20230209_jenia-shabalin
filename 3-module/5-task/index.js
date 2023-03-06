function getMinMax(str) {
  let arr = str.split(" ").filter((item) => isFinite(item));
  arr = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
  return arr;
}
