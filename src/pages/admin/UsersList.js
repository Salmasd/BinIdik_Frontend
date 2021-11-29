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
import { toast } from "react-toastify";
import { getUsers, removeUser} from "../../functions/user";
import {  DeleteOutlined } from "@ant-design/icons";
import { Avatar} from 'antd';
import { Col, Row } from 'react-bootstrap';
import LocalSearch from "../../components/forms/LocalSearch";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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

const UsersList=() => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(true);
  const [keyword, setKeyword] = useState("");

  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;


  if(!id || role ==="utilisateur"){
    history.push('/');
  } 
 

  const loadUsers = () =>
    getUsers().then((c) => setUsers(c.data));

 

  const handleRemove = async (id) => {
    if (window.confirm("Voulez-vous supprimer ce utilisateur ?")) {
      setLoading(true);
      removeUser(id)
        .then((res) => {
          setLoading(false);
          toast.error(`Utilisateur supprimé `);
          loadUsers();
        })
        .catch((err) => {
          if (err) {
            setLoading(false);
            toast.error(err.response);
          }
        });
    }
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const searched = (keyword) => (c) => c.prenom.toLowerCase().includes(keyword);

    useEffect(() => {
        loadUsers();
      }, []);
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
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <Title>Liste des Clients</Title>
          )}
          <LocalSearch keyword={keyword} setKeyword={setKeyword} />

          {users.filter(searched(keyword)).map((c) => (
            <div className="alert alert-secondary" key={c.id}>
              <Row>
                <Col className="col col-md-3">
              <Avatar size={45} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{c.prenom.charAt(0).toUpperCase()}{c.nom.charAt(0).toUpperCase()}</Avatar>
               {" "}<b>{c.prenom} {c.nom}</b>
               </Col>
                <Col style={{marginTop:12}}>
                
                <p>{c.telephone}</p>
                </Col>
                <Col style={{marginTop:12}}>
                <p>{c.email}</p>
                </Col>
              
              <Col>
              <span
                onClick={() => handleRemove(c.id)}
                className="btn btn-sm " style={{float:"right"}}
              >
                <DeleteOutlined className="text-danger" />
              </span>
              </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
      </Container>
        </Box>
      </Box>
    </ThemeProvider>


);
};
export default UsersList;