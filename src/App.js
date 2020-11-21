import Article from './components/Article'
import articles from './articles'
import ArticleList from './components/ArticleList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
function App() {
    const alignOptions = ['Horizontal', 'Vertical']
    const [alignValue, alignInputProps] = useRadioButtons("align");
    function useRadioButtons(name) {
        const [value, setState] = useState(alignOptions[0]);
        const handleChange = e => {
            setState(e.target.value);
        };
        const inputProps = {
            name,
            type: "radio",
            onChange: handleChange
        };

        return [value, inputProps];
    }

    const [reverted, setReverted] = useState(false)

    const revert = () => {
        setReverted(!reverted)
    }
  return (
    <div className='container'>
        <div className='jumbotron'>
            <h1 className='display-3'>React Accordion Demo</h1>
            <button className="btn btn-secondary" onClick={revert}>Revert</button>
        <fieldset>
            <div className="form-check mt-3">
                <input className="form-check-input" checked={alignValue === alignOptions[0]}   {...alignInputProps}  value={alignOptions[0]} type="radio" name="exampleRadios" id="exampleRadios1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        {alignOptions[0]}
                    </label>
            </div>
            <div className="form-check" >
                <input className="form-check-input"  checked={alignValue === alignOptions[1]} {...alignInputProps}   value={alignOptions[1]} type="radio" name="exampleRadios" id="exampleRadios2"/>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        {alignOptions[1]}
                    </label>
            </div>
        </fieldset>
        </div>
        <ArticleList align = {alignValue} articles={reverted ? articles.slice().reverse() : articles}/>
    </div>
  );
}

export default App;
