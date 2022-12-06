// //notes from js algorithms Udemy course

function addUpTo(n) {
  n * (n+1) /2
}
// //takes 3 operations, add, multiply, and divide.

// function logAtLeast5(n) {
//   for(var i = 1; i<= Math.max(5,n); i++ {
//    console.log(i)
//  }
//  }
// big O = O(n) number grows in proportion to n

//function logAtLeast5(n) {
//  for(var i = 1; i<= Math.min(5,n); i++ {
//    console.log(i)
//  }
//  }
// big O = O(5) at the largest. number grows in proportion to n.  min is a constant, or loops runs a smaller number of times

//

// function addUpToAlternate(n) {
//   let total = 0
//   for (let i = 1; i<=n; i++) {
//     total += 1
//   }
//   return total
// }
// // this is a loop. does an operation for each number leading up to 
// // 
//
let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log (`Time elapsed: ${(t2-t1) / 1000} seconds`)



// // best to count the number of operations the computer has to perform instead of trying to time it\\

// function challenge(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 15 === 0) {
//       return "FizzBuzz"
//   }
//     else if (i % 3 === 0) { return "Fizz"}
//     else if (i % 5 === 0) { return "Buzz"}
//     else { return i }
//   }
// } 

//   console.log(num)

//   for (let i = 1; i <= num; i++) {
//     if (i++ % 15 == 0) { return "FizzBuzz"}
//     else if (i % 3 == 0) { return "Fizz"}
//     else if (i % 5 == 0) { return "Buzz"}
//     else console.log(i);
//   }
// challenge(20)



// function StringChallenge(str) { 
//   str = str.toLowerCase()
//   let letterNums = {}
//   let letter = '0abcdefghijklmnopqrstuvwxyz'
//   let ans = ''
//   for (let i = 1; i<= letter.length; i++) {
//     letterNums[letter[i]] = i
//     console.log(letterNums)
//   }

//   for (let j = 0; j <= str.length; j++) 
//     if (letter.includes(str[j])) {
  //     ans += (letterNums[str[j]])
  //     console.log (ans)
  //   } else {
    //     ans += str[j]
    //   }
    //   str = ans
    //}
    // code goes here  
    
    
    // str[j].replace(str[j], letterNums[str[j]])
    //   console.log("j is " + str[j]) }}
    // ) 
    // result = (letter.match (str[j] / letterNums[str[j]]) )
    //   ans += letterNums[str[j]]
    // }
    // else { ans += str[j]
    // }
    // console.log(result)
    
    //StringChallenge('123 abc!')

    // function ArrayChallenge(arr) { 
    //   let count = {}
    //   let output = 0
    //   arr.forEach(num => {
    //     count[num] = (count[num] || 0) + 1
    //     if (count[num] > 1) {
    //       output = output + 1
    //     }
    //   arr = output
    //   })
    //***try this with Math.max(), (don't use no params or it will run forever and that's annoying) smh */
    
    //   // code goes here  
    //   return arr; 
    
    // }

    // ArrayChallenge(1,3,5,5,2)