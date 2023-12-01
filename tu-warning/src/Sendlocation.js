import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import png from "./img/location.png";
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';


export default function Sendlocation() {


    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

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
      }, [])


    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3333/locationSend", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    detail
                    
                }),
            });
    
            if (response.ok) {
                alert('Success');
                // Redirect to the home page or any other page after successful submission
                window.location.href = '/';
            } else {
                alert('Failed to post data');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error occurred');
        }
    };

    

    return (
    
            <Container maxWidth="sm" sx={{ p: 2 }}>
            <Box display="center" justifyContent="center">
                <img alt="Location" width = "300" src={png}/>
            </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                data-test = "location-subscribe-name"
                                id="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                data-test = "location-subscribe-detail"
                                id="detail"
                                label="Detail"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button data-test = "location-submit-button" type="submit" variant="contained" fullWidth color="warning">
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
  
    );
}