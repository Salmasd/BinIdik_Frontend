import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from "react-router-dom";

export const mainListItems = (
   
  <div>
    <ListItem button component={Link} to="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component={Link} to="/admin/userlist">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clients" />
    </ListItem>

    <ListItem button component={Link} to="/admin/requestlist">
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Demandes" />
    </ListItem>
  
    <ListItem button component={Link} to="/admin/candidaturelist">
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Candidatures" />
    </ListItem>

  </div>
);