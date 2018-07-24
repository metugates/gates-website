import React, { Component } from 'react';
import './questionlist.css'
import QuestionLink from '../questionlink';

const QuestionInfo = {
    "id":1,
    "topic":"AdMob Integration Problem",
    "description":"Hello, I cannot fix this AdMob integration error that keeps killing me. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Thanks!",
    "author":"Cengizhan Basak",
    "date":"24-07-2018",
    "category":"Unity",
}



class QuestionList extends Component {

    state = {
      questions: [],
    }

    componentDidMount() {
      fetch("https://gates-api.herokuapp.com/questions",{mode:'cors', method: 'get'})
        .then(response => response.json())
        .then(json => {
          this.setState({questions:json.questions})
        });
    }


  render() {

      const { questions } = this.state;
    return (
        <div className="listframe">
            <div className="questionheader">
                <h2>Sorular</h2>
            </div>
            {questions.map(function(object, i){ return (<QuestionLink question={object} key={i} />)})}
        </div>
    )
  }
}

export default QuestionList;
