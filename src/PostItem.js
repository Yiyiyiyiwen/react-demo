import React from "react";
import like from "./images/zan.png"
import "./css/style.css"

function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id);
    };
    var book = [
        {
            name: '姓名1',
            age: 1
        },
        {
            name:'姓名2',
            age: 2
        }
    ]
    
    //var post  = props.post
    const { post } = props;
  /*
  es6语法的对象的解构赋值，例如：
let obj = {a:1,b:2,c:3};
const {b} = obj;
console.log(b)
=>2
这里的obj就相当于props */

    return (
        <li>
            <div>
                {post.title}
            </div>
            <div>
                创建人：<span>{post.author}</span>
            </div>
            <div>
                创建时间：<span>{post.date}</span>
            </div>
            <div>
                <span><img src={like} onClick={handleClick} className='like'></img></span>
                <span>
                    {post.vote}
                </span>
            </div>
            <div>
                {
                    book.map((item, index) => {
                        return (
                            <div key={index}>
                               {item.name} 
                               {item.age}
                            </div>
                        )
                    })
                }
            </div>

        </li>
    );
}
export default PostItem;
