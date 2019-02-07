const express = require('express')
const path = require('path')
const app = express()

app.set('views',path.join(__dirname,'./views'))//views nome do diretorio
app.set('view engine','ejs')//tem que escrever exatamente assim (view engine)

app.get('/films',(req,res)=>res.render('films'))

app.listen(3000,()=> console.log('Express rodando na porta 3000'))