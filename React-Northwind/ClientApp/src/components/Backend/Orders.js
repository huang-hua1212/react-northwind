import React, { Component } from 'react';

export class Orders extends Component {
    static displayName = Orders.name;

    constructor(props) {
        super(props);
        //this.state = { forecasts: [], loading: true };
        this.state = { orders: [], loading: true };

    }

    componentDidMount() {
        this.populateOrdersData();
    }

    static renderOrdersTable(orders) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>OrderID</th>
                        <th>OrderDate</th>
                        <th>Freight</th>
                        <th>ShippedDate</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order =>
                        <tr key={order.orderId}>
                            <td></td>
                            <td>{order.orderId}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.freight}</td>
                            <td>{order.shippedDate}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em style={{ fontSize: "1.5em" }}>Loading...</em></p>
            : Orders.renderOrdersTable(this.state.orders);

        return (
            <div>
                <h1 id="tabelLabel" >Orders List</h1>
                {contents}
            </div>
        );
    }

    populateOrdersData = async () => {
        const response = await fetch('/api/Orders');
        const data = await response.json();
        this.setState({ orders: data, loading: false });
    }
}
