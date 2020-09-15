import React, { Component } from 'react';
import {database} from '../firebase';
import _ from 'lodash';

class App extends Component{
  constructor(props){
    super(props);
      //state
      this.state = {
        title:'',
        body:'',
        notes : {}
        
      };
      //bind
      this.handleChange = this.handleChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.renderNotes = this.renderNotes.bind(this);
    }
    //lifecycle method of react
    componentDidMount(){
      database.on('value' , (snapshot) => {
          this.setState({notes : snapshot.val()});
      });
    }

    handleChange(e){
      this.setState({
            [e.target.name]:e.target.value
      });
    }

    handleSubmit(e){
      e.preventDefault();
      const note = {
        title: this.state.title ,
        body: this.state.body
      };
      database.push(note);
      this.setState({
        title:'',
        body:''
      });
    }
   //render notes from database
   renderNotes(){
     return _.map(this.state.notes , (note , key) =>{
        return(
          <div key={key}>
               <h2>{note.title}</h2>
        <p>{note.body}</p>
          </div>
        )
     });
   }

  render(){
    return (
      <div className="grid">
           <div className="IP">
             <div className="I1">
               <form onSubmit={this.handleSubmit}>
                 <div className="I2">
                   <input 
                   onChange={this.handleChange}
                   value={this.state.title}
                   type="text" 
                   name="title" 
                   className="form-control no-border"
                   placeholder="Your title here"
                   required />  
                 </div>
                 <div className="I3">
                   <textarea 
                   onChange={this.handleChange}
                   value={this.state.body}
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
                 {this.renderNotes()}
             </div>
           </div>
      </div>
    );
   }
}

export default App;
