let v =[]


for (let i = 0; i < 100; i++) {
    v.push(Math.floor(Math.random()*10))
}

// let p = v.filter(n=>n % 2 == 0)
//          .map(n => Math.pow(n,2)
//          )

let sum = v.filter(n=>n % 2 == 0)
         .map(n => Math.pow(n,2)
        ).reduce((acc,cur) => acc + cur , 0)


//console.log(p)

//console.log(v.map(n=>`R$ ${n},00`))

console.log(sum)

