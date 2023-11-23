import { useEffect, useState } from 'react'
import Filme from '../filme/Filme'
import './Main.css'

type FilmeDTO = {
    _id: number,
    titulo: string,
    descricao: string,
    imagem: string
  }

export default function Main(){

    const url = "http://localhost:3000/filmes"
    const [filmes,setDados] = useState<FilmeDTO[]>([])
    
        useEffect(() => {
                fetch(url, { method:"GET"})
                .then((resposta)=>resposta.json())
                .then((json)=>setDados(json))
        },[])


    //Hook
    const [texto,setTexto] = useState("")
    // const filmes:FilmesType[] = [
    //     {
    //         id:1,
    //         titulo:"Barbie", 
    //         sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
    //         imagem:"/barbie-posteres.png"
    //     },

    //     {
    //         id:2,
    //         titulo:"Teen Beach Movie", 
    //         sinopse:"Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
    //         imagem:"/teen.png"
    //     },

    //     {
    //         id:3,
    //         titulo:"O Jogo da Imitação",
    //         sinopse:"Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o Enigma, que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de Enigma, enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.",
    //         imagem:"/O_Jogo_da_Imitação.png"
    //     },

    //     {
    //         id:4,
    //         titulo:"Supernatural", 
    //         sinopse:"A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais.",
    //         imagem:"/supernatural.png"
    //     },

    //     {
    //         id:5,
    //         titulo:"Hunter × Hunter",
    //         sinopse:"O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo.",
    //         imagem:"/HxH.png"
    //     },

    //     {
    //         id:6,
    //         titulo:"Barbie: Escola de Princesas", 
    //         sinopse:"Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
    //         imagem:"/princesas.png"
    //     },
    //     {
    //         id:7,
    //         titulo:"Dr. Stone", 
    //         sinopse:"Stone é um mangá de aventura, que conta a história de Senku, um gênio, que renasce 3.700 anos depois que uma luz misteriosa petrifica toda a humanidade. Usando-se de conhecimento científico, ele tenta restaurar a humanidade.",
    //         imagem:"/doctor.png"
    //     },
    //     {
    //         id:8,
    //         titulo:"Ratatouille", 
    //         sinopse:"Remy reside em Paris e possui um sofisticado paladar. Seu sonho é se tornar um chef de cozinha e desfrutar as diversas obras da arte culinária. O único problema é que ele é um rato. Quando se acha dentro de um dos restaurantes mais finos de Paris, Remy decide transformar seu sonho em realidade.",
    //         imagem:"/rato.png"
    //     }
    // ]



    //A função recebe um atributo chamado "e" de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setTexto(e.target.value)
    }

    return(
<>
    <div className="pesquisa">
        <p>Buscar Filme</p>
        <input className='barrapesquisa' type="text" onChange={mudaTexto} />

        <div>
        <p className='texto_digitado'>Pesquisa: {texto}</p>
        </div>
    </div>

        <main className='content_main'>

       {filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map((filme) => <Filme key = { filme._id } titulo={filme.titulo} descricao={filme.descricao} imagem={filme.imagem}/> )}


      </main>

        </>
    )
}



