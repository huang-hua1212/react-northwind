import { extend } from 'jquery';
import React, { Component } from 'react';
import { Table, Alert, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default class Cart extends Component {
    constructor(props) {
        super(props)
        const { cart, deleteItem } = this.props;
        this.state = { cart, deleteItem };
    }
    render() {
        const { cart, deleteItem } = this.state;
        return (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>品項</th>
                            <th>單價</th>
                            <th>數量</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*(product, index) =>的後面不要加大括號{ }*/}
                        {cart.map((product, index) => 
                            <tr key={product.id}>
                                <th>{index + 1}</th>
                                <td style= {{width: "23rem"}}>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.num}</td>
                                <td>{product.price * product.num}</td>
                                <td><Button onClick={() => { deleteItem(product) }}>X</Button></td>
                            </tr>
                        )}
                    </tbody>
                </table >
            </div>)
    }
}