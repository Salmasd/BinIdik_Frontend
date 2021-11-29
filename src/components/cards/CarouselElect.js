import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import cover1 from "../../images/elect.jpg";
import cover2 from "../../images/elect2.jpg";
import { color } from '@mui/system';


export class CarouselElect extends Component {
    render() {
        return (
            <div className="cover">
                <Carousel>
                    {/* <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100"
                            src={cover1}
                            alt="First slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <div style={{ background:"#000000",color: "#FFF", opacity: "0.6", fontSize: "35px"}}><br/>
                         <b><p>Bienvenu au service électricité </p></b>
                         <b><p>Trouvez Votre expert reconnu pour le dépannage d'électricité</p></b>
                        <br/>
                        </div>
                        <br/><br/><br/><br/>
                        </Carousel.Caption>
                     
                    </Carousel.Item> */}
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100"
                            src={cover2}
                            alt="First slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <div style={{  backgroundColor: "rgba(0, 0, 0,0.65)", fontSize: "35px"}} ><br/>
                         <b><p>Trouvez Votre expert reconnu pour le dépannage d'électricité</p></b>
                        <br/>
                        </div>
                        <br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                     
                    </Carousel.Item>
                </Carousel> 
            </div>
        )
    }
}

export default CarouselElect;
