import React, {Component} from 'react';
import Button from "./Button";

class ButtonGroup extends Component {
    render() {
        return (
            <div>
                <Button text="Start" onBtnClick={ this.props.onStart } />
                <Button text="Stop" onBtnClick={ this.props.onStop } />
                <Button text="Reset" onBtnClick={ this.props.onReset} />
            </div>
        );
    }
}

export default ButtonGroup;