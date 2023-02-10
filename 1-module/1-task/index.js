function factorial(n) {
  let i = 1;
  while (n) {
    i *= n--;
  }
  return i;
}
