import { Component } from "react"
import { Badge, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap"



export default class Product extends Component {
    constructor(props) {
        super(props);
        const { product, cart, loading, addToCartSon } = this.props;
        this.state = { product, cart, loading, addToCartSon }
    }
    render() {
        const { product, loading } = this.state;
        const contents = loading ? <p><em>Loading........</em></p> : 
                <Card style={{ height: '100%' }}>
                    <CardImg width="100%" src={product.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle style={{ height: '3rem' }}>{product.title}</CardTitle>
                        <CardSubtitle>
                            <h4>{
                                product.discount
                                    ? <Badge color="danger">特價：{product.price}</Badge>
                                    : <Badge color="success">售價：{product.price}</Badge>
                            }</h4>
                        </CardSubtitle>
                    <CardText style={{ height: '8rem' }}>{product.desc}</CardText>
                    <Button color="secondary" onClick={() => this.state.addToCartSon(product)}>購買</Button>
                    </CardBody>
            </Card>
        return contents;
    }
}
