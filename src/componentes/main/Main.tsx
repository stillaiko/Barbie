import Filme from '../filme/Filme'
import './Main.css'

export default function Main(){
    return(
        <main className='content_main'>

        <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade."
        imagem="/barbie-posteres"/>
        <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade."
        imagem="/barbie-posteres"/>

        </main>
    )
}