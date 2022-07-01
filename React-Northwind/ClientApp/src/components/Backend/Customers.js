import React, { Component } from 'react';

export class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {customers:[], loading: true}
    }
    componentDidMount() {
        this.fetchCustomersData();
    }
    render() {
        let contents = this.state.loading ? <p><em style={{ fontSize: "1.5rem" }}>Loading......</em></p> : Customers.renderCustomersTable(this.state.customers);
        return (
            <div>
                <h1 id="tabelLabel" >Customers List</h1>
                {contents}
            </div>
            )
    }

    static renderCustomersTable(customers) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>CustomerID</th>
                        <th>CompanyName</th>
                        <th>country</th>
                        <th>phone</th>
                        <th>fax</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        <tr key={customer.customerId}>
                            <td></td>
                            <td>{customer.customerId}</td>
                            <td>{customer.companyName}</td>
                            <td>{customer.country}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.fax}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    fetchCustomersData = async () => {
        const response = await fetch('/api/customers');
        const data = await response.json();
        this.setState({ customers: data, loading: false });
    }
}