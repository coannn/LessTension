import React, {useState} from "react";
import Footer from "./pieces/Footer";
import Navigation from "./pieces/Navigation";
import Button from "./pieces/Button";
import DropdownSec from "./pieces/DropdownSec";
import Textbox from "./pieces/Textbox";
import { useAuth } from "../authentication/AuthContext";
import TableFoodCounts from "./pieces/TableFoodCounts";
import FoodTotal from "./pieces/FoodTotal";
import { Alert } from "react-bootstrap";

const foodTypeList = [
    {id: 1, value: "Apple", cal: 34}, 
    {id: 2, value: "Banana", cal: 89}, 
    {id: 3, value: "Cereal", cal: 379}, 
    {id: 4, value: "Chicken Breast", cal:165}, 
    {id: 5, value: "Beef Steak", cal:134},
    {id: 6, value: "Broccoli", cal: 34},
    {id: 7, value: "Salmon", cal:206 }
]
function Food(){
    const [food, setFood] =useState('Apple'); 
    const [weight, setW] = useState('');
    const [date, setDate] = useState('');
    const [calories, setCal] = useState('');
    let disable = false

    const { currentUser } = useAuth();
    console.log(currentUser);

    function getDatafromChildDropFood(val){
        console.log(val);
        var cal;
        if( val ==='Apple'){
            setFood('Apple');
            cal = foodTypeList[0].cal;
        } else if(val ==='Banana'){
            setFood('Banana');
            cal = foodTypeList[1].cal;
        } else if(val ==='Cereal'){
            setFood('Cereal');
            cal = foodTypeList[2].cal;
        } else if(val ==='Chicken Breast'){
            setFood('Chicken Breast');
            cal = foodTypeList[3].cal;
        } else if(val === 'Beef Steak'){
            setFood('Beef Steak');
            cal = foodTypeList[4].cal;
        } else if(val === 'Broccoli'){
            setFood('Broccoli')
            cal = foodTypeList[5].cal;
        } else{
            setFood('Salmon')
            cal = foodTypeList[6].cal;
        }

        if(weight){
            setCal(weight/100*cal);
        }
    }

    function getDatafromChildDate(val){
        console.log(val);
        setDate(val);
    }
    
    function getDatafromChildWeight(val){
        console.log(val);
        setW(val);
        var cal;
        if(food){
            if( food ==='Apple'){
                cal = foodTypeList[0].cal;
            } else if(food ==='Banana'){
                cal = foodTypeList[1].cal;
            } else if(food ==='Cereal'){
                cal = foodTypeList[2].cal;
            } else if(food ==='Chicken Breast'){
                cal = foodTypeList[3].cal;
            } else if(food === 'Beef Steak'){
                cal = foodTypeList[4].cal;
            } else if(food === 'Broccoli'){
                cal = foodTypeList[5].cal;
            } else{
                cal = foodTypeList[6].cal;
            }
            console.log(val/100.0*cal);
            setCal(val/100*cal);
        }
        return true;
    }

    function getDatafromChildCal(){
        var cal;       
        if( food ==='Apple'){
            cal = foodTypeList[0].cal;
        } else if(food ==='Banana'){
            cal = foodTypeList[1].cal;
        } else if(food ==='Cereal'){
            cal = foodTypeList[2].cal;
        } else if(food ==='Chicken Breast'){
            cal = foodTypeList[3].cal;
        } else if(food === 'Beef Steak'){
            cal = foodTypeList[4].cal;
        } else if(food === 'Broccoli'){
            cal = foodTypeList[5].cal;
        } else{
            cal = foodTypeList[6].cal;
        }
        console.log(weight/100.0*cal);
        setCal(weight/100.0*cal);
        return true;
    }

    function handleSubmit(event) {
        console.log(food)
        let correct = true;
        if(food===''){
            alert('select a food type')
            correct = false
        } else {
            if(date === ''){
                alert('enter a date')
                correct = false
            } else {
                if (weight ===''){
                    alert('enter food weight')
                    correct = false
                } else {
                    if (calories ==='') {
                        alert ('enter calories')
                        correct = false
                    }
                }

            }
        }
        correct && Fetch();
        event.preventDefault();    
        window.location.reload();
    }


    function Fetch(){
        fetch("http://localhost:8000/hypertension/food_post/",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            food,
            date,
            'email': currentUser.email,
            weight,
            calories
        })
    })
    .then(res => res.json())
    .then(data => 
        {   
            //console.log(data);
            alert('Your food has been recorded!');
        })
    .catch(error => console.log({error}))
    }

    return (
        <div>
            <Navigation />
            <div className="left-container">
                <form action="" method="post" onSubmit={handleSubmit}>
                <Textbox sendData={getDatafromChildDate} type="date" name="Date" />
                <DropdownSec sendData={getDatafromChildDropFood} name="Food Type"  itemList = {foodTypeList}/>

                <Textbox sendData={getDatafromChildWeight} type="number" name="Weight (g)" />
                
                {getDatafromChildCal}
                <br></br>
                {(food) && (weight) && <p> Calories :  {calories} kcal</p>}

                <br></br>
                <Button type= "submit" name="Save Food"  disabled={disable}/>
                </form>            
            </div>
            <FoodTotal />

            <div className="table">
                <TableFoodCounts />
            </div>
            <Footer />
        </div>        
    )
}
export default Food;