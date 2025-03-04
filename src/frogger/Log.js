import React from 'react';
import wood from './resources/wood.jpg';

let velocity;

class Log extends React.Component {
  
    state = {
        y: 0,
        x: 0,
        forward: true,
        firstLoad: true,
        onWood: false,
        intervalId: null // Store the interval ID
    }

    /*Checks for collisions on every update.  Y is determined in parent's logY object which are 100px apart.*/
    componentWillUpdate(){
        if(this.props.frogY > this.state.y - 25 && this.props.frogY < this.state.y + 25){
            if(this.props.frogX > this.state.x + 30 || this.props.frogX < this.state.x - 30){
                   this.props.startOver();
               }
           } else if(this.props.frogX < this.state.x + 30 && this.props.frogX > this.state.x - 30){

           }
        }

    /*Sets random speed and random starting X position for logs*/
    componentDidMount(){
        if(this.state.firstLoad){
            velocity = Math.floor(Math.random() * (200 - 100)) + 100;
            let randomX = Math.floor(Math.random() * (210 - 50)) + 50;
            
            // Store the interval ID in state so we can clear it later
            const intervalId = setInterval(this.logMovement, velocity);
            
            this.setState({
                y: this.props.logY,
                x: randomX,
                firstLoad: false,
                intervalId: intervalId // Save the interval ID
            });
        }
    }
    
    // Clean up the interval when component unmounts
    componentWillUnmount() {
        // Clear the interval to prevent memory leaks
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    logMovement = () => {
        if(this.state.x < 235 && this.state.forward){
            this.setState(prevState => ({
                x: prevState.x + 5
            }))
        } else if(this.state.x >= 235 || !this.state.forward){
            this.setState(prevState => ({
                x: prevState.x - 5,
                forward: false
            }))
        }
        if(this.state.x <= 0){
            this.setState({
                forward: true
            })
        }
    }

    render(){
        const logStyle = {
            height: '50px',
            width: '70px',
            background: 'url(' + wood + ')',
            backgroundSize: 'cover',
            position: 'absolute',
            left: this.state.x,
            borderRadius: '15px',
            top: this.state.y,
            zIndex: '1',
            transition: '.3s'  /*Transition makes movement on all characters smooth*/
        }

        return (
            <div style={logStyle}></div>
        )
    }
}

export default Log;
