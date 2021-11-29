
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
import { getUser} from "../../functions/user";
import { Col, Row } from 'react-bootstrap';
import { getalldemandes,getDemande, update} from '../../functions/Demande'
import Moment from 'react-moment';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Typography} from 'antd';
import { Steps,Image,Modal } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined,  CheckCircleOutlined  } from '@ant-design/icons';
import Titles from './Title';


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

const DemandesList=() => {


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const { Title, Paragraph, Text, Link } = Typography;
  const [demandes, setDemandes] = useState([]);
  const { Step } = Steps;
  const [demande, setDemande] = useState([]);
  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);

  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    loadDemande(id);
    //loadUser(id);
  }, []);

  const loadDemande = (id) =>{
    getDemande(id).then((c) =>{
      console.log("images",c.data.images);
      console.log("demande",c.data);
      setDemande(c.data);
      setImages(c.data.images);
      setUsers(c.data.user)
    }); 
  };

 

  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;


  if(!id || role ==="utilisateur"){
    history.push('/');
  } 
  


  const showModal = (id) => {
    loadDemande(id);
    //loadUser(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    update(demande.id);
    setIsModalVisible(false);
    
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const columns = [
    {
        title: 'N° Demande',
        dataIndex: 'id',
      },
      {
        title: 'Service',
        dataIndex: 'categorie',
      },
      {
        title: 'Catégorie',
        dataIndex: 'sousCategorie',
      },
      {
        title: 'Objet',
        dataIndex: 'titre',
      },
     
      {
        title: 'Etat',
        dataIndex: 'statut',
      },
    ];
    
    useEffect(() => {
        
        getalldemandes().then((response) => {
            setDemandes(response.data)
        })
        .catch(error => {
            console.log(error);
        }) 
    }, [])
 



    
return (
<>

<Modal width={1000} centered title="Détail de la demande" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          
          
          {demande.statut=="En cours" &&(
          <Steps>
          <Step status="finish" title="Login" icon={<UserOutlined />} />
          <Step status="finish" title="Demande envoyée" icon={<SolutionOutlined />} />
          <Step status="process" title="En cours" icon={<LoadingOutlined />} />
          <Step status="wait" title="Terminée" icon={<CheckCircleOutlined />} />
          </Steps>
          )}
          {demande.statut=="Terminée" &&(
          <Steps>
            <Step status="finish" title="Login" icon={<UserOutlined />} />
            <Step status="finish" title="Demande envoyée" icon={<SolutionOutlined />} />
            <Step status="finish" title="Traitée" icon={<CheckCircleOutlined />} />
            <Step status="finish" title="Terminée" icon={<CheckCircleOutlined />} />
          </Steps>
          )
        }
         
              <br/>
             <Row>
            <Col className="col-sm-8">
            <Title level={5}>Demande N° {demande.id} | le <Moment format="DD/MM/YYYY" >{demande.date}</Moment></Title>
            <Title level={5}>Service</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.categorie}</Paragraph>
            <Title level={5}>Catégorie</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.sousCategorie}</Paragraph>
            <Title level={5}>Objet</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.titre}</Paragraph>
            <Title level={5}>Description</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.description}</Paragraph>
            <Title level={5}>Ville</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.ville}</Paragraph>
            <Title level={5}>Adresse</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{demande.adresse}</Paragraph>
            <Title level={5}>Effectuée par</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{users.prenom} {users.nom}</Paragraph>
            <Title level={5}>N° Téléphone</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{users.telephone}</Paragraph>
            <Title level={5}>Email</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-35}}>{users.email}</Paragraph>
           </Col>
             
                 
           
         {images && (
             <Col  className="col-sm-4">
                <br/><br/>
               {/*  {images.map((i) => 
                     <Image style={{width:200, height:200}} preview={{ visible: false }}
                     src={"data:image/jpeg;base64,"+images[0].image+""}
                      onClick={() => setVisible(true)}
                      />  )} */}
                  <div >
                     <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                           
                           
                          {images.map((image) => 
                                <Image key={image.id} src={"data:image/jpeg;base64,"+image.image+""} />
                            )}
                     </Image.PreviewGroup>
                     
                    </div> 
                     
                     </Col>
                     )} 
                     </Row>
          </Modal>


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
  <Titles>Liste des Demandes </Titles>
      <Table  
                      onRow={(record, rowIndex) => {
                        console.log(record.id);
                        return {
                          onClick: event => {showModal(record.id)}, // click row 
                          onDoubleClick: event => {}, // double click row
                          onContextMenu: event => {}, // right button click row
                          onMouseEnter: event => {}, // mouse enter row
                          onMouseLeave: event => {}, // mouse leave row
                        };
                      }}
                  
                   columns={columns} dataSource={demandes} pagination={{ pageSize: 10 }} scroll={{ y: 300 }}  />
      </Container>
        </Box>
      </Box>
    </ThemeProvider>

</>
);
};
export default DemandesList;