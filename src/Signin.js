import React from 'react';
const h={
    itemAlign:'right',
    color:'blue',
    backgroundColor:'Black'

}
class Signin extends React.Component {

    
    
    constructor(){
       
       super();
       var inputText;
       this.inputText=React.createRef();
       this.state={
            Username:'',
            Password:''
        };
        this.changeHandle=this.changeHandle.bind(this);
        this.InputText=this.InputText.bind(this);
    }
  
    changeHandle=(event) => {
       this.setState({

        Username:event.target.value,
        Password:event.target.value
            
       });
   }
   handleSubmit=(h)=>{
       h.preventDefault();
   }

   InputText(){
       this.inputText.current.focus();
   }
    render(){
        return(

           // <button style={h}>Sign In</button>
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Username</label>
                   <input type="text" required onChange={this.changeHandle} onMouseMove={this.InputText}
                                      ref={this.inputText}></input>
                   <br></br>
                   <label>Password</label>
                   <input type="text"  onChange={this.changeHandle}></input>
                   <br></br>
                   <button type="submit" onCick={this.changeHandle}>Submit</button>
               </form>
           </div>

        )
    }
}
export default Signin;
