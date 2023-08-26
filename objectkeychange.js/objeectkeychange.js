const a = { 
    b:
     {
        c: {
        key: "Pranil"}
    }
    }

const temp = {...a}
temp.b.c.key = "Mohini";
console.log(temp)