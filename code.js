//notes from js algorithms Udemy course

function addUpTo(n) {
  n * (n+1) /2
}

function addUpToAlternate(n) {
  let total = 0
  for (let i = 1; i<=n; i++) {
    total += 1
  }
  return total
}
// 
//
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log (`Time elapsed: ${(t2-t1) / 1000} seconds`)