//understanding the problem
//1. can I restate the problem in my own words?
//todo example: "impliment addition" a+b

// 2.what are the inputs?

//3.what are the outputs/ return?

//4.can the output be determined from the inputs?

//* Explore concrete examples

//
//1. start with simple examples
//2.progress to more complicated examples
//3.explore examples with empty inputs
//4.explore examples with invalid inputs
//todo write a function which takes in a string and returns counts of each character in the string

// charCount("aaaa"); //{a:4}
// charCount("hello"); //{h:1, e:1, l:2, o:1}

// //? do we include characters that are not there?
// charCount("aaaa"); //{a:4, b:0. c:0}

//* Explore more complex examples */
"my phone number is 1234567892"
"Hello hi"

//* Explore examples with empty inputs */

//charCount(""); //{Null?; 0?; error?}

//* Break it down ..Idea is to COMMUNICATE WHAT YOU'RE THINKING
//* Explicitly write out what steps you need to take

//function charCount("Your PIN number is 1234"){
  //do something
  //todo We only care about alphanumeric characters, lowercase letters"

  //? will be doing something once for each character

  //make object to return at end
  //loop over string --forEach char
    //if char is num|| letter, && key in obj, +1 to count, if  num || letter and not in obj, add it to obj and set value to 1
    // if char is not letter||num, do nothing

  //look at each character- is it in the object yet?  if not, add to object and add 1 to count
  

  //return object at end
//}

//* Solve &&|| simplify problem... if you can't solve a problem, solve a simpler problem.  in simplifying a problem, you can often find answers to the larger problem
//*a. find the core difficulty
//*b.temporarily ignore that difficulty
//*c.write a simplified solution
//*d.then incorporate that difficulty back in

function charCount(str){
  //make object to return at end
  var result = {}
  //loop over string --for each char
  for(let i = 0; i < 4; i++){
    result = i++
    // //if char is num|| letter, && key in obj, +1 to count, if  num || letter and not in obj, add it to obj and set value to 1
    // if(result[char] > 0) {
    //   result[char]++;
    // } else {
    //   result[char] = 1
    // }
    return result
  }
}
  // if char is not letter||num, do nothing
  //look at each character- is it in the object yet?  if not, add to object and add 1 to count