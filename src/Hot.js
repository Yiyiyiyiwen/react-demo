import React,{Component}  from "react";
import Billboard from "./Billboard"
import "./hot.css"
class Hot extends Component{

    constructor(props){
        super(props);
        this.state = {
            hot: [{
                id: 1,
                name:"热歌榜",
                updatetime:"4月14日",
            },
            {
                id: 2,
                name:"新歌榜",
                updatetime:"4月15日"
            },
            {
                id: 3,
                name:"网络歌曲榜",
                updatetime:"4月14日"
            },
            {
                id: 4,
                name:"影视金曲榜",
                updatetime:"4月16日",
            },
            {
                id: 5,
                name:"经典老歌榜",
                updatetime:"4月16日"
            },
            {
                id: 6,
                name:"欧美金曲榜",
                updatetime:"4月18日"
            }]
        };
    }


   render(){
    let list = this.state.hot.map((item,index)=>
     <Billboard hotmusic = {item} key={index}></Billboard>
    )
       return(
           <div className="myhot">
               {list}
           </div>
       )
   }
}

export default Hot