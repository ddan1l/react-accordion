import Article from './components/Article'
import articles from './articles'
import ArticleList from './components/ArticleList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
function App() {
    const greetings = 'Hello React Accordion!'
    const [reverted, setReverted] = useState(false)
    const revert = () => {
        setReverted(!reverted)
    }
  return (
    <div className='container'>
        {/*{greetings}
        <Article article={articles[0]}/>*/}
        <div className='jumbotron'>
            <h1 className='display-3'>React Accordion Demo</h1>
            <button className="btn btn-secondary" onClick={revert}>Revert</button>
        </div>
        <ArticleList articles={reverted ? articles.slice().reverse() : articles}/>
    </div>
  );
}

export default App;
