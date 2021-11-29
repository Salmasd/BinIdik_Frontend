import React from 'react';
import '../App.css';
import CarouselCover from '../components/cards/CarouselCover';
import ServiceCard from '../components/cards/ServiceCard';
import Reviews from '../components/cards/Reviews';
import Description from '../components/cards/Description';
import { BackTop } from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons';
import { Divider } from 'antd';
import Blog from '../components/cards/Blog';



function Home () {

 
    return (
        <div>
            <CarouselCover/>
            <br/><br/><br/>
            <h5 className="text-center text-danger p-3 mt-5 mb-5 display-3 bg-light">
            Nos Services
            </h5>
            <br/><br/><br/>
            <ServiceCard/>
            <br/><br/>
            <Divider />
            <br/>      
            <Description/>
            <br/> <br/>
            <h5 className="text-center text-danger p-3 mt-5 mb-5 display-3 bg-light">
            Nos Blogs
            </h5>
           
            <br/><br/>
            <Blog/>
            <br/><br/>
            <Divider /><br/><br/>
            <b><h3 className="text-center text-danger" >
            Ce qu'ils pensent de nous
            </h3></b>
            
            <div style={{width:"40%", marginLeft:"30%"}} >
            <p className="text-center" >Nous nous efforçons de fournir le meilleur service
               possible à chacun de nos clients, c'est ce qui nous
               anime et nous fait sourire.
            </p>
            </div>
            <br/><br/>
            <Reviews/>
            <br/><br/><br/>

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
}

export default Home ;