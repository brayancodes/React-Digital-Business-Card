import React from "react"
import ReactDOM from "react-dom"
import headshot from "./images/image_business.jpeg"

import "./index.css"

function HeaderImage() {
    return (
        <div className="image-box">
            <img src={headshot}/>
        </div>
    )
}

export default HeaderImage