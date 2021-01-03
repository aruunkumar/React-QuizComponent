import React, { Component } from 'react';

class QuizQuestionButton extends Component {

    render() {
        return (
            <li>
               <button>{this.props.button_text}</button>
            </li>
        )
    }
};

export default QuizQuestionButton;

//                <button key={this.props.index+"B"}>{this.props.button_text}</button>