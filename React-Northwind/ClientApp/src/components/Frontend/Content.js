import React, { Component } from 'react';
import Cart from './Cart';
import  Product  from "./Product"
import { Container, Row, Col, Jumbotron, Button, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClearIcon from '@mui/icons-material/Clear';
import css from "./Content.css"

export class Content extends Component {
    static displayName = Content.name;
    constructor(props) {
        super(props);
        this.state = { products: [], modal: false, cart: [], loading: true}
    }
    componentDidMount() {
        // 抓資料
        this.fetchProductsData();
    }
    deleteCartItem = async (product) => {
        let cart = this.state.cart;
        for (let i = 0; i < cart.length; i+=1) {
            if (product.id === cart[i].id) {
                cart.splice(i, 1);
                await this.setState({ cart })
                break;
            }  
        }
    }

    checkout = (totalPrice) => {
        alert(`已從您的信用卡中扣除${totalPrice}元！`);
    }
    render() {
        let { products, cart, loading, modal } = this.state;
        if (loading) {
            return (<p><em style={{ fontSize: "1.5rem"}}>Loading......</em></p>)
        } else {
            return (
                <div className="content">
                    <Container>
                    <Row>
                        <Col md={12}>
                            <Jumbotron className="jumbo">
                                <h1 className="display-3">美客唱片</h1>
                                <p className="lead">
                                    美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
                                </p>
                                <p className="lead">
                                    並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
                                </p>
                                <p className="lead">
                                    不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
                                </p>
                                <p className="lead">
                                    進一步擴大影響力，提昇流行音樂產業的動能
                                </p>
                                <hr className="my-2" />
                                <p className="lead">
                                    {/*toggle()函數為箭頭函數，所以函數中的this無條件指向全域*/}
                                    <Button color="primary" onClick={this.toggle}>購物車</Button>
                                </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                        <Row>
                            {/*(product, index) =>的後面不要加大括號{ }*/}
                            {products.map(product =>
                                <Col sm={6} md={4} className="mb-3" key={product.id}>
                                    {/*product和cart為props 用法*/}
                                    {/*addToCart為子元件向父元件傳遞數值(vue的emit方法)*/}
                                    <Product
                                        product={product}
                                        cart={cart}
                                        addToCartSon={this.addToCart}
                                    />
                                </Col>
                            )}
                        </Row>
                    </Container>
                    <Modal className="shadow-sm" size="lg" isOpen={modal} toggle={this.toggle}>
                        <ModalHeader>購物車
                            <a type="button" style={{
                                position: "absolute",
                                right: "1.8rem"
                            }}
                                onClick={this.toggle}
                                 >
                                <ClearIcon></ClearIcon>
                                </a>
                        </ModalHeader>
                        {/*<ModalHeader toggle={this.toggle}>購物車</ModalHeader>*/}
                        <ModalBody>
                            {cart.length === 0 ? <p style={{ fontSize: "1.5rem", textAlign: "center" }}>無商品資料</p> :
                                <Cart cart={cart} deleteItem={this.deleteCartItem} />
                            }
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>結帳</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>取消</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }
        
    }
    toggle = async () => {
        // this指向誰要看調用的方法: 因為用箭頭函數所以this指向全域this(this.state)
        await this.setState({ modal: !this.state.modal });
    }
    addToCart = (product) => {
        let _product = JSON.parse(JSON.stringify(product));
        const cart = this.state.cart;
        for (let i = 0; i < cart.length; i += 1) {
            if (_product.id === cart[i].id) {
                cart[i].num += 1;
                break;
            } else if (_product.id !== cart[i].id && i === cart.length - 1) {
                _product.num = 1;
                cart.push(_product);
                break;
            }
        }
        if (cart.length === 0) {
            _product.num = 1;
            cart.push(_product);
        }
        //cart.push(product);
        this.setState({ cart })
    }
    async fetchProductsData() {
        const response = await fetch('https://all-the-cors.herokuapp.com/https://blooming-sands-85089.herokuapp.com/react-shopping-cart/cart');
        const data = await response.json();
        this.setState({ products: data.data, loading: false });
    }
    static renderCartModal(obj) {
        var self = obj;
        let products = self.state.productsData;
        return (
            <Modal isOpen={self.state.modal} toggle={self.toggle}>
                <ModalHeader toggle={self.toggle}>購物車</ModalHeader>
                <ModalBody>
                    <Cart cart="" deleteCartItem=""></Cart>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={self.toggle}>結帳</Button>{' '}
                    <Button color="secondary" onClick={self.toggle}>取消</Button>
                </ModalFooter>
            </Modal>
        )
    }
}