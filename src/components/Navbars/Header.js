import React, { useState} from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import image from "../../images/logo.png";
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons"
import { NoMealsOutlined } from '@mui/icons-material';
import RadioButtonCheckedSharpIcon from '@mui/icons-material/RadioButtonCheckedSharp';

const Header = () =>  {
    
  let dispatch = useDispatch();

  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();
  const nom=localStorage.getItem('nom'); 
  const prenom= localStorage.getItem('prenom');
 const role = localStorage.getItem('role');
       const logout = () => {
        firebase.auth().signOut();
        dispatch({
          type: "LOGOUT",
          payload: null,
        })
       localStorage.removeItem('id');
        localStorage.removeItem('role'); 
        localStorage.removeItem('nom'); 
        localStorage.removeItem('prenom'); 
        localStorage.removeItem('tel'); 
        localStorage.removeItem('email'); 
        history.push("/");
      };

        return (
            <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img 
                                src={image}
                                width="60"
                                height="65"
                                className="d-inline-block align-top"
                                alt="Krilya logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav  className="me-auto">
                                <Nav.Link  href="/">Accueil</Nav.Link>
                                <Nav.Link href="/">Qui sommes nous?</Nav.Link>
                                <Nav.Link href="/" >Contactez nous</Nav.Link>
                            </Nav>
                           {/*  <Nav>
                            <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Chercher"
                            aria-describedby="search-addon" />
                            <span className="input-group-text" id="search-addon">
                            <SearchOutlined />
                           </span>
                          </div>
                            </Nav> */}


                            {!user && (
                            <Nav>
                                <Nav.Link href="/signin" >Se connecter</Nav.Link>
                                <Nav.Link href="/signup" >S'inscrire</Nav.Link>
                            </Nav>
                             )}
                             {role=="utilisateur" && (
                            <Nav  >
                                <Nav.Link href="/allrequests">Mes demandes</Nav.Link>
                             </Nav>)}
                             {role=="admin" && (
                            <Nav  >
                                <Nav.Link >< RadioButtonCheckedSharpIcon fontSize="small" color="success"/> {prenom} {nom}</Nav.Link>
                             </Nav>)}
                            {user && (
                            <Nav>
                            <Nav.Link onClick={logout} >Se déconnecter</Nav.Link>
                            </Nav>
                            )
                             }
                           
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        
        </div>
        </>
        );
    
};

export default Header ;
