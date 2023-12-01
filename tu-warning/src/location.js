import * as React from 'react';
import {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import png from "./img/location.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';




export default function Location() {
  
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

 
  const [locationlist, setLocationlist] = useState([]);

  
    useEffect(() => {
        const user = localStorage.getItem('token')
        const profile = JSON.parse(user)
        if (user!== null){
            
        } else {
            MySwal.fire({
                title: <i>Error</i>,
                icon: 'error'
            }).then((value) =>{
                navigate('/')
            })
            
        }
      fetch("http://localhost:3333/locationlist")
        .then((res) => res.json())
        .then((result) => {
          // Format the "date" property in the result array
          const formattedResult = result.map((location) => ({
            ...location,
            date: new Date(location.date).toLocaleDateString('en-GB'), // Adjust 'en-GB' based on your locale
          }));
  
          setLocationlist(formattedResult);
        });
        
    }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box display="center" justifyContent="center">
            <img alt="Location" width = "300" src={png}/>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{p:2}}>
        <Paper>
            <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
                <Typography  data-test = "loaction-title" variant="h6" gutterBottom component= "div">
                            Location List
                </Typography>
            </Box>
            <Box>
                <Link href="sendlocation">
                    <Button variant="contained">Send</Button>
                </Link>
            </Box>

            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell data-test = "location-table-id">ID</TableCell>
                        <TableCell data-test = "location-table-date" align="center">Date</TableCell>
                        <TableCell data-test = "location-table-name" align="center">Name</TableCell>
                        <TableCell data-test = "location-table-detail" align="right">Detail</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {locationlist.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="center">
                            <Box display="flex" justifyContent="center">
                                {row.date} 
                            </Box>
                        </TableCell>
                        <TableCell align="right">
                            <Box display="flex" justifyContent="center">
                                {row.name} 
                            </Box>
                        </TableCell>
                        <TableCell align="right">{row.detail}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}