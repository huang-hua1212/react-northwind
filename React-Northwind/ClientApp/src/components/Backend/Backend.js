import { Component } from "react";
import { Sidebar } from "./Sidebar";
import { Layout } from "./Layout";
import { Route, Redirect, useParams, useLocation } from 'react-router';
import { Customers } from "./Customers";
import { Products } from "./Products";
import { Orders } from "./Orders";
import { Suppliers } from "./Suppliers";


import "./Backend.css";


export class Backend extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // The `path` lets us build <Route> paths that are
        // relative to the parent route, while the `url` lets
        // us build relative links.
        const { path, url } = this.props.match;

        return (
            <div>
                <Layout>
                    <div className = "backendLayout" style={{ display: "flex" }}>
                        <div className="backendSidebar">
                            <Sidebar></Sidebar>
                        </div>
                        <div id ="contentTbl">
                            <Route path={`${path}/customers`} component={Customers} />
                            <Route path={`${path}/products`} component={Products} />
                            <Route path={`${path}/orders`} component={Orders} />
                            <Route path={`${path}/suppliers`} component={Suppliers} />
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}