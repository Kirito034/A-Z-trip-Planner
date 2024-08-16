import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap"; 

import weatherImg from '../images/weather.png'
import guideImg from '../images/guide.png'
import customizationImg from '../images/customization.png'

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "WWW"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Gudie",
        desc: "WWW"
    },
    {
        imgUrl: customizationImg, 
        title: "Custimization",
        desc: "WWW"
    },
]
const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList;