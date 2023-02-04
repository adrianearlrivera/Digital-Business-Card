import React from "react"
import ReactDOM from "react-dom"
import "../style.css"

import profile_img from '../imgs/pic.jpg';

import Info from "./Info";
import Buttons from "./Buttons";
export default function App () {
    return (
        <div class="background">
            <div class = "container">
                <img src = {profile_img}alt = 'person'/> 
                <Info/>
                <Buttons/>
            </div>
        </div>
    )
}

