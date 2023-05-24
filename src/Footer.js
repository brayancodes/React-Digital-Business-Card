import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import facebook from "./images/Facebook Icon.png"
import github from "./images/GitHub Icon.png"
import instagram from "./images/Instagram Icon.png"
import linkedin from "./images/Linkedin Icon.png"
import twitter from "./images/Twitter Icon.png"


function Footer() {
    return (
        <div className="the-footer">
            <img src={facebook}/>
            <img src={github}/>
            <img src={instagram}/>
            <img src={linkedin}/>
            <img src={twitter}/>
        </div>
    )
}

export default Footer