const str = "A quick brown fox jump over a lazy dog";
let b=str.toLowerCase().split(" ").join("")
let c=b.split("")
console.log(b)

let output=c.reduce((acc,curr)=>{
    if(acc[curr]){
       acc[curr]=acc[curr]+1 
    }else{
      acc[curr]=1;  
    }
    return acc; 
},{})

console.log(output)