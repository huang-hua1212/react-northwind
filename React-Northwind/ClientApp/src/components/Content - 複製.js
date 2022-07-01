import React, { Component } from 'react';
import Cart from './Cart';
import  Product  from "./Product"
import { Container, Row, Col, Jumbotron, Button, CardDeck, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//                全域this
//                /      \
//           render    Content類別(類別this)
//componentDidMount
//            state
export class Content extends Component {
    static displayName = Content.name;
    constructor(props) {
        super(props);
        this.state = {products:[], modal: false, cart:[], loading: true}
    }
    // this指向誰要看調用的方法: 全域會調用他，所以this是全域
    componentDidMount() {
        // 抓資料
        this.fetchProductsData();
    }
    // this指向誰要看調用的方法: 全域會調用他，所以this是全域
    render() {
        let { products, cart, loading } = this.state;
        console.log(this);
        return (
            <div className="content">
                <Container>
                <Row>
                    <Col md={12}>
                        <Jumbotron>
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
                                <Button color="primary" onClick={ this.toggle }>購物車</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
                    <Row>
                        {products.map(product =>
                            <Col sm={6} md={4} className="mb-3" key={product.id}>
                                <Product
                                    product={product}
                                    cart={cart}
                                />
                                {/*<Card style={{ height: '100%' }}>*/}
                                {/*    <CardImg width="100%" src={product.img} alt="Card image cap" />*/}
                                {/*    <CardBody>*/}
                                {/*        <CardTitle style={{ height: '3rem' }}>{product.title}</CardTitle>*/}
                                {/*        <CardSubtitle>*/}
                                {/*            <h4>{*/}
                                {/*                product.discount*/}
                                {/*                    ? <Badge color="danger">特價：{product.price}</Badge>*/}
                                {/*                    : <Badge color="success">售價：{product.price}</Badge>*/}
                                {/*            }</h4>*/}
                                {/*        </CardSubtitle>*/}
                                {/*        <CardText style={{ height: '8rem' }}>{product.desc}</CardText>*/}
                                {/*        <Button color="secondary" >購買</Button>*/}
                                {/*    </CardBody>*/}
                                {/*</Card>*/}
                            </Col>
                        )}
                    </Row>
                </Container>
                <Cart/>
                </div>
        )
    }
    toggle = async () => {
        // this指向誰要看調用的方法: 因為用箭頭函數所以this指向全域this(this.state)
        await this.setState({ modal: !this.state.modal });
    }
    // 子元件點選購買，觸發父元件addToCart
    addToCart = (product) => {
        const cart = this.state.cart;
        cart.push(product);
        this.setState({ cart })
    }
    async fetchProductsData() {
        const response = await fetch('https://all-the-cors.herokuapp.com/https://blooming-sands-85089.herokuapp.com/react-shopping-cart/cart');
        const data = await response.json();
        this.setState({ products: data.data, loading: false });
    }
    // 由於 static 成員是屬於類別，而非個別物件，在 static 成員中使用 this，會是一種語意上的錯誤，具體來說，就是在 static 方法或區塊中不能出現 this 關鍵字，否則編譯錯誤。
    // static要用類別名稱呼叫(Content.reanderCartModal())
    // obj指向類別Content
    // static的this指向類別Content
    static renderCartModal(obj) {
        var self = obj;
        let products = self.state.productsData;
        return (
            <Modal isOpen={self.state.modal} toggle={self.toggle}>
                <ModalHeader toggle={self.toggle}>購物車</ModalHeader>
                <ModalBody>
                    <Cart cart="" deleteItem=""></Cart>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={self.toggle}>結帳</Button>{' '}
                    <Button color="secondary" onClick={self.toggle}>取消</Button>
                </ModalFooter>
            </Modal>
        )
    }
}