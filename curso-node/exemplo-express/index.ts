const express = require('express')
const path = require('path')
import mysql from 'mysql'
const app = express()

app.set('views',path.join(__dirname,'./views'))//views nome do diretorio
app.set('view engine','ejs')//tem que escrever exatamente assim (view engine)

//app.get('/films',(req,res)=>res.render('films'))//no ts config colocar noImplicitAny= falsenpom 
app.get('/films',(req,res)=>{
    let conn = mysql.createConnection({
        host:'172.16.99.131',
        user:'root',
        password:'1q2w3e4r',
        database:'sakila'
    })
    conn.connect(err=>{
        if (err) {
            console.log('falha ao conectar'); return
        } 
        console.log('conectado com sucesso')
        
        conn.query("select * from film",(err,result)=>{
            if (err) {
                console.log('falha ao execultar a consulta'); return
            } 
            
            console.log(`número de resultados retornados: ${result.length}`)
            //console.log(`número de resultados retornados: ${result}`)
        })

    })
    res.render('films')
})
app.listen(3000,()=> console.log('Express rodando na porta 3000'))