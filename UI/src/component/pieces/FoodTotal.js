import * as React from 'react';
import { useState, useEffect} from "react"
import { useAuth } from "../../authentication/AuthContext";


function FoodTotal() {
  
  const { currentUser } = useAuth();
  // console.log(currentUser);

  const [count, setCount] = useState([]) 
  
  const getCount = async() => {
    const response = await fetch("http://localhost:8000/hypertension/food_total/" + currentUser.email);
    const data = await response.json();
    console.log(data.data)
    if(data != undefined ){
      setCount(data.data[0].totalcal);
    } else {
      setCount(0);
    }
    return count;
  }

  useEffect(()=>{
    getCount();
  },{})
  
const divStyle = {
width:'+count/20+"%'
}
  return (
    <div class ="paddingprogress">
      <h1>Total Calories Eaten Today: {count} kcal. </h1>  
    <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" style={divStyle}>
    {count/20}%
  </div>

</div>
      
  <p>Recommended daily calories for Women: 2000 kcal Men: 2500 kcal</p>
  </div>
  );
}
export default FoodTotal;