import React from "react"
import ReactDOM from "react-dom"
import "../style.css"

import profile_img from '../imgs/pic.jpg';

import Info from "./Info";
import Buttons from "./Buttons";
import Background  from "./Background";
export default function App () {
    return (
        <div class="background">
            <div class = "container">
                <img src = {profile_img}alt = 'person'/> 
                <Info/>
                <Buttons/>
                <Background/>
                <footer>
                    <p>Made By Adrian Rivera</p>
                </footer>
            </div>
        </div>
    )
}

