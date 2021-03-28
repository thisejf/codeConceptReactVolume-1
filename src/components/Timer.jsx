import React, {Component} from 'react';
import ButtonGroup from "./ButtonGroup";

class Timer extends Component {
    state = {
        initialValue: 10,
        duration: 10,
        handle: 0,
        message: ''
    };

    componentWillUnmount() {
        this.clean();
    }

    count = () => {
        this.setState({
            duration: this.state.duration - 1
        });
        if (this.state.duration === 0){
            this.clean();
        }
    };

    clean = (message) => {
        clearInterval(this.state.handle);
        this.setState({
            message
        });
    };

    start = () => {
        const handle = setInterval( () => {
            this.count()
        }, 1000);
        this.setState({
            handle,
            message: ''
        });
    };

    stop = () => {
        this.clean('pause');
    };

    reset = () => {
        this.clean('reset');
        this.setState({
            duration: this.state.initialValue
        })
    };

    render() {
        return (
            <div>
                <h2>Pomodoro</h2>
                <h3>{ this.state.message }</h3>
                <div>
                   duree: { this.state.duration}
                </div>
                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset}/>
            </div>
        );
    }
}

export default Timer;

