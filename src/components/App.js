import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { getNotes , saveNotes , deleteNote} from '../actions/notes'
import NotePage from './NotePage';


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
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderNotes = this.renderNotes.bind(this);
    }
    //lifecycle method of react
    componentDidMount(){
        this.props.getNotes();
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
      this.props.saveNotes(note);
      this.setState({
        title:'',
        body:''
      });
    }
   //render notes from database
   renderNotes(){
     return _.map(this.props.notes , (note , key) =>{
        return(
          <NotePage key={key}>
               <h2>{note.title}</h2>
        <p>{note.body}</p>
        <button className="" onClick={()=>this.props.deleteNote(key)}>Delete</button>
          </NotePage>
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

function mapStateToProps( state , ownProps){
  return {
    notes : state.notes
  }
}

export default connect(mapStateToProps , { getNotes , saveNotes , deleteNote} )(App);
