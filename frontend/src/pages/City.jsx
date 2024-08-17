import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import '../Styling/city.css'; // Import the CSS file

// Importing the city images
import MumbaiImage from '../images/Mumbai.jpg';
import DelhiImage from '../images/Delhi.jpg';
import BangaloreImage from '../images/Banglore.jpg';
import ChennaiImage from '../images/Chennai-City-Tour.jpg';
import KolkataImage from '../images/KOLKATA.jpg';
import HyderabadImage from '../images/Hyderabad.jpeg';
import PuneImage from '../images/Pune.jpeg';
import AhmedabadImage from '../images/Ahmedabad.jpeg';

const cities = [
  { name: 'Mumbai', image: MumbaiImage, description: 'The financial capital of India, known for its bustling lifestyle and iconic landmarks.' },
  { name: 'Delhi', image: DelhiImage, description: 'The capital city of India, rich in history and culture with many monuments and sites.' },
  { name: 'Bangalore', image: BangaloreImage, description: 'The Silicon Valley of India, known for its IT industry and pleasant weather.' },
  { name: 'Chennai', image: ChennaiImage, description: 'A major cultural, economic, and educational center in South India.' },
  { name: 'Kolkata', image: KolkataImage, description: 'The cultural capital of India, known for its arts, literature, and festivals.' },
  { name: 'Hyderabad', image: HyderabadImage, description: 'Known for its historical sites and as a hub for the IT industry.' },
  { name: 'Pune', image: PuneImage, description: 'A vibrant city known for its educational institutions and pleasant climate.' },
  { name: 'Ahmedabad', image: AhmedabadImage, description: 'A city with a rich history, known for its textiles and architectural heritage.' }
];

const CityPage = () => {
  return (
    <Container className="my-5">
      <Row>
        {cities.map((city, index) => (
          <Col lg="4" md="6" sm="12" className="mb-4" key={index}>
            <Card>
              <CardImg top width="100%" src={city.image} alt={city.name} />
              <CardBody>
                <CardTitle tag="h5">{city.name}</CardTitle>
                <CardText>{city.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CityPage;
