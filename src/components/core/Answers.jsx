import React, {Component} from 'react';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = ['', '', '', ''];

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
            }
            
            this.setState({
                classNames: updatedClassNames,
                
            })

            this.props.showButton();
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })
    }
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }
        
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} 
                        className={this.props.isButtonShown ? classNames[0] : ""}
                         data-id="1">
                    <span>A</span>
                    <p>{answers[0]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={this.props.isButtonShown ? classNames[1] : ""} data-id="2">
                    <span>B</span> 
                    <p>{answers[1]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={this.props.isButtonShown ? classNames[2] : ""} data-id="3">
                    <span>C</span> 
                    <p>{answers[2]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers