import React, { Component } from 'react';
import Button from './Button';
import './Contents.scss';

class Contents extends Component {
    render () {
        return (
            <div className="content">
                <div className="buttonArea">
                    <Button value="글쓰기"/>
                </div>
                <div className="contentArea">
                </div>
            </div>
        );
    }
}

export default Contents;