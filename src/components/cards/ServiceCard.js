import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from "../../images/plumbing.jpg";
import image2 from "../../images/electrical.jpg";
import image3 from "../../images/electro.jpg";
import { useHistory } from "react-router-dom";

const ServiceCard = () => {

  let history = useHistory();
  const handleCard = (e) => {
    e.preventDefault();
    history.push('/plombrequest');
  }
  const handleCard2 = (e) => {
    e.preventDefault();
    history.push('/electrequest');
  }
  const handleCard3 = (e) => {
    e.preventDefault();
    history.push('/electrorequest');
  }
    return (

    <div className="container">
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
    <Grid key="0" item>
      <Card sx={{ maxWidth: 345 }} onClick={handleCard  }>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Plomberie
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Fuite d’eau ou de gaz, panne de chauffage, 
            changement d’équipements sanitaires ou bien un débouchage de tuyaux, On s'occupe de tout.         </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    <Grid key="2" item>
      <Card sx={{ maxWidth: 345 }} onClick={handleCard2  }>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Eléctricité
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Panne de courant? Prise électrique? Que ce soit pour un
            dépannage en urgence ou la mise sur pied d’une nouvelle installation.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
    <Grid key="3" item>
      <Card sx={{ maxWidth: 345 }} onClick={handleCard3  }>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image3}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Electroménager
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Votre appareil électroménager présente des défauts d’utilisation ?
            Reposez-vous nos experts s'occupent de tout, découvrez notre service.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      </Grid>
      </div>
    );
  };
export default ServiceCard;