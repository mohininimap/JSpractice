function outerfunction(){
    let str="Javascript used clientside and server side both"
    function innerfunction(){
        console.log(str)
    }
    return innerfunction;
}

let k=outerfunction();
k();

