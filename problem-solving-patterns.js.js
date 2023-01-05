//frequency counters:
//* write a function called SAME, which accepts two arrays. the function should remain true if every value in the array has it's corresponding value squared in the second array. the frequency of values must be the same.

function same(arr1, arr2){
  if (arr1.length !== arr2.length){
    return false
  }
  //loop through first array
  for (let i=0; i<arr1.length; i++) {
    //what is the index of arr[i]squared in array 2? 
    let correctIndex = arr2.indexOf(arr1[i] **2)
  //if -1, that means there is not an index
    if (correctIndex === -1) {
      return false
    }
    //removes arr[i]squared from arr 2
    console.log(arr2)
    arr2.splice(correctIndex,1)
  }
  return true
}

[1,2,3,2], [9,1,4,4]

//? the indexOf is a nested loop, iterating through arrays within the i loop, runtime is On^2

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