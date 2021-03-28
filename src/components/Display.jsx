import React, {Component, Fragment} from 'react';

class Display extends Component {
    render() {
        return (
            <>
                <h1>{ this.props.title }</h1>
                <h2>
                    duree: { this.props.timerValue }
                </h2>
            </>
        );
    }
}

export default Display;