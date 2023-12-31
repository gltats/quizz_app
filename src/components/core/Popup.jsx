import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
import petImage from '../../../images/pet_hi.png'; // Import the image

class Popup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome',
            text: 'This is a Cybersecurity quiz. <br /><br />',
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: this.props.score >= 5 ? '🥰Congratulations!' : '😓Ohh sorry!',
                buttonText: 'Restart'
            });

            //alert("START THE QUIZ");
            this.props.startQuiz();
        } else {
            
            //alert("FINISHED QUIZ");            
            location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        const score = nextProps.score;
        const total = nextProps.total;
    
        this.setState({
            title: score >= 5 ? '🥰Congratulations!' : '😓Ohh sorry!',
            text: `You have completed the quiz. <br /> You got: <strong>${score}</strong> out of <strong>${total}</strong> questions right.`,
        });
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#a86ed5'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                        <img src={petImage} alt="Pet Image" className='petHi'></img>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

