//!--->frequency counters:
//* write a function called SAME, which accepts two arrays. the function should remain true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

// function same(arr1, arr2){
//   if (arr1.length !== arr2.length){
//     return false
//   }
//   //loop through first array
//   for (let i=0; i<arr1.length; i++) {
//     //what is the index of arr[i]squared in array 2? 
//     let correctIndex = arr2.indexOf(arr1[i] **2)
//   //if -1, that means there is not an index
//     if (correctIndex === -1) {
//       return false
//     }
//     //removes arr[i]squared from arr 2
//     console.log(arr2)
//     arr2.splice(correctIndex,1)
//   }
//   return true
// }

// [1,2,3,2], [9,1,4,4]

//? the indexOf is a nested loop, iterating through arrays within the i loop, runtime is On^2
//!frequency counter version

function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){ 
    frequencyCounter1[val] = (frequencyCounter1[val] ||0) +1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
  }
  //below if statement checks to see if each number in arr1 has a squared counterpart in arr2
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key **2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}


//* given two strings, write a function to determine if the second string is an anagram of the first -- use frequency counter problem 

function validAnagram(a, b) {
  if (a.length !== b.length) {
    return false
  }
  const lookup = {}
  for(let i = 0; i < a.length; i++) {
    let letter = a[i]
    //if letter exists, incriment, otherwise set to 1
    lookup[letter]? lookup[letter] += 1 : lookup[letter] = 1
  }
  console.log(lookup)
  for(let i = 0; i< b.length; i++) {
    let letter = b[i]
    if(!lookup[letter]) {
      return false 
    } else{
      lookup[letter] -=1
    }
  }
  return true
}

validAnagram('anagram', 'nagaram')

//!patterns-->  pointers
//* write a function called sumZero which accepts a **sorted** array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero, or undefined if a pair does not exist.
//simplest solution is nested loops

function sumZero(arr) {
  for (let i = 0; 1 < arr.length; i++) {
    for(let j = i+1; j< arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j])
        return arr[i], arr[j]
      }
    }
  }
}

sumZero([-4,-3,-2,-1,0,1,2,5])

//? this version is simply written out, but time complexity is O(N)^2 space complexity O(1)

//? below has time complexity of O(N), space complexity of O(1)

function sumZero(arr) {
  let left = 0
  let right = arr.length -1
  while(left<right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      console.log (arr[left], arr[right])
      return [arr[left], arr[right]]
    }
    else if (sum > 0) {
      console.log(sum, 'too high')
      right --
    }
    else {
      console.log(sum, 'too low')
      left ++
    }
  }
}

sumZero([-4, -3, -2, -1, 0,1,2,3,10])

//* implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.  there can be negative numbers in the array, but it will always be sorted.