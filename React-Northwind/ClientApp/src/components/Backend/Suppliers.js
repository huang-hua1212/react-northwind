import React, { Component } from "react"


export class Suppliers extends Component {
    constructor(props) {
        super(props);
        this.state = { suppliers: [], loading: true}
    }
    componentDidMount() {
        this.fetchSuppliersData();
    }

    render() {
        let contents = this.loading ? <p><em style={{ fontSize: "1.5em" }}>Loading......</em></p> :
            Suppliers.renderSuppliersTable(this.state.suppliers);
        return (<div>
            <h1 id="tabelLabel" >Products List</h1>
            {contents}
        </div>)
    }

    static renderSuppliersTable(suppliers) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>SupplierID</th>
                        <th>CompanyName</th>
                        <th>Phone</th>
                        <th>fax</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier =>
                        <tr key={supplier.supplierId}>
                            <td></td>
                            <td>{supplier.supplierId}</td>
                            <td>{supplier.companyName}</td>
                            <td>{supplier.phone}</td>
                            <td>{supplier.fax}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    fetchSuppliersData = async () => {
        const response = await fetch("/api/suppliers");
        const data = await response.json();
        this.setState({ suppliers: data, loading: false, });
    }
}