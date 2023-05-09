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


function TableExerciseCounts() {
  
  const { currentUser } = useAuth();
  // console.log(currentUser);

  const [count, setCount] = useState([]) 
  
  const getCount = async() => {
    const response = await fetch("http://localhost:8000/hypertension/exercise/" + currentUser.email);
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
            <TableCell align="left">Exercise</TableCell>
            <TableCell align="left">Length</TableCell>
            <TableCell align="left">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {count.map((detailsRow) => (
                        <TableRow key={detailsRow.Date}>
                            <TableCell component="th" scope="row">
                              {detailsRow.Date}
                            </TableCell>
                            <TableCell align="left">{detailsRow.exercise}</TableCell>
                            <TableCell align="left">{detailsRow.length}</TableCell>
                            <TableCell align="left">{detailsRow.calories}</TableCell>  
                        </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableExerciseCounts;