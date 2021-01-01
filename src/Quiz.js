import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position : 1 }

    }
    render() {
        console.log('Starting quiz');
        return (
            // <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}
            // </div>
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} />);
        }
    };
export default Quiz;