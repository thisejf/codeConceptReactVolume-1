import React, {Component} from 'react';
import ButtonGroup from "./ButtonGroup";

class Timer extends Component {
    state = {
        initialValue: 10,
        duration: 10,
        handle: 0,
        message: ''
    };

    prependZero = value => {
        return value < 10 ? "0" + value.toString() : value.toString();
    };

    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const secondes = Math.floor(this.state.duration % 60);
        return `${this.prependZero(minutes)}:${this.prependZero(secondes)}`;
    };

    componentDidMount() {
        this.setState({
            initialValue: parseInt(this.props.duration, 10) * 60,
            duration: parseInt(this.props.duration, 10) * 60,
        });
    }

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
            <div className="container my-5">
                <h1>{ this.props.title }</h1>
                <h2>
                   duree: { this.formatDuration() }
                </h2>
                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
                <div>{ this.state.message }</div>
            </div>
        );
    }
}

export default Timer;

