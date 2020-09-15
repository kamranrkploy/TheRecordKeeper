import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
      //state
      this.state = {
        title:'',
        body:''
      };
      //bind
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
      e.prevenDefault();
      this.setState({
            [e.target.name]:e.target.value
      });
    }
  render(){
    return (
      <div className="grid">
           <div className="IP">
             <div className="I1">
               <form>
                 <div className="I2">
                   <input 
                   onChange={this.handleChange}
                   type="text" 
                   name="title" 
                   className="form-control no-border"
                   placeholder="Your title here"
                   required />  
                 </div>
                 <div className="I3">
                   <textarea 
                   onChange={this.handleChange}
                   type="text" 
                   name="body" 
                   className="form-control no-border"
                   placeholder="Your body here"
                   required />  
                 </div>
                 <div className="I4">
                   <button className="">SAVE AS NOTE</button>
                 </div>
               </form>
             </div>
           </div>
      </div>
    );
  }
}

export default App;
