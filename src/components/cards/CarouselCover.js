import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import cover3 from "../../images/cover3.jpeg";
import cover1 from "../../images/cover1.jpg";
import cover2 from "../../images/cover2.jpg";
import { color } from '@mui/system';
import Jumbotron from "./Jumbotron";

export class CarouselCover extends Component {
    render() {
        return (
            <div className="cover">
                <Carousel>
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100"
                            src={cover3}
                            alt="First slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <div style={{ color:"#000000", background: "#FFF" , opacity: "0.6", fontSize: "35px"}}><br/>
                         <b><Jumbotron text={["Bricole? Comptez sur nous","Reposez-vous, nos experts s'occupent de tout", "Votre partenaire pour bien faire"]} /></b>
                        <br/>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                     
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100"
                            src={cover2}
                            alt="Second slide"
                            height="600px"
                        />
                        <Carousel.Caption>
                        <div style={{ color:"#000000", background: "#FFF" , opacity: "0.6", fontSize: "35px"}}><br/>
                         <b><Jumbotron text={["Bricole? Comptez sur nous","Reposez-vous, nos experts s'occupent de tout", "Votre partenaire pour bien faire"]} /></b>
                        <br/>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={6000}>
                        <img
                            className="d-block w-100"
                            src={cover1}
                            alt="Third slide"
                            height="600px"
                        />
                       <Carousel.Caption>
                        <div style={{ color:"#000000", background: "#FFF" , opacity: "0.6", fontSize: "35px"}}><br/>
                         <b><Jumbotron text={["Bricole? Comptez sur nous","Reposez-vous, nos experts s'occupent de tout", "Votre partenaire pour bien faire"]} /></b>
                        <br/>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                </Carousel> 
            </div>
        )
    }
}

export default CarouselCover;
