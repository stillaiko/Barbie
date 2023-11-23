// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('db_barbie');
db.dropDatabase()

// Create a new document in the collection.
db.getCollection('filmes').insertMany([
{
    _id: 2,
    titulo: "Dr. Stone",
    descricao: "Stone é um mangá de aventura, que conta a história de Senku, um gênio, que renasce 3.700 anos depois que uma luz misteriosa petrifica toda a humanidade. Usando-se de conhecimento científico, ele tenta restaurar a humanidade.",
    imagem: "doctor.png"
},
{
    _id: 3,
    titulo: "Barbie: Escola de Princesas",
    descricao: "Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
    imagem: "princesas.png" 
},
{
    _id: 4,
    titulo: "Barbie",
    descricao: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
    imagem: "barbie-posteres.png" 
},
{
    _id: 5,
    titulo: "Teen Beach Movie",
    descricao: "Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
    imagem: "teen.png"
},
{
    _id: 6,
    titulo: "O Jogo da Imitação",
    descricao: "Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o Enigma, que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de Enigma, enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.",
    imagem: "O_Jogo_da_Imitação.png"
},
{
    _id: 7,
    titulo: "Supernatural",
    descricao: "A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais.",
    imagem: "supernatural.png"
},
{
    _id: 8,
    titulo: "Hunter × Hunter",
    descricao: "O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo.",
    imagem: "HxH.png"
}
]);
