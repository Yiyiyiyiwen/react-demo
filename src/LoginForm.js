import React from "react";
import icon from "./images/icon.png"
import { Link } from "react-router-dom";
import "./header.css"


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', password: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleselectChange = this.handleselectChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleselectChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        console.log("login successfully")
        console.log("pick " + this.state.value)
        event.preventDefault()//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
    }
    render() {
        return (
            <div>
                <div className="container">
                    <img src={icon}></img>
                    <Link to="/"><span>网易云音乐</span></Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>用户名:
                <input type="text" name="name" value={this.state.name}
                            onChange={this.handleChange} className="btn"></input>
                    </label>
                    <label>密码:
                <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>选择框</label>
                    <select value={this.state.value} onChange={this.handleselectChange}>
                        <option value="react">react</option>
                        <option value="redux">redux</option>
                        <option value="mobx" selected> mobx</option>
                    </select>
                    <br></br>
                    <input type="submit" value="登录"></input>
                </form>

            </div>


        )
    }
}


export default LoginForm;