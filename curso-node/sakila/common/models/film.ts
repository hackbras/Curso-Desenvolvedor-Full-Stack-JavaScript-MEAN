import { Rental } from "./types/rental";

module.exports = function(Film){
    Film.doRental = function(
        film_id:number
        ,customer_id:number
        ,cb:(error?:any,rental?:Rental)=>void){
            new Promise(async (resolve,reject)=>{
                //--
            }).then(rental=> cb(null,rental)).catch(error => cb(error)) 
    }
}