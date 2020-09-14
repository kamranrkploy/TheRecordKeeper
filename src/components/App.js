import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="container-fluid">
           <div className="row">
             <div className="col-sm-6 col-sm-offset-3">
               <form>
                 <div className="form-group">
                   <input type="text" 
                   name="title" 
                   className="form-control no-border"
                   placeholder="Your title here"
                   required />  
                 </div>
                 <div className="form-group">
                   <textarea type="text" 
                   name="body" 
                   className="form-control no-border"
                   placeholder="Your body here"
                   required />  
                 </div>
                 <div className="form-group">
                   <button className="btn btn-primary col-cm-12">SAVE AS NOTE</button>
                 </div>
               </form>
             </div>
           </div>
      </div>
    )
  }
}

export default App;
