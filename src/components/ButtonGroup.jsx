import React, {Component} from 'react';
import Button from "./Button";

class ButtonGroup extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between my-2" style={{ maxWidth: 250 }}>
                <Button text="Start" onBtnClick={ this.props.onStart } btnCssClasses="btn btn-success"/>
                <Button text="Stop" onBtnClick={ this.props.onStop } btnCssClasses="btn btn-warning"/>
                <Button text="Reset" onBtnClick={ this.props.onReset} btnCssClasses="btn btn-danger"/>
            </div>
        );
    }
}

export default ButtonGroup;