import * as React from 'react';
import { useState, useEffect} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from "../../authentication/AuthContext";


function AptLatest() {
  
  const { currentUser } = useAuth();
  // console.log(currentUser);

  const [count, setCount] = useState([]) 
  
  const getCount = async() => {
    const response = await fetch("http://localhost:8000/hypertension/appointments_latest/" + currentUser.email);
    const data = await response.json();
    // console.log(data.data)
    setCount(data.data[0]);
    return count;
  }

  useEffect(()=>{
    getCount();
  },{})
  
  return (
    <div>    
      {  count ?
      <h2>Your upcoming appointment is {count.type} visit ({count.details}) at {count.Date}</h2>
      :
      <h2>No upcoming appointment</h2>
      }
    </div>
  );
}
export default AptLatest;