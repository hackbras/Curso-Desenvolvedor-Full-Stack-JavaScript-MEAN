/*Expressões Regulares https://aurelio.net/regex/*/
//export  //forma do ES6
module.exports  =  class Veiculo{
        constructor(){
            this._placa  = undefined
        }
        set placa(value){
            if (new RegExp(/^[a-z]{3}[1-9]{4}$/i).test(value)) {
                console.log(`escrevendo o valor ${value} para a placa`)
                this._placa = value
            }
            else{
                throw new Error("placa inválida")
            }
            //console.log(`Escrevendo a própria placa ${value} para a placa`)
        
        }
        get placa(){
            console.log(`recuperando o valor ${this._placa} para a placa`)
            return this._placa 
        }
    }

// let veiculo = new Veiculo()

// veiculo.placa  = "abc1234"

// console.log(veiculo.placa)
