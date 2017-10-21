import React, { Component } from 'react';
import PopUpFooter from 'PopUpFooter'
import './PopUp.scss';

class PopUp extends Component {
    props: {
        children: array,
        useFooter: boolean
    };

    componentDidMount() {


    }

    render () {
        return (
            <div>
                {this.props.children}
                {this.props.useFooter ?
                <PopUpFooter/> : null
                }
            </div>
        );
    }
}

PopUp.Footer = PopUpFooter;

export default PopUp;