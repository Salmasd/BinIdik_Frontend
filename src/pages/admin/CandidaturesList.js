
import React,{useEffect, useState}from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listItems';
import { getallcandidature} from "../../functions/Candidature";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Typography} from 'antd';
import Title from './Title';


const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

const CandidaturesList=() => {

  const [open, setOpen] = React.useState(true);
  const [candidatures, setCandidatures] = useState([]);


  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;


  if(!id || role ==="utilisateur"){
    history.push('/');
  } 
  const toggleDrawer = () => {
    setOpen(!open);
  };

   const columns = [
    {
        title: 'N° Candidature',
        dataIndex: 'id',
      },
      {
        title: 'Nom',
        dataIndex: 'nom',
      },
      {
        title: 'Prénom',
        dataIndex: 'prenom',
      },
      {
        title: 'Service',
        dataIndex: 'categorie',
      },
     
      {
        title: 'Ville',
        dataIndex: 'ville',
      },
      {
        title: 'Téléphone',
        dataIndex: 'telephone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
    ];
    
    useEffect(() => {
        
        getallcandidature().then((response) => {
            setCandidatures(response.data)
        })
        .catch(error => {
            console.log(error);
        }) 
    }, [])   
return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{marginTop:"0%"}}>
<Title>Liste des Candidatures</Title>
  <Table 
                    columns={columns} dataSource={candidatures} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
      </Container>
        </Box>
      </Box>
    </ThemeProvider>


);
};
export default CandidaturesList;