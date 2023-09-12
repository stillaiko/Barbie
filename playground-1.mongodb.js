
// use("AikoCandyStore");
// db.dropDatabase()
// db.createCollection("menu");

// db.menu.insertOne(
//     {
//     nome:"Cannoli",
//     diaSemana:["Seg","Qui"],
//     preco:12.99,
//     sabores:[{
//         sabor:"Morango",
//         ingredientes:["morango","farinha de trigo", "sal","água", "açucar", "essência de baunilha"]
//     },
//     {
//         sabor:"Baunilha",
//         ingredientes:["creme de baunilha","farinha de trigo", "sal","água", "açucar", "essência de baunilha"]
//     }
//     ]}
// )

// db.menu.insertOne(
//     {
//     nome:"Dango",
//     diaSemana:["Qua","Sex"],
//     preco:16.99,
//     sabores:[{
//         sabor:"Original",
//         ingredientes:["farinha de otiko","tofu", "shoyu","água", "açucar", "amido de milho"]
//     },
//     {
//         sabor:"Hanami Dango",
//         ingredientes:["farinha de arroz glutinoso","farinha de arroz", "morango em pó","água", "açucar", "chá matcha em pó"]
//     }
//     ]}
// )

// use("AikoCandyStore");
// db.menu.find({_id:ObjectId("64f744e1dbf9491e101627f8")})

// use("AikoCandyStore");
// db.menu.updateOne(
//     {_id:ObjectId("64f744e1dbf9491e101627f8")},
//     { 
//     $set:{diaSemana:["Qua","Sab"]}

//     }
// );

// use("AikoCandyStore");
// db.menu.find({_id:ObjectId("64f744e1dbf9491e101627f7")})

// use("AikoCandyStore");
// db.menu.updateOne(
//     {_id:ObjectId("64f744e1dbf9491e101627f7")},
//     { 
//     $set:{nome:"Cannoli Italiano"}

//     }
// );

// use("AikoCandyStore");
// db.menu.updateOne(
//     {_id:ObjectId("64f744e1dbf9491e101627f7"),"sabores.sabor":"Morango"},
//     { 
//     $set:{"sabores.$.sabor":"Moranguinho",
// }

//     }
// );

// use("teretreino");
// db.dropDatabase();
// db.createCollection("treino");

// db.treino.insertOne(
//     {
//         nome:"Peito e Biceps",
//         diaSemana:"Segunda",
//         exercicios:[
//             {
//                 nome:"Supino",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Martelo",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Voador",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Rosca Scott",
//                 serie:4,
//                 repeticoes:15
//             },
            
//         ]
//     }
// )
// db.treino.insertOne(
//     {
//         nome:"Costas e Tríceps",
//         diaSemana:"Quarta",
//         exercicios:[
//             {
//                 nome:"Tríceps Polia",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Tríceps Corda",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Pull Down",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Curvada",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Puxada Alta",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Remada Baixa",
//                 serie:4,
//                 repeticoes:15
//             }
//         ]
//     }
// )

// db.treino.insertOne(
//     {
//         nome:"Inferiores",
//         diaSemana:"Terca e Quinta",
//         exercicios:[
//             {
//                 nome:"Leg Press",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Agachamento",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Levantamento Terra",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Panturrilha",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Extensora ",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Abdutora",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Adutora",
//                 serie:4,
//                 repeticoes:15
//             }
//         ]
//     }
// )

// use("teretreino");
// db.treino.updateOne(
//   {_id:ObjectId("64f8c6b31adcec0cb7f77bc0"),"exercicios.nome":"Rosca Martelo"},
//    { 
//     $set:{
//         "exercicios.$.nome":"Rosca Scott",
//         "exercicios.$.serie":5,
//         "exercicios.$.repeticoes":12

// }

//     } );

// use("teretreino");
// db.treino.find({_id:ObjectId("64f8c6b31adcec0cb7f77bc0")})


use("Patissier");
db.dropDatabase()
db.createCollection("cake");

db.cake.insertMany([
    {
    _id:ObjectId("111111111111"),
    nome:"Bolo de Morango",
    peso: "2kg",
    preco: 120.00,
    ingredientes:[
        {
        nome:"Trigo",
        quantidade:"3/4 xícara (chá)"
        },
        {
        nome:"Ovos",
        quantidade:"4 unidades"
        },
        {
        nome:"Açucar",
        quantidade:"1/2 xícara (chá)"
        },
        {
        nome:"Manteiga",
        quantidade:"3 colheres (sopa)"
        },
        {
        nome:"Morango",
        quantidade:"1/2 kg"
        },
        {
        nome:"Creme de leite fresco",
        quantidade:"1 xícara (chá)"
        },
        {
        nome:"Açúcar de confeiteiro",
        quantidade:"2 colheres (sopa)"
        },

    ]},

    {
    _id:ObjectId("222222222222"),
    nome:"Bolo de Chocolate",
    peso: "1kg",
    preco: 80.00,
    ingredientes:[
        {
        nome:"Trigo",
        quantidade:"3 xícara (chá)"
        },
        {
        nome:"Ovos",
        quantidade:"4 unidades"
        },
        {
        nome:"Açucar",
        quantidade:"2 xícara (chá)"
        },
        {
        nome:"Manteiga",
        quantidade:"2 colheres (sopa)"
        },
        {
        nome:"Fermento",
        quantidade:"2 colheres (sopa)"
        },
        {
        nome:"Leite",
        quantidade:"1 xícara (chá)"
        },
        {
        nome:"Chocolate em pó",
        quantidade:"4 colheres (sopa)"
        },
        {
        nome:"Cobertura de chocolate",
        quantidade:"500g"
        }
    ]},

    {
    _id:ObjectId("333333333333"),
    nome:"Bolo de Cenoura",
    peso: "1kg",
    preco: 60.00,
    ingredientes:[
        {
        nome:"Trigo",
        quantidade:"2 e 1/2 xícaras (chá)"
        },
        {
        nome:"Ovos",
        quantidade:"4 unidades"
        },
        {
        nome:"Açucar",
        quantidade:"2 xícara (chá)"
        },
        {
        nome:"Óleo",
        quantidade:"1/2 xícara (chá)"
        },
        {
        nome:"Fermento",
        quantidade:"1 colheres (sopa)"
        },
        {
        nome:"Cenoura",
        quantidade:"3 cenouras médias raladas"
        },
        {
        nome:"Cobertura de chocolate",
        quantidade:"500g"
        }
    ]},

    {
        _id:ObjectId("444444444444"),
        nome:"Red Velvet",
        peso: "3kg",
        preco: 80.00,
        ingredientes:[
            {
            nome:"Trigo",
            quantidade:"2 xícara (chá)"
            },
            {
            nome:"Ovos",
            quantidade:"4 unidades"
            },
            {
            nome:"Açucar",
            quantidade:"2 xícara (chá)"
            },
            {
            nome:"Manteiga",
            quantidade:"2 colheres (sopa)"
            },
            {
            nome:"Fermento",
            quantidade:"1 colheres (sopa)"
            },
            {
            nome:"Leite",
            quantidade:"1 xícara (chá)"
            },
            {
            nome:"Coco ralado",
            quantidade:"2 colheres (sopa)"
            },
            {
            nome:"Brigadeiro de coco",
            quantidade:"500g"
            }
        ]}

    ])

    //Questão3
    use("Patissier");
    db.cake.deleteOne({_id:ObjectId("111111111111")});

    //Questão4
    use("Patissier");
    db.cake.find({nome:true,preco:true});

    //Questão5
    use("Patissier");
    db.cake.find();