import React, {  useEffect,useState } from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Moment from 'react-moment';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
    const [date, setDate] = useState(new Date());
 
  return (
    <React.Fragment>
      <Title>Nombre des demandes traitées</Title>
      <br/>
      <Typography component="p" variant="h4">
       6
      </Typography>
      <br/><br/>
      <div>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      le <Moment format="DD/MM/YYYY" >{date}</Moment>
      </Typography>
      </div>
    </React.Fragment>
  );
}