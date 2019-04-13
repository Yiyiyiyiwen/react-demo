import React from "react";
import "./RecomItem.css"
import rec1 from "./images/rec1.png"
import listen from"./images/listen.png"

function RecomItem(props) {
    const {rec} = props;
    const myimage = {
      // backgroundImage: 'url(' + rec.srcitem + ')'
      backgroundImage :`url("${rec1}")`
    }

    return (
        <div className="recitem">
            <img src={require("./images/rec"+rec.id+".png")}></img>
            <span>{rec.title}</span>
            {rec.count? <div className="listen">
                <div className="listenimg"><img src={listen}/></div>
                <div><span>{rec.count}万</span></div>
            </div>:null}
           
        </div>

    )
}

export default RecomItem