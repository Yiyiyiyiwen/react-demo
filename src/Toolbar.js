import React  from "react";
import "./Toolbar.css"

function Toolbar(props){
    const {name} = props;
    return(
        <div className="toolbar">
            <div className="line"></div>
            <div className="name">{name}</div>
        </div>
        
    )
}

export default Toolbar