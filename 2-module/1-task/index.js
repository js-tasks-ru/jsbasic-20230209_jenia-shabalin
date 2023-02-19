function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (Number.isFinite(salaries[key]) && typeof salaries[key] === typeof 1) {
      sum += salaries[key];
    }
  }
  return sum;
}
