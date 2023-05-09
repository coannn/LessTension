import React, {useState} from "react";
import Navigation from "./pieces/Navigation";
import Footer from "./pieces/Footer";
import DropdownSec from "./pieces/DropdownSec";
import Textbox from "./pieces/Textbox";
import Button from "./pieces/Button";
import { useAuth } from "../authentication/AuthContext";
import TableAptCounts from "./pieces/TableAptCounts";
import moment from "moment";
import AptLatest from "./pieces/AptLatest";

const aptTypeList = [
    {id: 1, value: "Doctor"}, 
    {id: 2, value: "Lab"}, 
    {id: 3, value: "Nutritionist"}, 
    {id: 4, value: "Others"}
]

function Appointments(){    
    const [type, setType] =useState('Doctor'); 
    const [details, setD] = useState('');
    const [other, setOther] =useState(''); 
    const [dateTime, setDateTime] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    let disable = false

    const { currentUser } = useAuth();
    console.log(currentUser);

    function getDatafromChildDropType(val){
        console.log(val);
        if( val ==='Doctor'){
            setType('Doctor');
        } else if(val ==='Lab'){
            setType('Lab');
        } else if(val ==='Nutritionist'){
            setType('Nutritionist');
        } else{
            setType('Others')
        }
    }

    // function getDatafromChildDate(val){
    //     console.log(val);
    //     setDate(val);
    //     var momentObj = moment(date + time, 'YYYY-MM-DDLT');
    //     var dateTime1 = momentObj.format('YYYY-MM-DDTHH:mm:ss');
    //     console.log(dateTime1)
    //     setDateTime(dateTime1)
    // }
    function getDatafromChildDate(val){
        console.log(val);
        setDate(val);
    }
    function getDatafromChildHour(val){
        console.log(val);
        setTime(val);
        var momentObj = moment(date + time, 'YYYY-MM-DDLT');
        var dateTime1 = momentObj.format('YYYY-MM-DDTHH:mm:ss');
        console.log(dateTime1)
        setDateTime(dateTime1)
    }
    
    function getDatafromChildOthers(val){
        console.log(val);
        setOther(val);
    }
    
    function getDatafromChildDetails(val){
        console.log(val);
        setD(val);
    }

    function handleSubmit(event) {
        let correct = true;

        if(type===''){
            alert('select an appointment type')
            correct = false
        } else {
            if(date === ''){
                alert('enter a date')
                correct = false
            } else {
                if (details ===''){
                    alert('enter appointment details')
                    correct = false
                }
            }
        }
        if(type==='Others'){
            setType(other)
            correct = false
        }

        correct && Fetch();
        event.preventDefault();    
        window.location.reload();
    }


    function Fetch(){
        fetch("http://localhost:8000/hypertension/appointments_post/",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            type,
            date,
            'email': currentUser.email,
            details
        })
    })
    .then(res => res.json())
    .then(data => 
        {   
            //console.log(data);
            alert('Your appointment has been made!');
        })
    .catch(error => console.log({error}))
    }
    return (
        <div>
            <Navigation />

            <div className="left-container">
                {/* <form action="" method="post" onSubmit={handleSubmit}> */}
                <form action="" onSubmit={handleSubmit}>
                    <h1>Make an Appointment</h1>
                    <Textbox sendData={getDatafromChildDate} type="text" name="DateTime" />
                    {/* <Textbox sendData={getDatafromChildDate} type="date" name="Date" />
                    <Textbox sendData={getDatafromChildHour} type="time" name="Hour" /> */}
                    <DropdownSec sendData={getDatafromChildDropType} name="Appointment Type"  itemList = {aptTypeList}/>
                    {(type==="Others") &&
                        <div>
                        <div><Textbox sendData={getDatafromChildOthers} name="Other Type" /></div>
                        </div>
                    }
                    <Textbox sendData={getDatafromChildDetails} type="text" name="Details" />               
                    <br></br>
                    <Button type= "submit" name="Submit Appointment"  disabled={disable}/>
                </form>            
            </div>
            <AptLatest />
            <div className="table">
                <TableAptCounts />
            </div>
            <Footer />
        </div>
    )
}

export default Appointments;