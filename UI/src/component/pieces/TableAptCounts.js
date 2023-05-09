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


function TableAptCounts() {
  
  const { currentUser } = useAuth();
  // console.log(currentUser);

  const [count, setCount] = useState([]) 
  
  const getCount = async() => {
    const response = await fetch("http://localhost:8000/hypertension/appointments/" + currentUser.email);
    const data = await response.json();
    console.log(data.data)
    setCount(data.data);
    console.log(count.length);
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
            <TableCell align="left">Appointment Type</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {count.length>0 ? count.map((detailsRow) => (
                        <TableRow key={detailsRow.Date}>
                            <TableCell component="th" scope="row">
                              {detailsRow.Date}
                            </TableCell>
                            <TableCell align="left">{detailsRow.type}</TableCell>
                            <TableCell align="left">{detailsRow.details}</TableCell>
                        </TableRow>))
            :
            <h1> No data </h1>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableAptCounts;