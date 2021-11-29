import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {getMesdemande,getDemande} from '../functions/Demande'
import Moment from 'react-moment';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Typography} from 'antd';
import { Steps,Image,Modal } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined,  CheckCircleOutlined  } from '@ant-design/icons';
import Comment from "../components/forms/Comment";


const Mesdemandes = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const { Title, Paragraph, Text, Link } = Typography;
const { user } = useSelector((state) => ({ ...state }));
const [demandes, setDemandes] = useState([]);
const { Step } = Steps;
  const [demande, setDemande] = useState([]);
  const [images, setImages] = useState([]);
  
  const id = localStorage.getItem("id") ;
  const role = localStorage.getItem("role") ;
  const nom = localStorage.getItem("nom") ;
  const prenom = localStorage.getItem("prenom") ;
  const email = localStorage.getItem("email") ;
  const tel = localStorage.getItem("tel") ;

  useEffect(() => {
    loadDemande(id);
  }, []);

  const loadDemande = (id) =>{
    getDemande(id).then((c) =>{
      console.log("images",c.data.images);
      setDemande(c.data)
      setImages(c.data.images);
    }); 
  };

  const showModal = (id) => {
    loadDemande(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
  let history = useHistory();


if(!id || role ==="admin"){
    history.push('/');
} 
useEffect(() => {
        
    getMesdemande(id).then((response) => {
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
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{prenom}{" "}{nom}</Paragraph>
            <Title level={5}>N° Téléphone</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-30}}>{tel}</Paragraph>
            <Title level={5}>Email</Title>
            <Paragraph className="text-secondary" style={{marginLeft:"60%", marginTop:-35}}>{email}</Paragraph>
           </Col>
             
                 
           
         {images &&(
           <Col  className="col-sm-4">
             <br/><br/>
           {/*   {images.map((i) =>
                   <Image style={{width:200, height:200}} preview={{ visible: false }}
                      src={"data:image/jpeg;base64,"+i.image+""}
                      key={i.id} 
                      onClick={() => setVisible(true)}
                      />  )} */}
                  <div >
                     <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                           
                           
                          { 
                           images.map((image) => 
                                <Image key={image.id} src={"data:image/jpeg;base64,"+image.image+""} />
                            )
                          }
                     </Image.PreviewGroup>
                     
                  </div> 
                     
                     </Col>
                     )}
                     </Row>
          </Modal>
         
         
         <div  style={{marginLeft:"3%", height:"500px"}}>
        <Row>
            <Col className="col-sm-8">   
    
            <div >
                <div >
                    <br/>
                <Typography>
                    <Title className="text-danger" level={4}> Bonjour {prenom}{" "}{nom}</Title>
                    <Title className="text-secondary" level={5}> suivre mes demandes</Title>
                 </Typography>  
                </div>    
            </div>
            <div >
                
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
                    columns={columns} dataSource={demandes} pagination={{ pageSize: 10 }} scroll={{ y: 240 }}  onClick={showModal}/>
          
            </div> 
            </Col>

            <Col className="col-sm-4">
              <div style={{marginRight:"4%"}} >
                <br/><br/><br/>
                <Comment/>
              </div>
            </Col>
            
    </Row>
    </div> 
        </>
    )
}
export default Mesdemandes;