function mostCalories(arr) {
  let mostCalories = 0 
arr.forEach(num => {
  if (num > mostCalories) {
    mostCalories = num
  }
return (
console.log(mostCalories)
)
})
}

mostCalories([3, 5, 22, 4])