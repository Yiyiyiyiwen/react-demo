import React, { Component } from "react"
import icon from "./images/icon.png"
import { Link } from "react-router-dom";
import "./header.css"

class Header extends Component {
    constructor(props){
        super(props);
        this.handlelogin = this.handlelogin.bind(this)
        this.state = {
            username:''
        }
    }

    handlelogin(){
        
    }
    render() {
        const { location } = this.props;
        const { username } = this.state;
        return (
            <div>
                <div className="container">
                    <img src={icon}></img>
                    <Link to="/"><span>网易云音乐</span></Link>
                    <div className="login">

                    {username && username.length>0?
                    (
                        <span>当前用户：{username}</span>
                    ):
                    (
                    <Link to={{ pathname: "/login", state: { from: location } }}>
                    <span onClick={this.handlelogin}>登录</span>
                </Link>
                )}
                        
                    </div>
                </div>
            </div>
        )
    }

}


export default Header;