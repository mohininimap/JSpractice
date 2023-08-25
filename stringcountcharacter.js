const str = "A quick brown fox jump over a lazy dog"

const a=str.toLowerCase().split(" ").join("")    
console.log(a)
const b=a.split("")
console.log(b)
const c=b.reduce((acc,item)=>{
    if(acc[item]){
      acc[item]= acc[item]+1   
    }else{
     acc[item]=1; 
    }
    return acc;
},{})
console.log(c)