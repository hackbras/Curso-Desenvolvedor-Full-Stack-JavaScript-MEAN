const app = require('./server/server')
const ds = app.dataSources.sakilaDS
let lbTables = ['User','AccessToken','ACL','Role','RoleMapping']

//O automigrate Apaga as tabelas e as cria novamente se elas existirem
//se quiser atualizaaar, use o autoupdate
ds.automigrate(lbTables,error =>{
    if (error) {
        console.log('falha ao criar as tabelas do loopback no banco',error)
        return
    }

    console.log('tabelas do loopback criadas com sucesso! Verifique o banco')
    ds.disconnect()
})