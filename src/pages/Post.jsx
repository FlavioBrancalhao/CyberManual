import { useParams } from "react-router-dom"
import { articles } from "../data/articles"

function Post() {

    const { id } = useParams()

    const article = articles.find(a => a.id === Number(id))

    if (!article) {
        return <h1>Artigo não encontrado</h1>
    }

    return (

        <div className="container">

            <h1>{article.title}</h1>
            <p>Categoria: {article.category}</p>

            <div className="article-content">

                
                <h2>Contexto:</h2>
                <textarea class="editor">{article.content}</textarea>
                <h2>Comandos CMD / Powershell</h2>
                <p>{article.comandosPowershell}</p>
                <h2>Comandos Windows + R</h2>
                <p>{article.comandosWR}</p>
                <h2>Como fazer(caso tenha processo para realizar):</h2>
                <textarea class="editor">{article.how}</textarea>

            </div>

        </div>

    )

}

export default Post