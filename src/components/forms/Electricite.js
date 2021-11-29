import React, { useState } from "react";
import { Card, Form } from 'react-bootstrap';
import { Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, FloatingLabel } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {adddemande} from '../../functions/Demande'
import { ArrowRightOutlined, ArrowUpOutlined } from '@ant-design/icons';
import '../../App.css';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CarouselElect from "../cards/CarouselElect";
import image from "../../images/coupure.jpg";
import { Typography, Divider } from 'antd';
import { BackTop } from 'antd';

export default function Electricite() {

  

const { Title, Paragraph, Text, Link } = Typography;
  let history = useHistory();
  const [categorie, setCategorie] = useState('Electricite');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [paiement, setPaiement] = useState('');
  const [sousCategorie, setSousCategorie] = useState('');
  const [titre, setTitre] = useState('');
  const [adresse, setAdresse] = useState('');
  const [ville, setVille] = useState('');
  const [statut, setStatut] = useState('En cours');
  const [images, setImages] = useState([]);

  let { user } = useSelector((state) => ({ ...state }));
  const id = localStorage.getItem("id") ;
  const role = localStorage.getItem("role") ;
  console.log(id);

  

  if(!id || role ==="admin"){
    history.push('/signup');
} 


   const selectFiles = (image) =>{
             setImages(image)
    }


      
   const savedemande = (a) => {
        console.log(images);
        a.preventDefault();
        let demande = {user_id:id, adresse, categorie,date,description, paiement,  sousCategorie, statut, titre,ville};
        var data = new FormData();
        data.append('demande',  JSON.stringify(demande));
        for (let i = 0; i < images.length; i++) {
          data.append(`files`, images[i])
        }
        adddemande(data).then(res =>{
                  Swal.fire(
                    {
                        title: 'Demande envoyée',
                        text: 'Votre demande sera traitée dans les meilleurs délais.',
                        icon: 'success',
                        confirmButtonColor: '#1d314a',
                        confirmButtonText: 'OK',
                    }
                  );
                });
                history.push("/");
        }
 
    return(

<div className="Container" className="bg-light text-dark box">
<CarouselElect/> 
<br/> 
<Row>
  <Col>
  <Title className="text-danger text-center" level={3}>Exprimez votre besoin</Title>
<div style={{ marginLeft: 40, marginTop:10, marginBottom:100}} >
  <Form>

  <Form.Group>
    <Form.Select defaultValue="Sous-catégorie" onChange={(event) => { 
      console.log(event.target.value)
      setSousCategorie(event.target.value); }}>
        <option>Choisissez une catégorie...</option>
        <option>Panne de courant</option>
        <option>Prise électrique</option>
        <option>Lustre et applique murale et spots</option>
        <option>Tableau électrique</option>
        <option>Autre</option>
      </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3">
    <br/>
    <Form.Control type="text" placeholder="Objet*"  onChange={(event) => {  
       console.log(event.target.value);
       setTitre(event.target.value); }}/>
  </Form.Group> 
    <Row>
    <Form.Group as={Col} >
    <Form.Select defaultValue="ville" style={{width:220}}  onChange={(event) => { 
      console.log(event)
      setVille(event.target.value); }} >
        <option>Choisissez une ville </option>
        <option>Tanger</option>
        <option>Tetouan</option>
        <option>Martil</option>
        <option>Mdiq</option>
        <option>Fnideq</option>
        <option>Assilah</option>
        <option>Chefchaouen</option>
        <option>Ksar Sghir</option>

      </Form.Select>
  </Form.Group>
  <Form.Group as={Col} >
    <Form.Control type="text" placeholder="Adresse*" style={{width:370}} onChange={(event) => { 
       console.log(event.target.value)
       setAdresse(event.target.value); }}  />
  </Form.Group>
  </Row>
<br/>

  <Form.Group className="mb-3">
  <FloatingLabel controlId="floatingTextarea2" label="Description*"  onChange={(event) => {  
    console.log(event.target.value);
     setDescription(event.target.value); }}>
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '200px' }}
    />
  </FloatingLabel>
  </Form.Group>  



    <br></br>

 
  <Form.Group controlId="formFile" className="mb-3">

    <Form.Control type="file" name ="images" multiple accept=".png, .jpg, .jpeg" onChange={(event) => {
      console.log(event.target.files);
      selectFiles(event.target.files)} }/>
  </Form.Group>
<br></br>
<Row>

<Form.Group as={Col} >
<br/>
    <Form.Select defaultValue="paiement"  onChange={(event) => { 
       console.log(event.target.value)
       setPaiement(event.target.value); }} >
       <option>Mode de paiement</option>
        <option>Carte bancaire</option>
        <option>En espèces</option>
      
    </Form.Select>
</Form.Group>
  <Col>
<Button style={{marginLeft:"32%", marginTop:"8%",width:"200px"}} type="primary" shape="round" onClick={savedemande} size='large' danger>
                        Envoyer<ArrowRightOutlined />
 </Button>
 </Col>
 </Row>
</Form>

  
</div>

</Col>
<Col>
<div style={{ marginLeft: "2%",  marginBottom:100, width:"100%"}}>
{/* <img src={image} style={{ height:300, width:"95%"}}/> */}


<Typography>
<Title className="text-danger text-center" level={3}>Nos prestations</Title>
<Divider />
<Title className="text-secondary" level={5}> Panne de courant</Title>
    <Paragraph>
    Diagnostic de panne électrique : Vérification du tableau électrique et du réseau électrique domestique, détermination de l'origination de la panne, 
    résolution de la panne.
    </Paragraph>
    <Divider />
    <Title className="text-secondary" level={5}> Remplacement ou réparation de prise électrique</Title>
    <Paragraph>
    Remplacement ou réparation de prise électrique (jusqu'à 2) hors fourniture - Possibilité 
    de fournir des prises électriques étanches IP55 par exemple.
    </Paragraph>
    <Divider />
    <Title className="text-secondary" level={5}> Nouvelle installation de prise électrique</Title>
    <Paragraph>
    Ajout d'une prise électrique avec pose encastrée ou apparente : Raccordement à une source électrique proche inférieure à 3 mètres linéaires, pose de la prise électrique hors fourniture, 
    fixation de goulotte ou du passage de cable dans le mur.
</Paragraph>
    <Divider />
    <Title className="text-secondary" level={5}> Nouvelle installation électrique</Title>
    <Paragraph>
    Nouvelle installation électrique (travaux d'éclairage/électricité), Travaux manuels de câblage, installation et pose de nouveaux appareils électrique et d'éclairage,
     Raccordement et câblage inclus.
</Paragraph>
    <Divider />
</Typography>

</div>
</Col>
</Row>
<BackTop>
<div style={{ height: 40,
  width: 50,
  lineHeight: '40px',
  borderRadius: 60,
  backgroundColor: 'red',
  opacity: 0.7,
  color: '#fff',
  textAlign: 'center',
  }}><ArrowUpOutlined /></div>
    </BackTop>

</div>
    )

};
