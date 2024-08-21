import React from "react";
import "./content.css"

function Content (prop) {
    return <div className="contentdiv">
        <h3>{prop.heading}</h3>
        <hr/>
        {prop.body.map(function (paragraph, i) {
            return <p> {paragraph}</p>
        })}

    </div>

}

export default Content