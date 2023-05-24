import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import HeaderImage from "./HeaderImage.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

function App() {
    return(
        <div className="main-container">
            <HeaderImage />
            <Main />
            <Footer />
        </div>
    )
}

export default App