import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className="grid">
           <div className="IP">
             <div className="I1">
               <form>
                 <div className="I2">
                   <input type="text" 
                   name="title" 
                   className="form-control no-border"
                   placeholder="Your title here"
                   required />  
                 </div>
                 <div className="I3">
                   <textarea type="text" 
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
