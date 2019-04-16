import React, { Component } from "react";
import "./Billboard.css"
import on from "./images/on.png"
import { get } from "./utils/request";
import { baseurl, appkey } from "./utils/request"
import SongItem from "./SongItem"

class Billboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: []
        }
    }
    componentDidMount() {
        get(baseurl+"/musicRankings").then(data => {
            this.setState({
                songs: data.result
            })
        })
    }
    render() {
        const { hotmusic } = this.props;
        let headerstyle = [{
            background: 'linear-gradient(#4f99e1,#6293e8)'
        }, {
            background: 'linear-gradient(#159ab4,#57c9c2)'
        }, {
            background: 'linear-gradient(#d14770,#ec5482)'
        }, {
            background: 'linear-gradient(#bc4632,#d37b57)'
        },  {
            background: 'linear-gradient(#ef6ca2,#ee7aab)'
        },{
            background: 'linear-gradient(#904cc9,#a04ecf)'
        }
        ]
        let songs = this.state.songs
        let count = 1

        return (
            <div className="hotitem">
                <div className="hotheader" style={headerstyle[hotmusic.id - 1]}>
                    <div className="hotname">
                        <div><span className="firstname">{hotmusic.name.slice(0, 1)}</span></div>
                        <div>
                            <div>
                                <span className="secondname">{hotmusic.name.slice(1, hotmusic.name.length)}</span>
                                <div className="updatetime">{hotmusic.updatetime}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={on}></img>
                    </div>
                </div>
                <div className="song">
                    {songs.map((item, index) => {
                        if (item.name === hotmusic.name) {
                            return (
                                item.content.map((item1, index) =>
                                    <SongItem songs={item1} key={index} count={count++}></SongItem>
                                )
                            )
                        }
                    }

                    )}
                </div>

                <div className="checkall">
                    <span>查看全部></span>
                </div>
            </div>

        )
    }


}

export default Billboard