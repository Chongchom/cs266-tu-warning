import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import png from "./img/logo.png";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import emailjs from "@emailjs/browser";


export default function Login() {
    const [inputs, setInputs] = useState({});
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    useEffect(() => {
        emailjs.init("DwSHed5PxG4kLAuVR");
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Application-Key': 'TU8ee5b1ce1146d640c69d997cb047f317b53d15e0ae077c2fa83d585eb0f6c502ca2e098ef7a2e15d358c8253991edcdb',
                    'Cookie': 'ci_session=d8mdd5ubfer7ido1md22hq2qv8e5koq8; cookiesession1=678B28B9982320561B2645005C21F50D',
                },
                body: JSON.stringify({
                    "UserName": inputs.username,
                    "PassWord": inputs.password,
                }),
            });

            const result = await response.json();

            if (result.status) {
                console.log(result.email)
                console.log(result.displayname_th)
                MySwal.fire({
                    title: <i>{result.message}</i>,
                    icon: 'success'
                }).then(() => {
                    localStorage.setItem('token', JSON.stringify(result));
                    navigate('/home');
                });

                
                const serviceId = "service_rsea68e";
                const templateId = "template_0sgl8sj";

                try {
                    await emailjs.send(serviceId, templateId, {
                        name: result.displayname_th,
                        recipient: result.email,
                    });
                    MySwal.fire({
                        title: <i>Email successfully sent, check inbox</i>,
                        icon: 'success',
                    });
                    
                } catch (error) {
                    console.log(error);
                } 
            } else {
                MySwal.fire({
                    title: <i>{result.message}</i>,
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ p: 2 }}>
           
            <Box display="center" justifyContent="center" >
                
                    <img alt="Location" width="300" src={png} />
                
            </Box>
            
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            type="text"
                            name="username"
                            fullWidth
                            value={inputs.username || ""}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            value={inputs.password || ""}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth color="warning">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
