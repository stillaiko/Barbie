use("MyPet");

db.createCollection("dono");
db.createCollection("animal");


db.dono.insertMany([
    {_id:1,nome:"Ana",idade:20,animal:[
        {_id:1,nome:"Aik",valor:200.00,raca:"viralata"},
        {_id:2,nome:"Lulu",valor:90.00,raca:"rapoza"},
        {_id:3,nome:"Kika",valor:90.00,raca:"pug"}
]},
    {_id:2,nome:"Aiko",idade:25,animal:[
        {_id:4,nome:"Tico",valor:200.00,raca:"viralata"},
        {_id:5,nome:"Lilica",valor:90.00,raca:"rapoza"},
        {_id:6,nome:"Koko",valor:90.00,raca:"pug"}
]},
    {_id:3,nome:"Andy",idade:35,animal:[
        {_id:7,nome:"Saiko",valor:200.00,raca:"viralata"},
        {_id:8,nome:"Pupu",valor:90.00,raca:"rapoza"},
        {_id:9,nome:"Ju",valor:90.00,raca:"pug"}
]},
    {_id:4,nome:"Sergio",idade:21,animal:[
        {_id:10,nome:"lily",valor:200.00,raca:"viralata"},
        {_id:11,nome:"Pucca",valor:90.00,raca:"rapoza"},
        {_id:12,nome:"Lala",valor:90.00,raca:"pug"}
]}

])


//Questão 6
db.dono.find({_id:2},{nome:true,animal:true});

//Questão 7
db.dono.deleteOne({_id:2})

//Questão 8
db.dono.find();

//Questão 9
db.dono.deleteMany({})

//Questão 10
db.dono.drop();

//Questão 11
db.dropDatabase();
