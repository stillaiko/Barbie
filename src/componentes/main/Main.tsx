import { useState } from 'react'
import Filme from '../filme/Filme'
import './Main.css'
type FilmesType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main(){
    //Hook
    const [texto,setTexto] = useState("Nana")
    const filmes:FilmesType[] = [
        {
            id:1,
            titulo:"Barbie", 
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:"/barbie-posteres.png"
        },

        {
            id:2,
            titulo:"Teen Beach Movie", 
            sinopse:"Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
            imagem:"/teen.png"
        },

        {
            id:3,
            titulo:"O Jogo da Imitação",
            sinopse:"Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o Enigma, que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de Enigma, enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo.",
            imagem:"/O_Jogo_da_Imitação.png"
        },

        {
            id:4,
            titulo:"Supernatural", 
            sinopse:"A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais.",
            imagem:"/supernatural.png"
        },

        {
            id:5,
            titulo:"Hunter × Hunter",
            sinopse:"O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo.",
            imagem:"/HxH.png"
        },

        {
            id:6,
            titulo:"Barbie: Escola de Princesas", 
            sinopse:"Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando.",
            imagem:"/princesas.png"
        }
    ]

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

        <Filme 
        titulo="Barbie" 
        sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade."
        imagem="/barbie-posteres.png"
        />

        <Filme 
        titulo="Teen Beach Movie" 
        sinopse="Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando."
        imagem="/teen.png"
        />

        <Filme 
        titulo="O Jogo da Imitação" 
        sinopse="Em 1939, a recém-criada agência de inteligência britânica MI6 recruta Alan Turing, um aluno da Universidade de Cambridge, para entender códigos nazistas, incluindo o Enigma, que criptógrafos acreditavam ser inquebrável. A equipe de Turing, incluindo Joan Clarke, analisa as mensagens de Enigma, enquanto ele constrói uma máquina para decifrá-las. Após desvendar as codificações, Turing se torna herói. Porém, em 1952, autoridades revelam sua homossexualidade, e a vida dele vira um pesadelo."
        imagem="/O_Jogo_da_Imitação.png"
        />

        <Filme 
        titulo="Supernatural" 
        sinopse="A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais."
        imagem="/supernatural.png"
        />

        <Filme 
        titulo="Hunter × Hunter" 
        sinopse="O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo."
        imagem="/HxH.png"
        />

        <Filme 
        titulo="Barbie: Escola de Princesas" 
        sinopse="Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando."
        imagem="/princesas.png"
        />

        <Filme 
        titulo="Teen Beach Movie" 
        sinopse="Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando."
        imagem="/teen.png"
        />
        
        <Filme 
        titulo="Teen Beach Movie" 
        sinopse="Brady e McKenie são dois jovens surfistas que magicamente se tornam parte de um filme musical. Ao perceber que sua presença está alterando o roteiro original do filme, eles se esforçam para fazer tudo voltar ao normal e acabam se apaixonando."
        imagem="/teen.png"
        />

        </main>
        </>
    )
}