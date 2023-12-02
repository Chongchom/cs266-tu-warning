import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import person from "./img/person.png"
import location from "./img/location.png"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Home() {
    const navigate = useNavigate()
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        const user = localStorage.getItem('token')
        if (user!== null){
            
        } else {
            MySwal.fire({
                title: <i>Error! You have to Login</i>,
                icon: 'error'
            }).then((value) =>{
                navigate('/')
            })
            
        }
      }, [])

  
  return (
   
      <Container maxWidth="sm" sx={{p:2}}>
        <Box display="flex">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }} button divider>
                <CardActionArea>
                    <CardMedia>
                        <img alt="Person" width = "300" src={person}/>
                    </CardMedia>
                    <CardContent>
                    <Typography data-test = "show-card-to-person-list" gutterBottom variant="h5" component="div">
                        Dangerous person list
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        บุคคลอันตรายหรือบุคคลที่มีพฤติกรรมอันผิดปกติที่อาจะก่ออันตราย
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="personlist">
                    <Button data-test = "show-person-list-button" variant="contained">Go to list</Button>
                </Link>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }} button divider>
                <CardActionArea >
                    <CardMedia>
                        <img alt="Location" width = "300" src={location}/>
                    </CardMedia>
                    <CardContent>
                    <Typography data-test = "show-card-to-location-list" gutterBottom variant="h5" component="div">
                        Dangerous place list
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        สถานที่อันตรายที่ควรหลีกเลี่ยงภายในบริเวณมหาวิทยาลัยและพื้นที่ใกล้เคียง
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Link href="locationlist">
                    <Button data-test = "show-location-list-button" variant="contained">Go to list</Button>
                </Link>
                </CardActions>
            </Card>
            </Grid>
            
        </Grid>
           
        </Box>
      </Container>
    
  );
}