import { Component } from 'react';
import { Nav } from 'reactstrap'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Route, Redirect, useParams, useLocation } from 'react-router';
import "./Sidebar.css"

export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false,}
    }
    componentDidMount() {
        this.setState({ loading: false });
    }
    render() {
        const path = window.location.pathname;
        if (this.state.loading) {
            return (<p><em style={{ fontSize: "1.5rem" }}>Loading......</em></p>)
        } else {
            return (
                // 參考 https://mdbootstrap.com/docs/standard/extended/sidebar/
                <Nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush me-3 mt-4">
                            <a
                                href="/backend/customers"
                                className={"list-group-item list-group-item-action py-2 ripple" + (path === "/backend/customers" ? " active" : "")}
                                aria-current="true"
                            >
                                <AccessibilityNewIcon></AccessibilityNewIcon>
                                <span style={{ marginLeft: "0.7rem" }}>Customers</span>
                            </a>
                            <a
                                href="/backend/products"
                                className={"list-group-item list-group-item-action py-2 ripple" + (path === "/backend/products" ? " active" : "")}>
                                <ApartmentIcon></ApartmentIcon>
                                <span style={{ marginLeft: "0.7rem" }}>Products</span>
                            </a>
                            <a
                                href="/backend/orders"
                                className={"list-group-item list-group-item-action py-2 ripple" + (path === "/backend/orders" ? " active" : "")}
                            >
                                <AccountTreeIcon></AccountTreeIcon>
                                <span style={{ marginLeft: "0.7rem" }}>Orders</span>
                            </a>
                            <a
                                href="/backend/suppliers"
                                className={"list-group-item list-group-item-action py-2 ripple" + (path === "/backend/suppliers" ? " active" : "")}
                            >
                                <AlignVerticalBottomIcon></AlignVerticalBottomIcon>
                                <span style={{ marginLeft: "0.7rem" }}>Suppliers</span>
                            </a>
                        </div>
                    </div>
                </Nav>
            )
        }
        
    }
}