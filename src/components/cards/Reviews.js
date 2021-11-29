import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Reviews = () => {

          return (
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6000}
            >
              <div>
              <Avatar size={100} icon={<UserOutlined />} />
                <div className="myCarousel" style={{marginTop:-35}}>
                  <h3>Malak A.</h3>
                  <p>
                  Je suis hyper contente d'avoir découvert ce service. Dimanche, jour de l'aid, 
                  une équipe hyper réactive et un professionnel efficace qui respecte toutes les mesures
                   d'hygiène, je recommande à 1000 %
                  </p>
                </div>
              </div>
      
              <div>
              <Avatar size={100} style={{ backgroundColor: '#fde3cf' }} icon={<UserOutlined />} />
                <div className="myCarousel"  style={{marginTop:-35}}>
                  <h3>Mohamed S.</h3>
                  <p>
                  Rapidité et transparence sur les prix, je suis fan de Bin Idik. J'ai laissé des travaux en suspens pendant des mois 
                  parce que je ne trouvais pas de professionnels de confiance. 
                  Un seul message et j'ai enfin pu exécuter TOUS les petits travaux avec moindre coût !
                  </p>
                </div>
              </div>
      
              <div>
              <Avatar size={100} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <div className="myCarousel" style={{marginTop:-35}}>
                  <h3>Amina L.</h3>
                  <p>
                  Prix abordables, équipe très professionnelle avec un SAV au top !
                   Enfin un prestataire qui assure une garantie sur les travaux !
                 Je recommande vivement.
                  </p>
                </div>
              </div>
              <div>
              <Avatar size={100} icon={<UserOutlined />} />
                <div className="myCarousel" style={{marginTop:-35}}>
                  <h3>Said B.</h3>
                  <p>
                  Super service, rapide et respectant le devis. Dès que j’ai un petit soucis à régler à la maison je fais appel à eux et c’est réglé en 24h ! 
                  Lm3elmin envoyés sont très pros, courtois et efficaces. Merci Bin Idik !!
                  </p>
                </div>
              </div>
            </Carousel>

          );
        }

export default Reviews;