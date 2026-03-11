import { useState } from "react"
import { articles } from "../data/articles"
import { Link } from "react-router-dom"
import "./Style.css"

function Home() {

    const [search, setSearch] = useState("")

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.content.toLowerCase().includes(search.toLowerCase())
    )

    return (

        <div className="container">

            <h1>Manual Cyber</h1>

            <input
                className="search"
                type="text"
                placeholder="Pesquisar artigo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredArticles.map(article => (

                <div className="article-card" key={article.id}>

                    <Link to={`/post/${article.id}`}>
                        {article.title}
                    </Link>

                    <p>{article.category}</p>

                </div>

            ))}

        </div>

    )

}

export default Home