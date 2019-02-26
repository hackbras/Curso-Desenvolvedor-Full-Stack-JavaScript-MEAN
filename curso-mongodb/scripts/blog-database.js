/*
baixe e instao mongodb para windows
Endereço dele ai pra vc - https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-4.0.6-signed.msi

baixe o Robo3T (cliente para mongodb)
download https://download.robomongo.org/1.2.1/windows/robo3t-1.2.1-windows-x86_64-3e50a65.exe

após instalar o mongodb, coloque o seguinte endereço em seu PATH:

C:\Program Files\MongoDB\Server\4.0\bin

testar:

depois de configurar a variável, abra um prompt de comando e digite o comando mongo

digite o comando show dbs.

devem aparecer 3 bancos

botão direito em computador, guia avançado, variáveis de ambiente, coloque no final da variável PATH ; (ponto e vírgula) e o endereço acima


https://github.com/Studio3T/robomongo/issues/1231#issuecomment-260683555

blog-database.js

=================== INICIO =============================
*/

function generateRandomDate(referenceDateInString, maxHours) {
    var hoursToAdd = Math.floor(Math.random() * maxHours) + 1

    var millisToAdd = hoursToAdd * 60 * 60 * 1000    

    var generatedTimeInMillis = new Date(referenceDateInString).getTime() + millisToAdd

    var generatedDate = new Date(generatedTimeInMillis)

    return generatedDate
}

function insertPosts() {
    var referenceDate = "2018-12-01"

    db.post.insert([
        {
            title: "Uso do docker",
            author: "Camila",
            comments: [
                {
                    comment: "concordo planamente",
                    author: "Felipe",
                    likes: 78,
                    created: generateRandomDate(referenceDate,24 * 5)
                },
                {
                    comment: "discordo totalmente",
                    author: "Carlos",
                    likes: 2,
                    created: generateRandomDate(referenceDate,24 * 8)
        
                },
                {
                    comment: "Concordo mais ou menos",
                    author: "Eduarda",
                    likes: 20,
                    created: generateRandomDate(referenceDate,24 * 10)
                }
            ],
            tags: ['docker','linux','cloud computing'],
            likes: 45,
            deleted: false
        },{
            title: "Data Science com Python",
            author: "Guilherme",
            comments: [
                {
                    comment: "já usou a lib SciPy?",
                    author: "Jorge",
                    responses: [
                        {
                            response: "Sim, é excelente!",
                            author: "Marcos"
                        }
                    ]
                },
                {
                    comment: "Vale a pensa usar o anaconda?",
                    author: "Carlos",
                    likes: 7,
                    responses: [
                        {
                            response: "Sim, vale",
                            author: "Marcelo",
                            likes: 3
                        },
                        {
                            response: "Eu acho mais complicado",
                            author: "Lucas",
                            likes: 1
                        }
                    ]
                }
            ],
            tags: ['data science','python','machine learning'],
            likes: 145
        },{
            title: "Virtualização com Xen",
            author: "Carlos",
            comments: [
                {
                    comment: "Prefiro VirtualBox",
                    author: "Felipe",
                    responses: [
                        {
                            response: "Ta de brincadeira né?",
                            author: "Paula",
                            likes: 15
                        },
                        {
                            response: "Eu também",
                            author: "Joaquim",
                            likes: 0 
                        }
                    ],
                    likes: 0
                }
            ],
            tags: ['virtualization','linux','xen'],
            likes: 102,
            deleted: true
        },{
            title: "Data Science com R",
            author: "Pablo",
            tags: ['data science','r','machine learning'],
            comments: [
                {
                    comment: "Também da pra gerar relatórios",
                    author: "José"
                }
            ]
        }, {
            title: ".NET Core 2",
            author: {
                firstName: "Guilherme",
                lastName: "Alencar"
            },
            tags: ['.net','c#'],
            
        }
    ])
}

db = db.getSiblingDB('blog')

db.dropDatabase()

insertPosts()



/*
    =================== INICIO =============================
*/