import * as chai from 'chai'
const expect = chai.expect
const app = require('../server/server')
import * as supertest from 'supertest'
import { Language } from '../common/models/types/language';

describe('testes sobre Linguagens',function(){
    describe('CT0004 - sobre Linguagens',function(){
        console.log("Executando rotina antes de testar")

        it("teste",async function(){
            // let response = await supertest(app)
            // .get('/api/Languages')
            let languages:Language[] = await app.models.Language.find({
                include: ['films']
            })
            console.log(JSON.stringify(languages[0].toJSON().films,null,2))
            //expect(response.body.length).to.equal(6,response.error.message)
        
            //let language:any[]=response.body
            //expect(language.filter(l=>l.))
        }) 
    })
})