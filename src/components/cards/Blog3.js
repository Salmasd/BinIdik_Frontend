import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import image from "../../images/machine.jpg"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Blog3() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Les appareils électroménagers incontournables dans une cuisine"
        subheader="Octobre 15, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="electromenager"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Aujourd’hui, il est impossible de se passer des appareils électroménagers. De plus, si autrefois, ils étaient un incontournable dans une cuisine, ils s’invitent aujourd’hui dans toutes les pièces de la maison.
         Voici tous les « must have » pour bien équiper votre maison en électroménager.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        
        <Typography paragraph>
        Le four classique
          </Typography>
          <Typography paragraph>          
Plus qu’un appareil pour faire de la pâtisserie, avoir un four dans sa cuisine est obligatoire. Les modèles récents sont dotés d’une multitude de modes de cuisson et de fonctionnalités. Il existe même aujourd’hui des fours avec un écran LCD,
 permettant aux cuisiniers d’utiliser facilement ce matériel.
          </Typography>
          <Typography paragraph>
          Le four micro-onde
          </Typography>
          <Typography paragraph>
          Servant à réchauffer les plats, le four micro-onde est très utile dans la vie de tous les jours. Le choix est large avec les différentes marques disponibles sur le marché. Il en est de même pour le prix et la taille. Enfin, avec les nouveaux modèles, vou
           à votre disposition de nombreuses fonctionnalités qui vous faciliteront son utilisation.
          </Typography>

          <Typography paragraph>
          Le réfrigérateur
         </Typography>
          <Typography paragraph>
          </Typography>
          Qui dit cuisine fonctionnelle dit cuisine équipée d’un réfrigérateur. Cet appareil se décline en de nombreux styles différents. Faites votre choix selon votre budget, sans oublier de prendre en compte la surface disponible dans votre cuisine.
           C’est la meilleure façon de bien aménager cet espace.
          <Typography>
          Le lave-linge 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}