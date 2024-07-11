function selectionSort(arr) {
  // type your code here
  const lowest = {
    index: -1,
    value: 0
  }
  for (let i = 0; i < arr.length - 1; i++) {
    lowest.index = i;
    lowest.value = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const lowestValue = Math.min(lowest.value, arr[j]);
      if (lowestValue === arr[j] && lowestValue != lowest.value) {
        lowest.index = j;
        lowest.value = lowestValue;
      }
    }
    if (lowest.index !== i) {
      const temp = arr[i];
      arr[i] = arr[lowest.index];
      arr[lowest.index] = temp;
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
