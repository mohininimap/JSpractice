// ARRAY METHODS
// ------------------------
let fruits=["apple","orange"]
fruits.push("Mango","Grapes")
console.log(fruits)
// ----------------------
// push methods
// Adds one or more elements to the end of an array and returns the new length of the array.
// ---------------------------------------
let arr1=[1,2,3,4]
arr1.pop()
console.log(arr1)
// pop method remove element from the end of the array
// ----------------------------------
// shift()
const colors = ['red', 'green', 'blue'];
const shiftedColor = colors.shift();
//shift method remove the first element from the array and return the array
// -----------------------------
// Adds one or more elements to the beginning of an array and returns the new length of the array.
const animals = ['dog', 'cat'];
animals.unshift("horse","Tiger")
console.log(animals)
// -------------------------------
// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
const combine=arr1.concat(arr2);
console.log(combine)
// concat combines a multiple arrays and return a new array 
// -----------------------------------
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1,4)
console.log(sliced)

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// ------------------------------------------
// splice()
const original = [1, 2, 3, 4, 5];
let splicearr=original.splice(1,2,"mohini","bhargavi");
console.log(splicearr)
console.log(original)

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// -------------------------------
// map()
const numbers = [1, 2, 3, 4, 5];
let x=numbers.map((item)=>(item*2));
console.log(x)

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// The callback function used with the map() function can take the following three parameters:
// currentvalue,index and array
// ------------------------------------------
// filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num)=>(num%2));
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10] 

// filter() take 3 arguments ElementInternals,array and index
// -----------------------------------------------------
// reduce()
// the reduce() method is used to iterate through the elements of an array and 
// accumulate a single value. It applies a callback 
// function to each element and carries the result from one iteration to the next. 

let displaysum=[1,2,3,4,5,6,7]  
let k=displaysum.reduce((acc,curr)=>acc+curr,0);
console.log(k)

// -------------------------------------------
// STRINGS METHODS
