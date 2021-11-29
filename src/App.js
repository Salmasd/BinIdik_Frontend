import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Header from "./components/Navbars/Header";
import login from "./pages/auth/SignInSide";
import SignUpSide from "./pages/auth/SignUp";
import Electricite from "./components/forms/Electricite";
import Plomberie from "./components/forms/Plomberie";
import Electromenager from "./components/forms/Electromenager"; 
import Mesdemandes from "./pages/Mesdemandes";
import Dashboard from "./pages/admin/Dashboard";
import UsersList from "./pages/admin/UsersList";
import DemandesList from "./pages/admin/DemandesList";
import CandidaturesList from "./pages/admin/CandidaturesList";

const App = () => {

  const dispatch = useDispatch()

  //firebase check firebase auth state

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user)=>{
      if(user){

        const idTokenResult= await user.getIdTokenResult()

        console.log("user", user);
         axios.get("http://localhost:8080/users/getuser/"+user.email) 
        .then((res) => {
          console.log("hey",res.data);
          localStorage.setItem('id',  res.data.id );
          localStorage.setItem('role',  res.data.role ); 
          localStorage.setItem('nom',  res.data.nom ); 
          localStorage.setItem('prenom',  res.data.prenom ); 
          localStorage.setItem('email',  res.data.email); 
          localStorage.setItem('tel',  res.data.telephone ); 
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.nom,
              lname: res.data.prenom, 
              email: user.email,
              token: idTokenResult.token,
              role: res.data.role,
              id: res.data.id, 
            },
          });
        })

      }
    });
//clean up 
return () => unsubscribe();
  },[] )




  return (
    <>
      < Header/>
      <ToastContainer />
      <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />  
         <Route exact path="/signin" component={login} />  
         <Route exact path="/signup" component={SignUpSide} />
         <Route exact path="/electrequest" component={Electricite} />
         <Route exact path="/plombrequest" component={Plomberie} />
         <Route exact path="/electrorequest" component={Electromenager} />
         <Route exact path="/allrequests" component={Mesdemandes} />
         <Route exact path="/admin" component={Dashboard}/>
         <Route exact path="/admin/userlist" component={UsersList}/>
         <Route exact path="/admin/requestlist" component={DemandesList}/>
         <Route exact path="/admin/candidaturelist" component={CandidaturesList}/>
       

      </Switch>
      </BrowserRouter>
   
      

    </>
  );
};


export default App;