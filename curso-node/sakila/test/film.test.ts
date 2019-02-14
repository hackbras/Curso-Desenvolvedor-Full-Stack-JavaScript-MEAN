import * as chai from 'chai'
const expect = chai.expect
const app = require('../server/server')
import * as supertest from 'supertest'
import { Film } from '../common/models/types/film';
import { Language } from '../common/models/types/language';

describe('testes sobre filmes',function(){
    describe("CT0001 - listar todos os ilmes", function(){
        console.log("Executando rotina antes do teste")

        // it("teste",async function(){
        //     let x = 2
        //     let y = 5    
        //     let sum = x+y
    
        //     expect(sum).to.equal(7,"A soma está incorreta")
        // })

        //caso de teste
        it("teste",async function(){
            let response = await supertest(app).get('/api/Films')
           
            expect(response.body.length).to.equal(1000,'espera-se que existam 1000 filmes no banco')

            let films: any[] = response.body
            expect(films.filter(f=>f.language_id != null).length).to.equal(0)
        })
    
        after("rotina depois do teste",function(){
            console.log("executando rotina depois do teste")
        })
    })    
    describe("CT0002 - cadastrar novo filme", function(){
        before("rotina roda antes do teste...",function(){
            console.log("executando rotina de teste antes do teste")
        })

        it("teste",async function(){
            let film:Film = {
                title:"film teste"
            }

            let response = await supertest(app)
            .post(`/api/Films`)
            .send(film)

            //expect(response.status).to.equal(200)
            expect(response.status).to.equal(200,response.error.message)
            expect(response.body.filmId).to.exist
        })
    })
    describe("CT0003 - consultar filmes usando filtros",function(){
        it("teste",async function(){
            //buscar um filme por titulo
            let title = "ACADEMY DINOSAUR"
            let film: Film = await app.models.Film.findOne({
                where: {
                    title: title
                }
            })

            console.log(`filme encontrado: ${film != null ? 'sim' : 'não'}`)
            expect(film).to.exist
            expect(film.filmId).to.exist

        })
        it("buscar por custo de substituição e classificação",async function(){
            //buscar os filmes que estejam na classificação r,g ou pg
            // e o custo da substituição seja superior a 15,00
            let films: Film[] = await app.models.Film.find({
                where:{
                    and:[
                        {rating:{inq: ['R','G','PG']}},
                        {replacementCost: {gt: 15}}
                    ]
                }
            })
            console.log(`número de filmes encontrados: ${films.length}`)

        })
    })
    describe("CT0005 - buscar filmes com os idiomas",function(){
        it("teste",async function(){
            let films: Film[] = await app.models.Film.find({
                include: ['language']
            })

            // let language:Language[] = film.map(f=>f.language)

            // languages.foreach(l => console.log(l.nome))

            console.log(JSON.stringify(films[0]))
        })
    })
})