import React, {Component} from 'react';
import Header from "./dooboolog/Header";
import Contents from "./dooboolog/Contents";

class LayoutComponent extends Component {

    render() {
        return (
            <div>
                <Header />
                <Contents />
            </div>
        );
    }
}

export default LayoutComponent;