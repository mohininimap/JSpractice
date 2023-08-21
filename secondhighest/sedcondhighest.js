const numbers = [12, 45,46,45,46,7, 23, 56,56,56,34];

function secondhigh(numbers){
 let firsthigh="-Infinity";
 let sechigh="-Infinity";
for(let num of numbers){
   if(num>firsthigh){
     sechigh=firsthigh;
     firsthigh=num;
   }
   else if(num>sechigh && num<firsthigh){
       sechigh=num;
   }
   
}
return sechigh;
}

let output=secondhigh(numbers);
console.log("output",output)