import React, {Component} from 'react';
import ButtonGroup from "./ButtonGroup";
import {toast} from "react-toastify";
import Display from "./Display";
import Message from "./Message";

class Timer extends Component {
    state = {
        initialValue: 10,
        duration: 10,
        handle: 0,
        message: ''
    };

    notify = (text, type) => {
        toast[type](text, { autoClose: 2000 });
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
        this.notify('Start', 'success');
    };

    stop = () => {
        this.clean('pause');
        this.notify('Pause', 'warn');
    };

    reset = () => {
        this.clean('reset');
        this.setState({
            duration: this.state.initialValue
        });
        this.notify('Reset', 'error');
    };

    render() {
        return (
            <div className="container my-5">
                <Display title={this.props.title} timerValue={this.formatDuration()} />
                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
                <Message text={this.state.message} />
            </div>
        );
    }
}

export default Timer;

