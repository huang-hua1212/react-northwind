import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';
import { Content } from './Content';
import { Orders } from './Orders';
import { ReactTest } from './ReactTest';


export class Frontend extends Component {
    static displayName = Frontend.name;
    constructor(props) {
        super(props);
        // The `path` lets us build <Route> paths that are
        // relative to the parent route, while the `url` lets
        // us build relative links.
        const { path, url } = this.props.match;
    }
    render() {
        return (
            <Layout>
                <Route exact path='/frontend' component={Home} />
                <Route path='/frontend/counter' component={Counter} />
                <Route path='/frontend/fetch-data' component={FetchData} />
                <Route path='/frontend/orders' component={Orders} />
                <Route path='/frontend/content' component={Content} />
                <Route path='/frontend/react-test' component={ReactTest} />

            </Layout>
        );
    }
}
