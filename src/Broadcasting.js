import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Toolbar from "./Toolbar"
import "./Broadcasting.css"
import { get } from "./utils/request";
import { baseurl } from "./utils/request"
import Channel_public_item from "./channel_public_item"

class Broadcasting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels_public: [
                {
                    name: '推荐频道'
                },
                {
                    name: '时光频道'
                },
                {
                    name: '风格频道'
                },
                {
                    name: '心情频道'
                },
                {
                    name: '语种频道'
                }
            ],
            channels_public_details: []
        }
    }

    componentDidMount() {
        get(baseurl + "/musicBroadcasting").then(data => {
            this.setState({
                channels_public_details: data.result
            })

        })
    }

    render() {
        let name1 = '公共频道'
        let name2 = '音乐人频道'
        const channels_public = this.state.channels_public
        const channels_public_details = this.state.channels_public_details

        console.log(channels_public_details)
        return (
            <div className="reccontainer">
                <Toolbar name={name1} />
                {channels_public.map((item, index) =>
                    <div>
                        <div className="channel_title">{item.name}</div>
                        <div className="channel_line"></div>
                        <div className="Channel_public_item">
                            {channels_public_details.map((item_public, index) => {
                                if (item_public.title === name1) {
                                    return (
                                        item_public.channellist.map((channellist, index) => {
                                            if (channellist.cate_sname == item.name) {
                                                console.log(channellist)
                                                return (
                                                    <Channel_public_item channel_detail={channellist} key={channellist.ch_name}></Channel_public_item>
                                                )
                                            }
                                        }
                                        )
                                    )
                                }

                            }

                            )}
                        </div>
                    </div>

                )}
                <Toolbar name={name2} />
            </div>

        )
    }
}



export default Broadcasting