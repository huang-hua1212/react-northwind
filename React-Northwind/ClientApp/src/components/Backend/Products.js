import React, { Component } from "react";

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], loading: true,}
    }
    componentDidMount() {
        this.fetchProductsData();
    }
    render() {
        let contents = this.state.loading ? <p><em style={{ fontSize: "1.5em" }}>Loading.......</em></p> :
            Products.renderProductsTable(this.state.products);

        return (<div>
            <h1 id="tabelLabel" >Products List</h1>
            {contents}
        </div>)
    }
    static renderProductsTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>ProductsID</th>
                        <th>ProductsName</th>
                        <th>UnitPrice</th>
                        <th>UnitsInStock</th>
                        <th>UnitsOnOrder</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.productId}>
                            <td></td>
                            <td>{product.productId}</td>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.unitsOnOrder}</td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    fetchProductsData = async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }

}