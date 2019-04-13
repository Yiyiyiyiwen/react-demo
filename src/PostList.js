import React, { Component } from "react";
import PostItem from "./PostItem";
import Recommend from "./Recommend";
import Newest from "./Newest";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                id: 1,
                title: "123",
                author: "aaaaa",
                date: "2017-09-01 10:00",
                vote: 0
            },
            {
                id: 2,
                title: "123",
                author: "bbb",
                date: "2017-09-01 10:00",
                vote: 4
            },
            {
                id: 3,
                title: "123",
                author: "ccc",
                date: "2017-09-01 10:00",
                vote: 1
            }],
            count: 1
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this);
        this.addtest = this.addtest.bind(this)
    }

    componentDidMount() {

    }
    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    handleVote(id) {
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
            console.log(newItem)
            return newItem;
        });
        this.setState({
            posts
        });
    }

    addtest() {
        //=> 后面需要带有小括号，因为返回的是一个对象
        this.setState((prevState, props)=>({
            count:prevState.count+1
        }) )
        
        // this.setState(function(prevState, props) {
        //     return {
        //       counter: prevState.counter + props.increment
        //     }
        //   })
        
        // 由于 setState() 是异步操作，所以，如果想立即获取修改后的state
        // 需要在回调函数中获取
        // this.setState({
        //     count:this.state.count+1
        // },function(){
        //     console.log("現在的count="+this.state.count)
        // })
    }

    handleBtnClick(arg1, arg2) {
        this.setState({
            msg: '点击事件修改state的值' + arg1 + arg2
        })
    }

    render() {
        return (
            <div>
                <Recommend></Recommend>
                <Newest></Newest>
                {/* 帖子列表：
            <ul>
                    {this.state.posts.map(item =>
                        <PostItem
                            key={item.id}
                            post={item}
                            onVote={this.handleVote}
                        >
                        </PostItem>
                    )}
                </ul>
                <div>测试点击增加：</div>
                <div>
                    <button onClick={this.addtest}>{this.state.count}</button>
                </div>

                <div>
                    <button onClick={
                        // 无参数
                        // this.handleBtnClick.bind(this)

                        // 有参数
                        this.handleBtnClick.bind(this, 'abc', [1, 2])
                    }>事件中this的处理</button>
                    <input type="button" value="在构造函数中绑定this并传参" onClick={
                        () => { this.handleBtnClick('参数1', '参数2') }
                    } />
                    <p>{this.state.msg}</p>

                </div> */}
            </div>

        );
    }
}

export default PostList;