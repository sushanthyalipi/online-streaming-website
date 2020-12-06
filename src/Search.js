import { render } from '@testing-library/react';
import React from 'react';
class Search extends React.Component{
    constructor(){
       super();
       var inputText;
       this.inputText=React.createRef();
       this.InputText=this.InputText.bind(this);
    }
    InputText(){
        this.inputText.current.focus();
     }
render(){
    return(
       <form classname='form' onMouseOver={this.InputText}>
                <label classname='label' htmlfor="query">Movie Name</label>
                <input classname="input" type="text" name="query"
                   placeholder="i.e.Jurassic Park" ref={this.inputText} onMouseMove={this.InputText}/>
                <button classname="button" type="submit">Search</button>   
            
        </form>
    );
    } 
}
export default Search;
