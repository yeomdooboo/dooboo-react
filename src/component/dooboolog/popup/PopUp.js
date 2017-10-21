import React, { Component } from 'react';
import './PopUp.scss';

class PopUp extends Component {
    props: {
        children: array,
        useFooter: boolean,
        onClose: func
    };

    render () {
        return (
            <div className="popup">
                <span className="closeBtn" onClick={this.props.onClose} />
                {this.props.children}
            </div>
        );
    }
}

export default PopUp;