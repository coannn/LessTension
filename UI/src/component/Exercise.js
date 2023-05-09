import React, {useState} from "react";
import Footer from "./pieces/Footer";
import Navigation from "./pieces/Navigation";
import Button from "./pieces/Button";
import DropdownSec from "./pieces/DropdownSec";
import Textbox from "./pieces/Textbox";
import { useAuth } from "../authentication/AuthContext";
import TableExerciseCounts from "./pieces/TableExerciseCounts";
import { Alert } from "react-bootstrap";

const exerciseTypeList = [
    {id: 1, value: "Walking"}, 
    {id: 2, value: "Running"}, 
    {id: 3, value: "Treadmill"}, 
    {id: 4, value: "Hiking"}, 
    {id: 5, value: "Swimming"},
    {id: 6, value: "Ball Games"},
    {id: 7, value: "Others"}
]

function Exercise(){    
    const [exercise_type, setType] =useState('Walking'); 
    const [other, setOther] =useState(''); 
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [calories, setCal] = useState('');


    let disable = false

    const { currentUser } = useAuth();
    console.log(currentUser);

    function getDatafromChildDropExerciseType(val){
        console.log(val);
        if( val ==='Walking'){
            setType('Walking');
        } else if(val ==='Running'){
            setType('Running');
        } else if(val ==='Treadmill'){
            setType('Treadmill');
        } else if(val ==='Hiking'){
            setType('Hiking');
        } else if(val === 'Swimming'){
            setType('Swimming');
        } else if(val === 'Ball Games'){
            setType('Ball Games')
        } else{
            setType('Others')
        }
    }

    function getDatafromChildDate(val){
        console.log(val);
        setDate(val);
    }
    
    function getDatafromChildTime(val){
        console.log(val);
        setTime(val);
    }

    function getDatafromChildOthers(val){
        console.log(val);
        setOther(val);
    }

    function getDatafromChildCal(val){
        console.log(val);
        setCal(val);
    }

    function handleSubmit(event) {
        console.log(exercise_type)
        let correct = true;
        if(exercise_type===''){
            alert('select a exercise type')
            correct = false
        } else {
            if(date === ''){
                alert('enter a date')
                correct = false
            } else {
                if (time ===''){
                    alert('enter a workout time length')
                    correct = false
                } else {
                    if (calories ==='') {
                        alert ('enter calories')
                    }
                }
            }
        }
        if(exercise_type==='Others'){
            setType(other)
            correct = false
        }

        correct && Fetch();
        event.preventDefault();    
        window.location.reload();
    }


    function Fetch(){
        fetch("http://localhost:8000/hypertension/exercise_post/",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({

            exercise_type,
            date,
            'email': currentUser.email,
            time,
            calories
        })
    })
    .then(res => res.json())
    .then(data => 
        {   
            //console.log(data.data[0]);
            alert('Your exercise has been recorded!');
        })
    .catch(error => console.log({error}))
    }

    return (
        <div>
            <Navigation />
            <div className="left-container">
            <form action="" method="post" onSubmit={handleSubmit}>
            <Textbox sendData={getDatafromChildDate} type="date" name="Date" />
            <DropdownSec sendData={getDatafromChildDropExerciseType} name="Exercise Type"  itemList = {exerciseTypeList}/>

            {(exercise_type==="Others") &&
            <div>
            <div><Textbox sendData={getDatafromChildOthers} name="Exercise Name" /></div>
            </div>
            }
            <Textbox sendData={getDatafromChildTime} type="number" name="Length (hr)" />
            <Textbox sendData={getDatafromChildCal} type="number" name="Calories (kcal)" />

            <br></br>
            <Button type= "submit" name="Save Exercise"  disabled={disable}/>
            </form>
            
            </div>
            <div className="table">
                <TableExerciseCounts />
            </div>
            <Footer />
        </div>
    )
}

export default Exercise;