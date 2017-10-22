import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
    props: {
        children: array,
        onClick: func
    };

    render() {
        return (
            <button className="defaultButton" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;