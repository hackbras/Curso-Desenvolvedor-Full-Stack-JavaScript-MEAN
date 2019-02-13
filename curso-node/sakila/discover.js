const loopback = require('loopback')
const promisify = require('util').promisify //transforma uma função que não é promisse em uma função promisse 
//const a = require('')
const fs = require('fs')
const writeFile = promisify(fs.writeFile)

const dataSourceConfig = require('./server/datasources.json')
const db = new loopback.DataSource(dataSourceConfig['sakilaDS'])

const model = 'language'

async function discover(){
    const schema = await db.discoverSchemas(model)

    await writeFile(
        `common/models/${model}.json`,
        JSON.stringify(schema['sakila.'+model],null,2)
    )
    const config = require('./server/Model-config.json')
    //const config = JSON.parse(configJson)
    config[model] = {Datasource:'sakilaDS',public:true}
    await writeFile('server/model-config.json',
    JSON.stringify(config,null,2)
    )   

}





discover().then(()=> console.log(`modelo ${model} importado!`))
.catch(error => console.log(`falha ao importar modelo ${model}`,error))

