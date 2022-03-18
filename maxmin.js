function minAndMax(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  numbers.splice(1, numbers.length - 2);
  return numbers;
}

console.log(minAndMax([1, 2, 4, 1, 0, 2, -1]));
