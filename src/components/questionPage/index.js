import React, { Component } from 'react';
import './qp.css';

class QuestionPage extends Component {

    state = {
      question: {
          "id":"",
          "topic":"",
          "date":"",
          "author":"",
          "description":"",
      },
    }

    componentDidMount() {
      fetch(`https://gates-api.herokuapp.com/questions/${this.props.match.params.id}`,{mode:'cors', method: 'get'})
        .then(response => response.json())
        .then(json => {
          this.setState({question:json})
        });
    }

    render() {
        return (
            <div className="questionPageContainer">
                <div className="questionPart">
                    <div className="questionHeader">
                        <div className="leftside">
                            <h2> {this.state.question.topic} </h2>
                            <h4> {this.state.question.author} </h4>
                        </div>
                        <div className="rightside">
                            <h5> {this.state.question.category} </h5>
                            <h5> {this.state.question.date} </h5>
                        </div>
                    </div>
                    <p className="questionDescr"> {this.state.question.description} </p>
                </div>
                <div className="answerPart">
                    <h3>Answer</h3>
                    <p>
                        "Use your brain to solve this problem. I'm sure you can do it!"
                    </p>
                </div>
            </div>
        )
    }
}

export default QuestionPage;
