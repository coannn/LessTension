import React from "react"; 
import "@popperjs/core";
import { useNavigate } from 'react-router-dom';
import Button from "./Button";
import { useAuth } from "../../authentication/AuthContext";

function Navigation(){
    const navigate = useNavigate();
    const { setCurrentUser } = useAuth();

    function log_out(){
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        navigate('/Login');
    }

    return (
        <div className="navbartop">
        <nav class="navbar navbar-expand-lg navbar-dark bg" >
            <a class="navbar-brand" href="/">LessTension</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarTogglerDemo01">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">            
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/Appointments" >Appointments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Recording" >Recording</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Exercise" >Exercise</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Food" >Food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onClick={log_out}>Logout</a>
                    </li>
                    {/* <Button name='Logout' onClick={log_out} /> */}
                </ul>
                </div>
        </nav>
        </div>

    )
    }

export default Navigation;