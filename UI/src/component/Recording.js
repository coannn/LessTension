import React, {useState} from "react";
import Navigation from "./pieces/Navigation";
import Footer from "./pieces/Footer";
import TableItemCounts from "./pieces/TableItemCounts";
import Textbox from "./pieces/Textbox";
import Button from "./pieces/Button";
import { useAuth } from "../authentication/AuthContext";



function Recording(){
    const [date, setDate] = useState('');
    const [SPress, setSPress] = useState('');
    const [DPress, setDPress] = useState('');

    const { currentUser } = useAuth();
    console.log(currentUser);

    function getDatafromChildDate(val){
        console.log(val);
        setDate(val);
    }

    function getDatafromChildSPress(val){
        console.log(val);
        setSPress(val);
    }

    function getDatafromChildDPress(val){
        console.log(val);
        setDPress(val);
    }
    let dateformat = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])) ([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]/;
    function handleSubmit(event) {
        let correct = true;
        if(date === ''){
            alert('Please enter datetime as YYYY-MM-DD HH:MM:SS')
            correct = false
        } 
        correct && Fetch();
        event.preventDefault();  
        window.location.reload(); 
    }


    function Fetch(){
        fetch("http://localhost:8000/hypertension/recording_post/",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'email': currentUser.email,
            date,
            SPress,
            DPress
        })
    })
    .then(res => res.json())
    .then(data => 
        {   
            console.log(data.data[0]);
            alert('Recording saved!');
        })
    .catch(error => console.log({error}))
    }

    return (
        <div>
            <Navigation />
            <br></br>
            <h2> Blood Pressure Recording </h2>
            <form action="" method="post" onSubmit={handleSubmit}>
            <Textbox sendData={getDatafromChildDate} type="text" name="Date" />
            <Textbox sendData={getDatafromChildSPress} type="number" name="Systolic Blood Pressure" />
            <Textbox sendData={getDatafromChildDPress} type="number" name="Diastolic Blood Pressure" />
            <br></br>
            <Button type= "submit" name="Submit Recording" />
            </form>
            <div className="table">
                <TableItemCounts />
            </div>
            <Footer />
        </div>
        
    )
}

export default Recording;