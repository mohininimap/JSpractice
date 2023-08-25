const originalArray = [1, 2, 3, 4, 5];
const newarr=originalArray.slice(-4)
console.log(newarr)
//output last 2, 3, 4, 5 will be printed

// The slice() method can be used to create a copy of an array or return a portion of an array. 
// It is important to note that the slice() method does not alter the original array

// ------------------------------------------------------------
// splice()=> method in JavaScript is used to modify an array by adding, removing, 
// or replacing elements within it.
// -------------------------------------
// Remove element using splice

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let k=fruits.indexOf("Orange");
const remele=fruits.splice(k,1);
console.log(fruits)

// -----------------------------------------------------
// falsy values in javascript 
undefined,null,0," "

if(undefined){
    console.log("This statment not printed")
}

if(null){
    console.log("This statment not printed")
}
if(0){
    console.log("This statment not printed")
}
if(""){
    console.log("This statment not printed")
}
if(""){
    console.log("This statment not printed")
}
// ---------------------------

if(" "){
    console.log("This will print.....")
}
// --------------------------------------
console.log(undefined || null || 1)
//output is 1
// ---------------------
console.log(undefined && null && 1)
// output is undefined 
// -------------------
console.log(null && null && 1)
// output is null
// --------------------------------
console.log(null && null && null)
// output is null
// --------------------------
console.log(0 && 1 && 2 && 3)
// output is 0
// ----------------------
console.log(1 && 2 && 3)
// output is 3