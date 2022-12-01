// function mostCalories(arr) {
//   let mostCalories = 0 
// arr.forEach(num => {
//   if (num > mostCalories) {
//     mostCalories = num
//   }
// return (
// console.log(mostCalories)
// )
// })
// }

function calorieCount(cals) {
  console.log(Object.keys(cals).length)
  let arr = []
  let total = 0
cals.map(num => {
  console.log(cals.indexOf(num))
  console.log('length:' + num.length)
  if (num === 0 || cals.lastIndexOf(num) === (cals.length - 1)) {
    total = total + num
    arr.push(total)
    total = 0
  }
  else {
    total = total + num
  }
  console.log('total:' + total)
}
  )
  console.log(arr)
}

calorieCount([1,3,4,,6,1,,4,20])