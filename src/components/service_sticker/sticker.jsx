import React from "react";
import "./sticker.css"

function Sticker (props) {
    return <div className="sticker_div">
    <h1>{props.sticker}</h1>
    <i className={props.icon_class}></i>
    </div>
}

export default Sticker