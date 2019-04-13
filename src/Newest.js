import React,{Component} from "react";
import NewItem from "./NewItem";
import Toolbar from "./Toolbar"
import "./Newest.css"

class Newest extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [{
                title: "蜂鸟",
                srcitem: "./images/new1.png",
                id:1,
                author:"吴青峰",
                time:'05:11',
                count:233
            },
            {
                title: "别让我走远",
                tip:"（电视剧《我们与恶的距离》主题曲）",
                author:"林宥嘉",
                srcitem: "./images/new2.png",
                id:2,
                time:'03:19',
                count:412
            },
            {
                title: "小丑",
                author:"朱星杰",
                srcitem: "./images/new3.png",
                id:3,
                time:'04:23',
                count:77
            },
            {
                title: "就喜欢你",
                author:"董又霖",
                srcitem: "./images/new4.png",
                id:4,
                time:'01:59',
                count:52
            },
            {
                title: "今天的你又害得我小路乱撞了",
                author:"adan",
                srcitem: "./images/new5.png",
                id:5,
                time:'03:44',
                count:85
            },
            {
                title: "错过",
                tip:"（Transient Love）",
                author:"蔡佩轩",
                srcitem: "./images/new6.png",
                id:6,
                time:'02:14',
                count:99
            }
        ]
        };
        this.handleVote = this.handleVote.bind(this);
    }
    componentWillMount(){
        const news = this.state.news.map(item => {
            //0代表未点赞，1代表已点赞
            const newItem = { ...item,imgsrc:"zan",zan:0}
            return newItem;
        });
        this.setState({
            news
        });
    }
    handleVote(id) {
        console.log(id)
        console.log(this.state.news)
        const news = this.state.news.map(item => {
            let newItem 
            if(item.zan==0){
                newItem = item.id === id ? { ...item, count: ++item.count,imgsrc:"havezan",zan:1} : item;
            }
            else{
                newItem = item.id === id ? { ...item, count: --item.count,imgsrc:"zan",zan:0} : item;
            }
            
            console.log(newItem)
            return newItem;
        });
        this.setState({
            news
        });
    }
    render(){
        let name = '最新音乐'
        return(
            <div className="newest">
            <Toolbar name={name}></Toolbar>
                {this.state.news.map((item)=>
                    <NewItem newitem = {item} key = {item.id} onVote={this.handleVote}></NewItem>)}
            </div>
        )
    }
}

export default Newest;