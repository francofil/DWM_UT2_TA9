function getOdds(nums) {
  const resultado = nums.filter(num => num % 2 == 1);
  return resultado;
}
console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
