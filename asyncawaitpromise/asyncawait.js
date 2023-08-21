
function fun1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
         let ranval=Math.random();
         if(ranval>0.5){
            console.log(`Promise is resolved : ${ranval}`)
         }else{
           console.log(`Promise is rejected " ${ranval}`) 
         }
        },1000)
    }) 

}

fun1().then((result)=>{
    console.log(`Promise is succedd ${result}`)
})
.catch((error)=>{
    console.log(`Promise is rejected ${error}`)
})