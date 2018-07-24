import React from 'react';
import './qa.css';
import Navbar from '../navbar';
import QuestionList from '../questionlist';
import QuestionPage from '../questionPage';
import { Route } from 'react-router-dom'

const QA = ({match}) =>
    (
        <div className="qa">
            <Navbar sub="soru-cevap"/>
            <Route exact path="/qa" component={QuestionList}/>
            <Route path="/qa/:id" component={QuestionPage} />
        </div>
    );



export default QA;
