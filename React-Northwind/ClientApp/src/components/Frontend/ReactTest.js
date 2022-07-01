import React, { Component } from "react";

export class ReactTest extends Component {
    constructor(props) {
        super(props);
        this.state = {times: 0,}
    }
    componentDidMount() {
        this.fetchHtmlData();
    }
    setTimes = () => {
        let times = this.state.times + 1;
        this.setState({ times })
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.state.times}</h1>
                <button onClick={this.setTimes}>ADD</button>
            </div>
        );
    }
    fetchHtmlData = async () => {
        //let htmlContents = await fetch("https://all-the-cors.herokuapp.com/https://blooming-sands-85089.herokuapp.com/0621_SSRTEST");
    }
}