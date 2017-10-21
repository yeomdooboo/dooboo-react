import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    props: {
        value: string
    };

    render () {
        return (
            <button className="defaultButton">{this.props.value}</button>
        );
    }
}

export default Button;