import React, {useState, useEffect} from "react";
import heart from '../../image/heart.png'; 
import Navigation from './Navigation';

function Nav(props){
    return (
        
        <div>
            <Navigation />

            <div class="row row-welcome">
                <div class="col-lg-6">
                    <h1 class="title">Hello, {props.fname} {props.lname} ({props.nickName})!</h1>
                    <h1 class="title1">Keep good health with LessTension</h1>
                </div>
                
                <div class="col-lg-6">
                    <img class="heartimg" src={heart} alt="heartpng"></img>
                </div>
            </div>
        </div>
       
    )
}

export default Nav;