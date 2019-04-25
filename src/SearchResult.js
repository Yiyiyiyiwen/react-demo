import React, { Component } from "react"
import "./SearchBox.css"
import { get } from "./utils/request";
import { baseurl } from "./utils/request"
import like from "./images/like.png"
import Progress from "./Components/Progress.js"
import playmusicimg from "./images/playmusicimg.png"
import { Link } from "react-router-dom";

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    // componentWillReceiveProps() {
    //     //console.log("请求")
    //     get(baseurl + "/searchMusic?name=" + this.props.searchText).then(data => {
    //         this.setState({ loading: false, data: data.result });
    //     })
    // }

    render() {
        var data = this.props.data
        if (data) {
            return (
                <div>
                    <SearchResultList data={data} />
                </div>
            );

        }
        else {
            return (
                <div>尽情搜索歌曲扒〃'▽'〃)</div>
            );
        }
    }
}


class SearchResultList extends React.Component {
    render() {
        var text = '[by:Taynochan]\n[ti:不要说话]\n[ar:陈奕迅]\n[al:博儿Lrc试练]\n[by:博儿]\n[00:00.00] 作曲 : 小柯\n[00:01.00] 作词 : 小柯 　　\n[00:18.77]深色的海面布满白色的月光\n[00:24.51]\n[00:25.11]我出神望着海 心不知飞哪去\n[00:31.64]听到她在告诉你\n[00:35.28]说她真的喜欢你\n[00:39.48]我不知该 躲哪里\n[00:47.17]爱一个人是不是应该有默契\n[00:54.15]我以为你懂得每当我看着你\n[01:00.07]我藏起来的秘密\n[01:03.67]在每一天清晨里\n[01:07.60]暖成咖啡 安静的拿给你\n[01:14.33]愿意 用一支黑色的铅笔\n[01:18.81]画一出沉默舞台剧\n[01:22.95]灯光再亮 也抱住你\n[01:28.53]愿意 在角落唱沙哑的歌\n[01:33.06]再大声也都是给你\n[01:37.24]请用心听 不要说话\n[01:51.54]爱一个人是不是应该要默契\n[01:58.36]我以为你懂得每当我看着你\n[02:04.34]我藏起来的秘密\n[02:08.22]在每一天清晨里\n[02:11.47]暖成咖啡 安静的拿给你\n[02:18.49]愿意 用一支黑色的铅笔\n[02:22.92]画一出沉默舞台剧\n[02:27.31]灯光再亮 也抱住你\n[02:33.04]愿意 在角落唱沙哑的歌\n[02:37.33]再大声也都是给你\n[02:41.46]请用心听 不要说话\n[03:15.81]愿意 用一支黑色的铅笔\n[03:19.95]画一出沉默舞台剧\n[03:24.43]灯光再亮 也抱住你\n[03:29.82]愿意 在角落唱沙哑的歌\n[03:34.19]再大声也都是给你\n[03:38.48]请原谅我 不会说话\n[03:44.11]愿意 用一支黑色的铅笔\n[03:48.55]画一出沉默舞台剧\n[03:52.68]灯光再亮 也抱住你\n[03:58.35]愿意 在角落唱沙哑的歌\n[04:02.84]再大声也都是给你\n[04:06.97]爱是用心吗 不要说话\n[04:45.00]END\n'
        const resultItems = this.props.data;
        //console.log(random)
        const listItems = resultItems.map((item, index) => {
            const random = Math.random().toFixed(2)
            return (
                <div className={index % 2 == 0 ? "result_list result_active" : "result_list"}>
                    <div className="result_index">{index + 1}</div>
                    <div><img src={like}></img></div>
                    <div className="result_item result_title">{item.title}</div>
                    <Link to={
                        {
                            pathname: '/play',
                            state: {
                                text: text,
                                songurl: item.url,
                            }
                        }
                    }>
                        <img src={playmusicimg} width="50px" height="50px" className="playmusicimg" />
                    </Link>
                    <div className="result_item">{item.author}</div>
                    <div className="progressbar"><Progress allNum={10} percentageNum={random} progressName='小明' /></div>
                </div>
            )
        }

        );
        return (
            <div>
                <ul>{listItems}</ul>
            </div>


        );
    }

}

export default SearchResult