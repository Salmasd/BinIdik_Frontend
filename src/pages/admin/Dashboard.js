import React, {  useEffect,useState } from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { useTheme } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CalendarTodayTwoTone from '@material-ui/icons/CalendarTodayTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ReportCard from '../../components/cards/ReportCard';
import { gridSpacing } from '../../functions/constant';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import {  Grid } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import { mainListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import {getUserCount} from '../../functions/user';
import {getdemandeCount} from '../../functions/Demande';
import {getcandidatureCount} from '../../functions/Candidature';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


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

function DashboardContent() {
  const themee = useTheme();
  const [open, setOpen] = React.useState(true);
  const [countUser, setCountuser] = useState([]);
  const [countDemande, setCountdemande] = useState([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  const role = localStorage.getItem("role") ;
  const id = localStorage.getItem("id") ;

  if(!id || role ==="utilisateur"){
    history.push('/');
  } 
 
  useEffect(() => {
    getUserCount().then((res) => {
        setCountuser(res.data);
    });
    getdemandeCount().then((res) => {
        setCountdemande(res.data);
    });
  });
  const [count, setCount] = useState([]);

  useEffect(() => {
      getcandidatureCount().then((res) => {
          setCount(res.data);
      });
    });

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
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={countUser}
                            secondary="Clients"
                            color={themee.palette.warning.main}
                            footerData="Nombre des clients"
                            iconPrimary={PeopleAltTwoToneIcon}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={countDemande}
                            secondary="Demandes"
                            color={themee.palette.success.main}
                            footerData="Nombre des demandes"
                            iconPrimary={CalendarTodayTwoTone}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                    <Grid item lg={4} sm={8} xs={12}>
                        <ReportCard
                            primary={count}
                            secondary="Candidature"
                            color={themee.palette.primary.main}
                            footerData="Nombre des Candidatures"
                            iconPrimary={ArticleTwoToneIcon}
                            iconFooter={TrendingUpIcon}
                        />
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        <br/><br/><br/>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
             
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}