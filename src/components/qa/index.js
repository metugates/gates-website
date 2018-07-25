import React from 'react';
import './qa.css';
import Navbar from '../navbar';
import QuestionList from '../questionlist';
import QuestionPage from '../questionPage';
import QuestionFormPage from '../newquestionformpage';
import { Switch, Route } from 'react-router-dom'

const QA = ({match}) =>
    (
        <div className="qa">
          <Navbar sub="soru-cevap"/>
          <Switch>
            <Route exact path="/qa" component={QuestionList}/>
            <Route path="/qa/new" component={QuestionFormPage} />
            <Route path="/qa/:id" component={QuestionPage} />
          </Switch>
        </div>
    );



export default QA;
