import React from 'react';
import '../Styling/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../images/Hero1.jpeg';
import heroImg2 from '../images/Hero2.jpg';
import Indiaimg from '../images/Indiamap.jpg';
import Subtitle from './../shared/Subtitles';
import SearchBar from './../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import { Link } from 'react-router-dom'; // Import Link for routing
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* ============ Hero Section Start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={Indiaimg} alt="" />
                </div>
                <h1>Traveling opens the door to Yourself Creating <span className="highlight">memories</span></h1>
                <p>xyz</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroImg2} alt='' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* * <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col> *\
            ============ Hero Section End ============= */}

      {/* ============ Services Section Start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve?</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ============ Services Section End ============= */}

      {/* ============ Featured Tours Section Start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 '>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our Featured Tours</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ Featured Tours Section End ============= */}

      {/* ============ Cards Section Start ============= */}
      <section className="cards-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg='4' md='6' className="mb-4">
              <div className="card">
                <h3>Budget</h3>
                <p>Manage your travel budget efficiently.</p>
                <NavLink to="/searchform" className="btn btn-primary">Explore Budget</NavLink>
              </div>
            </Col>
            <Col lg='4' md='6' className="mb-4">
              <div className="card">
                <h3>Travel</h3>
                <p>Plan your travel itinerary and explore new destinations.</p>
                <NavLink to="/travelcard" className="btn btn-primary">Explore your travel options</NavLink>
              </div>
            </Col>
            <Col lg='4' md='6' className="mb-4">
              <div className="card">
                <h3>Cities</h3>
                <p>Discover the best cities to visit and explore.</p>
                <Link to="/cities" className="btn btn-primary">Explore Cities</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============ Cards Section End ============= */}
    </>
  );
};

export default Home;