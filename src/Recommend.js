import React, { Component } from "react";
import RecomItem from "./RecomItem";
import Toolbar from "./Toolbar"
import "./Recommend.css"

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                title: "每日歌曲推荐",
                srcitem: "./images/rec1.png",
                id:1
            },
            {
                title: "【万评电音】抬头，已是一片星海",
                srcitem: "./images/rec2.png",
                id:2,
                count:322
            },
            {
                title: "100首工作看书刷题纯音乐",
                srcitem: "./images/rec3.png",
                id:3,
                count:56
            },{
                title: "精选|网络热歌分享",
                srcitem: "./images/rec4.png",
                id:4,
                count:5053
            },
            {
                title: "竞技比赛集锦",
                srcitem: "./images/rec5.png",
                id:5,
                count:285
            },
            {
                title: "耳熟的翻唱合集",
                srcitem: "./images/rec6.png",
                id:6,
                count:873
            }]
        };

    }

    render() {
        let name = '推荐歌单'
        let list = this.state.posts.map((item) => 
            <RecomItem rec = {item}></RecomItem>
        )
        return (
            <div className="reccontainer">
                <Toolbar name={name} />
                <div className="recommend">
                {list}
                </div>
            </div>

        )
    }
}


export default Recommend