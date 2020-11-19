import Article from '../Article'
import './style.css'
import {useState} from "react";

export default function ArticleList ({articles}) {
    const [openArticleId, setOpenArticleId] = useState(null)
    const handleClick = (articleId) => setOpenArticleId(openArticleId === articleId ? null : articleId)
    const articleElements =
        articles.map((article, idx) =>
            <li
                key={idx}
                className='article-list__li'>
                <Article
                    article={article}
                    isOpen={openArticleId === article.id}
                    onButtonClick={()=>{handleClick(article.id)}}
                />
            </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
