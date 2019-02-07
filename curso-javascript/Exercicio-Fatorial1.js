let v = []

for (let i = 2; i < 8; i++) {
    v.push = i;    
}

//calcula fatorial
function calculaFatorial(num){
   
    let result = 1
    for (let i = num; i >= 2; i--) {
        result = result * i        
    }

    return result
}




