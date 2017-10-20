import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './component/app/App';
import LayoutComponent from './component/LayoutComponent';

class Routes extends Component {
    render () {
        return (
            <Router>
                <div>
                    <Route path="/app" component={App} />
                    <Route path="/layout" component={LayoutComponent} />
                </div>
            </Router>
        );
    }
}

export default Routes;