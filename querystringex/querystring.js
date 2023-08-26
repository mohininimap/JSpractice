const data={ name:'datta', page:1, size:0, search:'',abc:'abc'}

let k=Object.keys((data))
.filter((key)=>data[key])
.map((key)=>`${key}=${data[key]}`)
.join("&")
console.log(k)