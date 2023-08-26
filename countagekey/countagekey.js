let arr = [{name : "Mohini", age : 26},
{name : "John", age : 20},
{name : "Jay", age : 20},
{name : "Riya", age : 19}];

let disparr=arr.reduce((acc,cur)=>{
    if(acc[cur.age]){
        acc[cur.age]=acc[cur.age]+1;
    }else{
     acc[cur.age]=1;
    }
    return acc
},{})

console.log(disparr)