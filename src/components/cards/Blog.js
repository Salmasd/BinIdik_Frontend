import React from 'react';
import Grid from '@mui/material/Grid';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import { useHistory } from "react-router-dom";

const Blog = () => {

  let history = useHistory();

    return (

    <div style={{marginLeft:"7%"}}>
      
    <Grid sx={{ flexGrow: 1 }} container spacing={8}>
        <Grid key="0" item>
            <Blog1/>

        </Grid>
        
        <Grid key="2" item>
        <Blog2/>

        </Grid>

        <Grid key="2" item>
        <Blog3/>
       </Grid>
   

    </Grid>
    </div>
    );
};
export default Blog;