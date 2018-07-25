import React, { Component } from 'react';
import './qp.css';
const ReactMarkdown = require('react-markdown');

class QuestionPage extends Component {

    state = {
      question: {
        "id":1,
        "topic":"Rigidbody cannot detect collision",
        "description":"Hello everyone, I have a problem with the rigidbody component of my player gameobject. I need to detect collisions with it but it can't detect any. besides it passes through every object. help please, i use this function for collision detection: \n\n    void OnCollisionEnter(Collider other) {\n\n        Debug.Log(other.gameobject.name);\n\n    }",
        "author":"Cengizhan Basak",
        "date":"25-07-2018",
        "category":"Unity",
      },
    }
    //
    // componentDidMount() {
    //   fetch(`https://gates-api.herokuapp.com/questions/${this.props.match.params.id}`,{mode:'cors', method: 'get'})
    //     .then(response => response.json())
    //     .then(json => {
    //       this.setState({question:json})
    //     });
    // }

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
                    <ReactMarkdown className="questionDescr" source={this.state.question.description} />
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
