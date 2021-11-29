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
import image from "../../images/kitchen.jpg"

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

export default function Blog2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Y
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Les meilleures astuces pour déboucher vos canalisations"
        subheader="Novembre 20, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Plomberie"
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
          Éreinté le soir, vous faites la vaisselle en toute tranquillité. Mais pour une raison que vous ignorez, les eaux usées ne passent pas, vos canalisations sont bouchées. Ce qui est problématique et peut engager de gros soucis si vous n’y faites pas attention.
           Les canalisations bouchées sont des choses courantes dont les causes peuvent être nombreuses.
          </Typography>
          <Typography paragraph>
          Même si en apparence ce type de problème n’est pas dangereux, il faut tout de même faire très attention au risque d’avoir d’autres soucis à régler. Si vous êtes dans une telle situation, 
          voici quelques astuces avisées pour régler ce problème au plus vite possible.
          </Typography>
          <Typography paragraph>
          Le bicarbonate de soude
          </Typography>
          <Typography paragraph>
          Ce produit est trouvé dans la plupart des maisons. Le bicarbonate de soude est un produit naturel dont les vertus sont nombreuses. Et s’il est très réputé dans le monde du nettoyage ou de la médecine il trouve facilement aussi sa place dans vos canalisations. C’est une bonne alternative à prendre en c
          de faire rapidement appel aux services d’un plombier. Pour cela vous avez besoin d’une tasse de bicarbonate et de l’eau bouillante en grande quantité.
          </Typography>
          <Typography paragraph>
          </Typography>
          Sel et bicarbonate de soude
          <Typography>
          Si le bicarbonate de soude est très efficace utilisé tout seul, il demeure aussi efficace si on l’utilise en le mélange avec d’autres produits. Mais attention, il ne faut utiliser que des produits naturels et écologiques. Cela permet d’avoir 
          des résultats plus efficaces et loin d’être nocifs pour vous lors de la manipulation. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}