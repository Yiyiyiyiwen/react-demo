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
                            pathname:'/play',
                            state:{
                                text:item.lrc,
                                songurl:item.url
                            }
                        }
                    }>
                        <img src={playmusicimg} width="50px" height="50px" className="playmusicimg"/>
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