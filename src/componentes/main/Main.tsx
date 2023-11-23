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



