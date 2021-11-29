import React from "react";
import logo from "../../images/logo8.png";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Mapg from "../cards/Map";



function Footer() {
  return (
    <div className="main-footer bg-light" >
      <div className="container">
        <div className="row" >
          {/* Column1 */}
          <div className="col" style={{width:"30%"}}>
              <br/>
           <img src={logo} style={{width:"200px", height:"220px"}}/>
          </div>
          {/* Column2 */}
          <div className="col" style={{marginRight:"3%"}}>
            <h4>Contactez Nous</h4>
            <ui className="list-unstyled">
              <li><FacebookTwoToneIcon color="primary" fontSize="large" /> 
              <a target = "_blank" href="https://www.facebook.com/BIN-IDIK-106193258552192/" >   BIN IDIK</a> </li>
              <li>< InstagramIcon color="error"  fontSize="large"/>
              <a target = "_blank" href="https://www.instagram.com/binidik11/" >   BIN IDIK</a></li>
              <li><WhatsAppIcon color="success" fontSize="large" /> +212 616 343 302</li>
              <li><MailOutlineIcon color="error" fontSize="large" />
              <a target = "_blank" href="mailto:binidek2021@gmail.com" > binidek2021@gmail.com</a></li>
              <li><div style={{width:"250px", height:"160px"}}>
                  <Mapg/></div></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col" >
            <h4>Qui somme nous?</h4>
            <ui className="list-unstyled">
              <li><p className="text-justify" >
             Nous sommes une société basé sur Tanger, opérant la région du nord. Nous nous efforçons de créer les meilleurs services pour aider nos clients à être à l’aise au quotidien.
            Chez Bin Idik, nous avons toujours cherché à faire les choses un peu différemment. Depuis les premiers jours, nous nous sommes attachés à créer l'un des lieux de travail 
            les plus uniques et les plus enrichissants en repensant un grand nombre de pratiques traditionnelles.
            Nous avons à cœur de créer un service de qualité, des relations de confiance avec nos clients et un sens de la communauté qui relie nos clients et notre équipe les uns aux autres.</p></li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Bin Idik | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;