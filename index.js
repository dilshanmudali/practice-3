
// Add All

// const addAll = (...nums) => {
//   // let total = 0;
//   return nums.reduce((a,b) => a+b,0)
//   // nums.forEach(num => {
//   //   total += num
//   // });
//   // return total;
// } 



// console.log(addAll(2,5,6,7))


// sum all primes

// const sumAllPrimes = (num) => {
//   let totalPrimes = 0;

//   const checkPrimes = (i) => {
//     for(j=2; j<i; j++){
//       if(i % j === 0){
//         return false
//       }
//     }
//     return true;
//   }

//   //loop over num and start with i=2, first prime is 2
//   for(i=2; i<=num; i++){
//     if(checkPrimes(i)){
//       totalPrimes += i
//     }
//   }
//   return totalPrimes;
// }

// console.log(sumAllPrimes(10))
// //17 - loops upto 10 then add all the prime numbers


// const sumAllPrimes = (num) => {
//   let totalPrime = 0;

//   const checkPrime = (i) => {
//     for(j=2; j<i ; j++){
//       // console.log('j nums:' + j)
//       if(i%j===0){
//         return false;      
//       }
//     }
//     // console.log(j)
//     return true;
//   }

//   for(let i=2; i<=num; i++){
//     // console.log('i nums:' + i)
//     if(checkPrime(i)){
//       totalPrime += i
//     }
//   }
//   return `total : ${totalPrime}`;
// }

// console.log(sumAllPrimes(10))


// Seek And Destroy

// function seekAndDestroy(arr){
//   let args = Array.from(arguments)
//   // console.log(args)
//   function filterArr(arr){
//     //return true if not in arr
//     if(args.indexOf(arr) === -1){
//       return true;
//     }
//   }
//   return arr.filter(filterArr)
// }


// const seekAndDestroy = (arr,...rest) => {
//   console.log(rest)
//   return arr.filter(val => {
//     //  (![2,6].includes([2,3,4,6,6,'hello'])
//     if (!rest.includes(val)){
//       return true;
//     }
//   })
// }

// console.log(seekAndDestroy([2,3,4,6,6,'hello'],2,6)) //[3,4,'hello']


// const seekAndDestroy = (arr,...rest) => arr.filter(nums => !rest.includes(nums))

// console.log(seekAndDestroy([2,3,4,6,6,'hello'],2,6)) //[3,4,'hello']


// Sort By Height

// const sortByHeight = (arr) => {
//   let arr1 = []; //store positon of -1
//   let arr2 = [];  //store sorted values

//   //loop over arr to get values and indexes
//   arr.forEach((val,i) =>{
//     if(val === -1){
//       //if index is == -1 push index position to arr1
//       arr1.push(i)
//     }else{
//       //if values, then push them to arr2
//       arr2.push(val)
//     }

//   })
//   //sort arr2 
//   let sortArr = arr2.sort((a,b) => a-b)
//   //loop over arr 1 and add the values from sorted Arr, use splice to replace the index with -1
//   arr1.forEach((val,i) => sortArr.splice(arr1[i], 0, -1))
//   return sortArr;
// }

// console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]))


// Missing letters

// const missingLetters = (str) => {

// let compare = str.charCodeAt(0);
// let missing;

//   str.split('').map((char,i) => {
//     if(str.charCodeAt(i) === compare){
//       ++compare
//     }else{
//       missing = String.fromCharCode(compare)
//     }
//   })
//  return missing;
// }

// missingLetters('abce') //d
// missingLetters('abcdefghjklmno') //i
// missingLetters('abcdefghijklmnopqrstuvwxyz') //undefined

//map is similar to for each but returns a new array

// Even and odd sums

function oddAndEven(arr){
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num ): (oddSum += num)));
  console.log(evenSum,oddSum)

  return [evenSum, oddSum]
}

console.log(oddAndEven([50,60,60,45,71]))