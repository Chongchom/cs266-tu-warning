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
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import png from "./img/person.png"




export default function Person() {
    const [personlist, setPersonlist] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3333/personlist")
        .then((res) => res.json())
        .then((result) => {
          // Format the "date" property in the result array
          const formattedResult = result.map((person) => ({
            ...person,
            date: new Date(person.date).toLocaleDateString('en-GB'), // Adjust 'en-GB' based on your locale
          }));
  
          setPersonlist(formattedResult);
        });
    }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box display="center" justifyContent="center">
            <img alt="Person" width = "300" src={png}/>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{p:2}}>
        <Paper>
            <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom component= "div">
                            Person List
                </Typography>
            </Box>
            <Box>
                <Link href="sendperson">
                    <Button variant="contained">Send</Button>
                </Link>
            </Box>

            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Avatar</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Detail</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {personlist.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="center">
                            <Box display="flex" justifyContent="center">
                                <Avatar alt={row.name} src={row.coverimage} />
                            </Box>
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
