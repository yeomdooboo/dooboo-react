import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
    props: {
        value: string,
        onClick: func
    };

    render() {
        return (
            <button className="defaultButton" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;