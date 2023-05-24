import React from "react"
import ReactDOM from "react-dom"

import "./index.css"

function Main() {
    return (
        <div className="main-content">
            <div className="my-name">Brayan Rodriguez</div>
            <div className="job-title">React Engineer</div>
            <a href="https://github.com/brayancodes?tab=repositories" className="website">Check out my Github!</a>
            <button type="button" className="email-button">
                <a href="https://www.google.com/">Email</a>
            </button>
            <div className="the-wording">
                <h1>About Me</h1>
                <p className="my-about">I am a front end developer with a focus in React software development. I would
                 love to learn development for mobile platforms. As well as expand my skillset to ecompass the whole stack.
                </p>
                <h1 className="title-for-my-interests">My Interests</h1>
                <p className="my-interests">
                    I love spending time outdoors. I enjoy fishing, hiking, camping, and spending time with friends
                     and family.
                </p>
            </div>
        </div>
    )
}

export default Main