import React from "react";
import "./imagedec2.css"

function Imagedec2 (prop) {
    return <div className="imagedec2div">
    <img alt={prop.alte} src={prop.sorc} />
    <div className="image2dec"></div>
    </div>
}


export default Imagedec2