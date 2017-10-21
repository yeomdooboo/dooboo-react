import React, {Component} from 'react';
import Header from "./dooboolog/Header";
import Body from "./dooboolog/Body";

class LayoutComponent extends Component {

    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default LayoutComponent;