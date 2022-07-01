import { Component } from "react"
import { Link } from "react-router-dom";
import css from "./Login.css";


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            showPassword: false,
            loading: true
        };
    }
    //componentDidMount() {
    //    // 抓取資料
    //    // 渲染前的準備
    //}
   
    render() {
        return (
            <div class="background">
                <div class="box">
                    {/*<div class="LeftImg"><img src="../../svg/img.svg" alt="Loading..." /></div>*/}
                    <div class="RightForm">
                        <div class="title"><h>MetalWall</h></div>
                        <div class="subTitle"><h>到元宇宙展開全新社團</h></div>
                        <form id="form" class="form">
                                        <div class="email-div">
                                            <input
                                                type="email"
                                                name="email"
                                                class="email-input"/>
                                    </div>
                                    <div class="password-div">
                                        <input
                                            type="password"
                                            name="password"
                                                class="is-invalid password-input"
                                        placeholder="Password"/>
                                </div>
                                <div class="errorDisplay">
                                    <error-message name="email" class="invalid-feedback emailErrMessage"></error-message>
                                    <br /><error-message
                                        name="password"
                                        class="invalid-feedback emailErrMessage"
                                    ></error-message>
                                </div>
                                <div class="btn-OuterDiv">
                                    <a
                                        type="button"
                                        className='sendOutA-Active'
                                    className="sendOutA"
                                    href="#"
                                ><div className="sendOutBtn-Div sendOutBtn-Div-Active">
                                    登入
                                    </div>
                                </a>
                          </div >
                        </form >
                        <div class="btn-register-div">
                                <a class="btn-register-a" type="button" href="#">註冊帳號</a>
                        </div >
                    </div >
                </div >
             </div >
        )
    }
}