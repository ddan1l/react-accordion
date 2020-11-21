import Article from '../Article'
import './style.css'
import {useState} from "react";

export default function ArticleList ({align, articles}) {
    const alignOptions = ['Horizontal', 'Vertical']
    const [openArticleId, setOpenArticleId] = useState(null)
    const handleClick = (articleId) => setOpenArticleId(openArticleId === articleId ? null : articleId)
    const articleElements =
        articles.map((article, idx) =>
            <li
                style={{width: align === alignOptions[1] ? '33%' : '50%', padding: '10px', margin: align === alignOptions[1] ? '0' : '0 auto'}}
                key={idx}
                className='article-list__li'>
                <Article
                    article={article}
                    align = {align}
                    isOpen={openArticleId === article.id}
                    onButtonClick={()=>{handleClick(article.id)}}
                />
            </li>)
    return (
        <ul style={{display: align === alignOptions[1] ? 'flex' : 'block', 'flex-wrap': 'wrap'}}>
            {articleElements}
        </ul>
    )
}
