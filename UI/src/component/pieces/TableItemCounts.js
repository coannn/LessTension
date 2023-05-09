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


function TableItemCounts() {
  
  const { currentUser } = useAuth();
  // console.log(currentUser);

  const [count, setCount] = useState([]) 
  
  const getCount = async() => {
    const response = await fetch("http://localhost:8000/hypertension/recording/" + currentUser.email);
    const data = await response.json();
    //console.log(data.data[0])
    setCount(data.data);
    return count;
  }

  useEffect(()=>{
    getCount();
  },{})
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>      
            <TableCell align="left">Date</TableCell>     
            <TableCell align="left">Systolic Blood Pressure</TableCell>
            <TableCell align="left">Diastolic Blood Pressure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {count.map((detailsRow) => (
                        <TableRow key={detailsRow.Date}>
                            <TableCell component="th" scope="row">
                              {detailsRow.Date}
                            </TableCell>
                            <TableCell align="left">{detailsRow.systolicbloodpressure}</TableCell>
                            <TableCell align="left">{detailsRow.diastolicbloodpressure}</TableCell>
                            <TableCell align="left">{detailsRow.condition}</TableCell>  
                        </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableItemCounts;