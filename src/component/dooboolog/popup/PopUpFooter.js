import React, { Component } from 'react';
import './PopUpFooter.scss';

class PopUpFooter extends Component {
    props: {
        onClose: func
    };

    render () {
        return (
            <div>
                {this.props.children}
                <button onClose={this.props.onClose}>닫기</button>
            </div>
        );
    }
}

export default PopUpFooter;