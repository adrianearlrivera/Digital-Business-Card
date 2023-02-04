
import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

import App from "./Components/App"
function Main () {
    return (
        <div>
            <App/>
        </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Main())