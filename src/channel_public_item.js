import React, { Component } from 'react';
import "./channel_public_item.css"


class channel_public_item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

    }

    render() {
        const {channel_detail} = this.props
        console.log(channel_detail)
        return (
            <div className="channel_detail">
               <img src={channel_detail.thumb}></img>
               <div><span>{channel_detail.name}</span></div>
            </div>

        )
    }
}



export default channel_public_item