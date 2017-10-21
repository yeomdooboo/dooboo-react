import React, { Component } from 'react';
import './Body.scss';
import Contents from "./Contents";

class Body extends Component {
    render () {
        return (
            <div className="body">
                <Contents />
            </div>
        );
    }
}

export default Body;