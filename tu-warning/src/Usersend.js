import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import png from "./img/person.png";
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
//import emailjs from "@emailjs/browser";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function Sendlocation() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)
    const [userProfile, setUserProfile] = useState();

    useEffect(() => {
        const user = localStorage.getItem('token')
        const profile = JSON.parse(user)
        if (user!== null){
            setUserProfile(profile);
        } else {
            MySwal.fire({
                title: <i>Error! You have to Login</i>,
                icon: 'error'
            }).then((value) =>{
                navigate('/')
            })
            
        }
      }, [])

    const [name, setName] = useState('');
    const [detail, setDetail] = useState('');
    const [coverimage, setCoverimage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3333/personSend", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    detail,
                    coverimage
                    
                }),
            }
            );
            MySwal.fire({
                title: <i>SUCCESS</i>,
                icon: 'success'
            }).then(() => {
                console.log('Alert closed');
                navigate('/personlist');
            });
            
            // const emailRef = userProfile.email; // Double-check if this should be destructured
            //     const nameRef = userProfile.displayname_th; // Double-check if this should be destructured
            //     const serviceId = "service_rsea68e";
            //     const templateId = "template_0sgl8sj";

            //     try {
            //         await emailjs.send(serviceId, templateId, {
            //             name: nameRef,
            //             recipient: emailRef,
            //         });
            //         MySwal.fire({
            //             title: <i>Email successfully sent, check inbox</i>,
            //             icon: 'success',
            //         });
            //     }catch (error) {
            //         console.log(error);
            //     } 
    
        } catch (error) {
            console.error('Error:', error);
            MySwal.fire({
                title: <i>ERROR</i>,
                icon: 'error'
            });
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
                                data-test = "person-subscribe-name"
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
                                data-test = "person-subscribe-detail"
                                id="detail"
                                label="Detail"
                                variant="outlined"
                                fullWidth
                                required
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} onChange={(e) => setCoverimage(e.target.value)} fullWidth>
                                Upload Image
                                <VisuallyHiddenInput type="file" />
                            </Button>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button data-test = "person-submit-button" type="submit" variant="contained" fullWidth color="warning">
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        
    );
}