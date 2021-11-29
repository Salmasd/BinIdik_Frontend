import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import video from "../../images/Bricolage.mp4";
import Containers from '../Container';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import { addcandidature } from '../../functions/Candidature';

// 

const Description = () => {
  let history = useHistory();
  const [date, setDate] = useState(new Date());
  const onSubmit = (event) => {
    event.preventDefault(event);
    const nom=event.target.name.value;
    const prenom=event.target.lname.value;
    const email=event.target.email.value;
    const telephone=event.target.tel.value;
    const ville=event.target.ville.value;
    const categorie=event.target.categorie.value;
    let candidature = {categorie,date, email, nom,prenom,telephone,ville}
    addcandidature(candidature).then(res =>{
    Swal.fire(
      {
          title: 'Candidature enregistrée',
          text: 'Nous ne manquerons pas de vous contacter rapidement.',
          icon: 'success',
          confirmButtonColor: '#1d314a',
          timer: 2500,
      }
    );
    });
    history.push("/");
  };

  const handleClick = () => {

  }
  return (
    <div  className="Container"  >

        <Container className="videoContainer" style={{ marginLeft:"5%" ,paddingRight: 0, paddingLeft: 0 }}>
          <Row>
           <Col md={8} xs={6}>
            <video className="video" autoPlay loop muted style={{width:"100%" }}>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </Col>
            <Col  md={4} xs={6}>
                      
                        <h1 style={{marginLeft:"48%" }}>Bin Idik</h1>
                        <p className="text-center" style={{textJustify:"none", marginLeft:"35%", fontSize:"16px" }}>À chaque spécialité son m3allam Bin Idik a un objectif très clair et
                           une vision bien précise pour l'atteindre.
                           Nous croyons fermement qu'une
                           entreprise peut être éprouvée et
                           rentable tout en étant enrichissante
                           pour ses collaborateurs.</p>
                        <br/>
                        <h4 style={{marginLeft:"35%" }} className="text-center text-danger">Vous êtes un m3allem hors pair?</h4>
                        <Containers onSubmit={onSubmit}/>
                       
                     
                        
                    </Col>
            </Row>
        </Container>
    
    </div>
  );
}


export default Description;