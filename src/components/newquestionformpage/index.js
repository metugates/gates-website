import React, { Component } from 'react';
import './newquestionform.css';
import { Redirect } from 'react-router-dom';



class QuestionFormPage extends Component {
  constructor(props) {
      super(props);
      this.state = {value: '', redirect:false};

      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    var submission = {};
    formData.forEach(function(value, key){
      submission[key] = value;
    });
    var json = JSON.stringify(submission);
    fetch('https://gates-api.herokuapp.com/questions/new',
    {mode:'cors',
    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: json,
  }).then(() => this.setState({redirect:true}));
  }
  render() {
    return(
        <div className="formframe">
          <h1> Ask Question </h1>
        <form onSubmit={this.handleSubmit}>
            <div>
              Your Name:<br/>
            <input type="text" name="author" />
            </div>
            <div>
              Category:<br/>
            <select name="category">
                <option value="unity">Unity</option>
                <option value="animation">Animation</option>
                <option value="unreal">Unreal Engine</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              Topic:<br/>
            <input type="text" name="topic" />
            </div>
            <div className="descriptionInput">
              Problem Description:<span className="sub">(markdown supported)</span><br/>
            <textarea name="description" />
            </div>
            <input type="submit" value="Submit"/>
          </form>
          { this.state.redirect && <Redirect to="/qa"/> }
        </div>
    );

  }
}



export default QuestionFormPage;
