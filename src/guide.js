import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import "./guide.css"
class Guide extends Component {
     constructor(props){
         super(props)
         this.state = {
            currentIndex: 0,
            
        };
        this.handleClick = this.handleClick.bind(this)
     }
     //问题是每次组件更新时，您都会在没有任何中断条件的情况下再次更新它。这会产生无限循环。this.state.currentIndex在更新之前，您应检查是否为真：
     handleClick(objectid) {
        console.log(objectid)
            this.setState({
                currentIndex: objectid
            })
    }
    render(){
        var guides=[
            {
                name:'推荐音乐',
                link:'/abc',
            },
            {
                name:'热歌榜',
                link:'/hot',
            },
            {
                name:'主播电台',
                link:'/'
            },
            {
                name:'搜索',
                link:'/topics',
            }
        ]
        let list = guides.map((item,index) =>{
            var guidestyle = index === this.state.currentIndex?'active':null;
            return(
                <div className = {guides}>
                    <div key={item.name} onClick={()=>this.handleClick(index)}>
                        <Link to = {item.link} className={guidestyle} >
                            <span>{item.name}</span>
                        </Link>
                    </div>

            </div>
            )
        }
          )
        return (
            <div className = "guides">
                {list}
            </div>  
        )
    }
}


export default Guide;