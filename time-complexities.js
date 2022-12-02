//notes from js algorithms Udemy course

function addUpTo(n) {
  n * (n+1) /2
}
// This is constant,  the number od steps is consistent regardless of size of 'n'
//O(1)
//takes 3 operations, add, multiply, and divide.

function addUpToAlternate(n) {
  let total = 0
  for (let i = 1; i<=n; i++) {
    total += 1
  }
  return total
}
//number of operations varies, is bounded to multiples of 'n'
//O(n)
//this is a loop. does an operation for each number leading up to 
// 
//
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log (`Time elapsed: ${(t2-t1) / 1000} seconds`)

// best to count the number of operations the computer has to perform instead of trying to time it