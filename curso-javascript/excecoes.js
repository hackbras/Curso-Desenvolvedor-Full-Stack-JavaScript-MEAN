
try {
    let n = Math.floor(Math.random( )* 2)+1
    
    if (n%2==0) {
        throw new Error('Este número é par')
    }
    console.log("ok")
} catch (error) {
    console.log(error)
} 
// finally{
    
// }