import React, { Component } from 'react';
import "./channel_public_item.css"


class channel_public_item extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const { channel_detail, type } = this.props
        //console.log(channel_detail)
        return (
            <div className={type>1?'channel_people':'channel_detail'}>
                {type > 1 ?
                    <div className="channel_people">
                        <img src={channel_detail.avatar}></img>
                        <div>{channel_detail.name}</div>
                    </div>
                    :
                    <div>
                        <img src={channel_detail.thumb}></img>
                        <div><span>{channel_detail.name}</span></div>
                    </div>
                }
            </div>



        )
    }
}



export default channel_public_item