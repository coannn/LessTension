import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBicycle, faBurger} from '@fortawesome/free-solid-svg-icons'

function Box(props){
    
    return (
        <section class="container">
            <div class="row">
                <div class="col p-3">
                    <div class="custom-card-gray"><FontAwesomeIcon className ="icon" icon={faBell} />
                        <h4>Upcoming Appointment</h4>
                        {props.apt}
                    </div>
                </div>
                <div class="col p-3">
                    <div class="custom-card-gray"><FontAwesomeIcon className ="icon" icon={faBicycle} />
                        <h4>Exercise Calories Today</h4>
                        {props.exercise} kcal
                    </div>
                </div>
                <div class="col p-3">
                    <div class="custom-card-gray"><FontAwesomeIcon className="icon" icon={faBurger}/>
                        <h4>Food Calories Today</h4>
                        {props.food} kcal
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default Box;