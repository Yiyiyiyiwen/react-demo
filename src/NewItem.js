import React from "react";
import "./NewItem.css";
import like from "./images/zan.png"
import { Link } from "react-router-dom";

function NewItem(props) {
    const handlelike = () => {
        props.onVote(props.newitem.id);
    };

    const playmusic = () => {
        console.log("123")
    };

    const { newitem } = props
    return (
        <div className="newitem">
            <div className={["newmusic", newitem.id % 2 == 0 ? "newactive" : null].join(' ')}>
                <div className="newcontent">
                    {newitem.id < 10 ? '0' : null}
                    <span>{newitem.id}</span>
                </div>
                <div className="newcontent">
                    <img src={require("./images/new" + newitem.id + ".png")}></img>
                </div>
                <div className="newcontent">
                    <div className="newtitle">{newitem.title}
                        {newitem.tip ? <span className="tip">{newitem.tip}</span> : null}
                    </div>
                    <div>{newitem.author}</div>
                </div>

                <div className="time">
                    <span>{newitem.time}</span>
                </div>
            </div>

            <div className="dianzan">
                <img src={require("./images/" + newitem.imgsrc + ".png")} onClick={handlelike}></img>
                {newitem.count}
            </div>
        </div>

    )
}

export default NewItem;