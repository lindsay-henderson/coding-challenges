//auxiliary space complexity
// refers to space required by the algorithm, not space taken up by inputs

//primitives- (booleans, numbers, undefined, null) are constamt space O(1)
//strings require O(n) space, where N is the string length (varies depending on n)
//Reference types are usually O(n) where n is the length (for arrays) or number of keys(for objects)

function sum(arr) {
  let total = 0
  // one variable
  for (let i = 0; i < arr.length; i++) {
    // not concerned about run  time, only two variables
    total += arr[i]
    //
  }
  return total
}
//O(1) space- always the same regardless of size of the input

function double(arr) {
  let newArr = []
  //make new array
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2* arr[i])
    //because of recurring push- space taken up is proportional to N because array keeps getting longer based on length of n
    //O(n)
  }
  return newArr
}