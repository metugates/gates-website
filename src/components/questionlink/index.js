import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './ql.css';



class QuestionLink extends Component {


    render()
    {
        return (
            <Link className="qLink" to={`/qa/${this.props.question.id}`}>
                <div className="questionLink">
                  <div className="leftsidelink">
                        <div className="questionTopic">
                            <h3>{this.props.question.topic}</h3>
                        </div>
                        <div className="questionCategory">
                            {this.props.question.category}
                        </div>
                        <div className="questionDesc">
                            <p>{this.props.question.description.substr(0,50)}...</p>
                        </div>
                  </div>
                  <div className="rightsidelink">
                        <div className="questionAuthor">
                            {this.props.question.author}
                        </div>
                        <div className="questionDate">
                            {this.props.question.date}
                        </div>
                  </div>
                </div>
            </Link>
        )

    }
}

export default QuestionLink;
