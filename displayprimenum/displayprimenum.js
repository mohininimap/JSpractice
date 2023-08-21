function checkPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
      if(num%i===0)  {
        return false;
      }
    }
    return true;
}

function displayPrime(lim){
for(let i=2;i<=lim;i++){
    checkPrime(i) && console.log(i)
}
}
displayPrime(8);