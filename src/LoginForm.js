import React from "react";
import icon from "./images/icon.png"
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./header.css"
import "./LoginForm.css"
import { get } from "./utils/request";
import { baseurl, appkey } from "./utils/request"

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false   // 是否重定向到之前的页面
        }
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
        event.preventDefault()//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）

        const username = this.state.username;
        const password = this.state.password;
        if (username.length === 0 || password.length === 0) {
            alert("用户名或密码不能为空！");
            return;
        }
        else {
            get(baseurl + "/login?key=" + appkey + "&phone="
            + username + "&passwd=" + password).then(data => {
                console.log(data)
            })
            sessionStorage.setItem("username", username);
            this.setState({
                redirectToReferrer: true,
            });
            console.log("login successfully")
        }

       
    }
    render() {
        // from 保存跳转到登录页前的页面路径，用于在登录成功后重定向到原来页面
        //要不就跳转到之前的页面，要不就是根目录
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        //这句话相当于 const redirectToReferrer = this.state.redirectToReferrer;

        // 登录成功后，redirectToReferrer为true，使用Redirect组件重定向页面
        if (redirectToReferrer) {

            return <Redirect to={from} />;
        }
        return (
            <div>
                <div className="container">
                    <img src={icon}></img>
                    <Link to="/"><span>网易云音乐</span></Link>
                </div>
                <form onSubmit={this.handleSubmit} className="loginform">
                    <div className="myform">
                        <div>
                            <div className="lgname">用户名:<br></br></div>
                            <input type="text" name="username" value={this.state.username}
                                onChange={this.handleChange} className="myinput"></input>
                        </div>
                        <div>
                            <div className="lgname">密码:<br></br></div>
                            <input type="password" name="password" value={this.state.password}
                                onChange={this.handleChange} className="myinput"></input>

                        </div>
                        {/* <br></br>
                    <label>选择框</label>
                    <select value={this.state.value} onChange={this.handleselectChange}>
                        <option value="react">react</option>
                        <option value="redux">redux</option>
                        <option value="mobx" selected> mobx</option>
                    </select>
                    <br></br> */}
                        <input type="submit" value="登录" className="loginbtn"></input>
                    </div>

                </form>

            </div>


        )
    }
}


export default LoginForm;