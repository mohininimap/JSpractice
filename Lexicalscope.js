
function a(){
  console.log(b)  
}
var b=10;
a();

// output =>10
// --------------------------

function a(){
    console.log(b)  
  }
  a();
  var b=10;
//  output => undefined
// -------------------------------
function a(){
    const k=9;
  console.log(k)  
  var k=5;
}
a();

//output => k is already been declared
// ---------------------------------------------
function a(){
    const k=9;
  console.log(k)  
 
 let k=5;
}
a();

// output => k is already been declared
// ---------------------------
function a(){
    const k=9;
  console.log(k)  
 
const k=5;
}
a();

// output => k is already been declared
// ----------------------------
function a(){
    const k;
  console.log(k)  
 
const k=5;
}
a();
// SyntaxError: Missing initializer in const declaration
// -------------------------------------
function a(){
 const k;
 console.log(k)  
 
const k;
}
a();
// SyntaxError: Missing initializer in const declaration
// ----------------------------------------
function a(){
const k;
  console.log(k)  
const k;
}
a();
// SyntaxError: Missing initializer in const declaration
// ---------------------------------------------------------
function a(){
const k;
console.log(k)  
}
a();
// SyntaxError: Missing initializer in const declaration
// -----------------------------------
function a(){
    let k;
    console.log(k)  
    }
    a();
// output undefined
// -------------------------------------
function a(){
   var k;
    console.log(k)  
    }
    a();
// output undefined
// -------------------------------------
var k;
function a(){
console.log(k)  
}
a();
// output undefined
// -------------------------------------
var k=10;
function a(){
console.log(k)  
}
a();
// output 10
// ------------------------------------------
var k=10;
function a(){
    function b(){
    console.log(k)  
    }
    b();
}
a();
// output 10
// -----------------------------------------------
function a(){
    var b=10;
    c();
    function c(){

    }
}
a();
console.log(b)

//output ReferenceError: b is not defined
// -----------------------------
let arr=[5,1,3,2,6]
const output=arr.map((x)=>x.toString(2));
console.log(output)

//output => [ '101', '1', '11', '10', '110' ]
// -----------------------------------------------
// slice
var users=["Tin","tom","chinu","pinki","rinki"];
//start range and end range
var output=users.slice(1,4);
console.log(output)
//output => [ 'tom', 'chinu', 'pinki' ]
// ----------------------------------------------------
// delete key from object
let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  // Deleting a key from the object
  delete myObject.key2;
  
  console.log(myObject); // { key1: 'value1', key3: 'value3' }
// --------------------------
// clousure->function along with lexical scope
function fun1(){
    let k=7;
    function fun2(){
        console.log(k)
    }
   return fun2;
}
fun1();

// output => [Function: fun2]
// ----------------------------------------
//count each character 
// first method
let b = "A quick brown fox jumps over a lazy dog";
let a = b.toLowerCase();
let obj = {};
for (let i = 0; i < a.length; i++) {
obj[a[i]] ? obj[a[i]] += 1 : obj[a[i]] = 1
}
console.log(obj);
// ------------------------------------
// second method
const str = "A quick brown fox jump over a lazy dog";
const a = str.toLowerCase().split(" ").join("")
const b = a.split("")
const c = b.reduce((acc, item)=>{ if(acc[item]){
acc[item] = acc[item] +1 }
else{
 acc[item] = 1
 }
 return acc
},{})
console.log(c)

