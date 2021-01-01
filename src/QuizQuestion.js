import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
    render() {
        return (<main>
            <section className="QuizQuestion">
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                {this.props.quiz_question.answer_options.map((element, index) => (
                    <li key={index}>{element}</li>
                ))
                }
                <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} />
              </ul>
            </section>
          </main>);
    }
};

export default QuizQuestion;