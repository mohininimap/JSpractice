const numbers = [12,45,46,45,46,7, 23, 56,56,56,34];

function thirdHighest(numbers){
    let fisrsthighest=-Infinity;
    let secondhighest=-Infinity;
    let thirdhighest=-Infinity;

    for(let num of numbers){
        if(num>fisrsthighest){
            thirdhighest=secondhighest;
            secondhighest=fisrsthighest;
            fisrsthighest=num;
        }
        else if(num>secondhighest && num<fisrsthighest){
            thirdhighest=secondhighest;
            secondhighest=num;
        }
        else if(num>thirdhighest && num<secondhighest){
            thirdhighest=num;
        }
    }

return thirdhighest;
}

let output=thirdHighest(numbers);
console.log(output)