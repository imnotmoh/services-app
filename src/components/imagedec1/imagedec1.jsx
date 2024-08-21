import React from "react"
import "./imagedec1.css"

function Imagedec1 (prop){
    return <div className="imagedec1div">
    <div className="image1decdiv firstdec"> </div>
    <img src={prop.sorc} alt={prop.alte}/>
    <div className="image1decdiv secdec"> </div>
    </div>

}


export default Imagedec1