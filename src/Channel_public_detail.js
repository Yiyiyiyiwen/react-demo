import React, { Component } from "react";
import "./Channel_public_detail.css"
import collect from "./images/collect.png"
import share from "./images/share.png"
import play from "./images/play.png"
import {
    BrowserRouter as Router,
    Route,
    NavLink as Link
} from 'react-router-dom'
import { get } from "./utils/request";
import { baseurl } from "./utils/request"

class Channel_public_detail extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        //console.log(this.props.location.state.channellist)
        const channellist = this.props.location.state.channellist
        const channel_name = this.props.location.state.channel_name

        return (
            <div className="channel_detail">
                {/* header */}
                <div className="channel_detail_header">
                    <div className="header_img">
                        <img src={channellist.thumb}></img>
                    </div>
                    <div className="header_infor">
                        <div className="header_name">
                            <span className="dt">电台</span>
                            <span className="channellist_name">{channellist.name}</span>
                        </div>

                        <div className="channel_button">
                            <div className="button_item">
                                <img src={collect}></img>
                                <span>订阅</span>
                                <span>({channellist.channelid})</span>
                            </div>
                            <div className="button_item">
                                <img src={play}></img>
                                <span>播放全部</span>
                            </div>
                            <div className="button_item">
                                <img src={share}></img>
                                <span>分享</span>
                                <span>({channellist.channelid})</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="channel_detail_content">
                    <Link exact to={
                        {
                            pathname: this.props.match.url,
                            state: {
                                channel_name: channel_name,
                                channellist:channellist,
                            }
                        }
                    } className="unactive" activeClassName="channel_selected" >
                        <div className="channel_detail_content_item">
                            <span>节目列表</span>
                        </div>

                    </Link>
                    <Link to={{
                        pathname:this.props.match.url+'/subscribe',
                        state: {
                            channel_name: channel_name,
                            channellist:channellist
                        }
                    }} activeClassName="channel_selected" className="unactive">
                        <div className="channel_detail_content_item">
                            <span>订阅者</span>
                        </div>

                    </Link>
                </div>
                <div className="channel_detail_line"></div>

                <Route exact path={this.props.match.url} component={Channel_list} />
                <Route path={`${this.props.match.url}/:id`} render={() => (
                    <h3>订阅者</h3>
                )} />
            </div>
        )
    }
}

class Channel_list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songlist: [],
            count: 0
        };
    }

    componentDidMount() {
        const channel_name = this.props.location.state.channel_name
        get(baseurl + "/musicBroadcastingDetails?channelname=" + channel_name).then(data => {
            console.log(data.result.songlist)
            const count = Object.keys(data.result.songlist).length
            this.setState({
                songlist: data.result.songlist,
                count: count
            })
            console.log(this.state.count)
        })
    }
    render() {
        const songlist = this.state.songlist
        return (
            <div>
                <h5>共{this.state.count}期</h5>
                <div className="songlists">
                    {songlist.map((item, index) => {
                        if (item.title != null) {
                            return (
                                <div className={index % 2 == 1 ? "songlist_item channel_active" : "songlist_item"}>
                                    <div className="songlist_detail">
                                        <div className="songcount">{index + 1}</div>
                                        <div><img src={item.thumb}></img></div>
                                        <div>{item.title}</div>
                                    </div>
                                    <div className="songlist_infor">
                                        <div className="infor_item">播放：{item.songid}</div>
                                        <div className="infor_item">赞:{item.songid}</div>
                                        <div className="infor_item">{item.artist}</div>
                                    </div>
                                </div>
                            )
                        }

                    }

                    )}
                </div>

            </div>

        )
    }
}


export default Channel_public_detail