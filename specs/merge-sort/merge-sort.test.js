/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  //base case
  if (nums.length === 1 || nums.length === 0) {
    return nums
  }
  //break into two smaller arrays and call mergesort on them
  const length = nums.length
  const middle = Math.floor(length / 2)
  const leftArr = nums.slice(0, middle)
  const rightArr = nums.slice(middle)

  return merge(mergeSort(leftArr), mergeSort(rightArr))

};


//takes 2 sorted arrays and returns the sorted version
const merge = (arr1, arr2) => {
  let mergedArr = []
  while (arr1 && arr2) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1.shift())
    } else {
      mergedArr.push(arr2.shift())
    }
  }
  return mergedArr.concat(arr1, arr2)
}

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
