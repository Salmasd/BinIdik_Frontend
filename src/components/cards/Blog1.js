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
import image from "../../images/prise.jpeg"

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

export default function Blog1() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Electricité">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Comment économiser de l’électricité dans sa maison"
        subheader="Novembre 27, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Depuis que l’on a découvert l’électricité, celle-ci est devenue indispensable. Elle nous permet d’accomplir de nombreuses choses.
         Il est quasiment impossible de s’en passer 
        tellement elle garde une place importante dans l’accomplissement de la plupart des tâches.
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
          Mais à l’époque où quasiment tout se facture, l’électricité affiche toujours une note salée, ce qui déplait gravement à notre portefeuille. Pour soulager nos comptes personnels, il existe des moyens pour économiser de 
          l’électricité dans une maison et de faire baisser le débit de consommation électrique..
          </Typography>
          <Typography paragraph>
            HUn réfrigérateur plein de boites vides : notre réfrigérateur est programmé pour consommer
             de l’énergie tant qu’il y encore de la nourriture dedans, même s’il ne s’agit que d’une seule tranche de viande.
              Alors pour minimiser la consommation d’énergie, remplissez le réfrigérateur de boîtes ou bouteilles vides. 
            Il consommera ainsi moins d’énergie avec le peu d’espace qui reste.

          </Typography>
          <Typography paragraph>
          En cuisine, les couvercles vous sauvent la mise ! C’est bête mais la plupart des gens, 
          quand ils utilisent une casserole, oublient de mettre un couvercle. 
          Or ce petit geste de rien du tout peut réduire considérablement votre consommation. 
          Quand vous faites bouillir de l’eau dans une 
          casserole avec un couvercle dessus, l’action demande beaucoup moins d’énergie.
          </Typography>
          <Typography>
          Bien choisir son ampoule : En-effet, les lustres qui décorent votre salle de séjours sont beaux et scintillants à souhait.
           Mais savez-vous combien ils consomment et quel type d’ampoule est utilisé ? Ce petit détail peut cependant faire toute la différence lorsqu’il est question d’économiser de l’électricité dans votre maison. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}