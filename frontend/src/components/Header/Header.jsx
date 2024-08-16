import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import 'C:/Users/Acer/Downloads/MernStack-Tour-Management-main/MernStack-Tour-Management-main/tour-management/frontend/src/App.css'
import 'C:/Users/Acer/Downloads/MernStack-Tour-Management-main/MernStack-Tour-Management-main/tour-management/frontend/src/Styling/header.css'
import logo from 'C:/Users/Acer/Downloads/MernStack-Tour-Management-main/MernStack-Tour-Management-main/tour-management/frontend/src/images/LOGO.png'

const nav_links =[
  {
    path:'/Home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
]
const Header = () => {
    return <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
           {/* ================= logo ===============*/} 
           <div className='logo'>
            <img src={logo} alt="not avaliable" />
            
           </div>
           {/* ================= logo end ===============*/} 
           {/* ================= menu Start ===============*/} 
           <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              
                {nav_links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink to={item.path}
                    className={navClass =>
                      navClass.isActive ? "active__link": ""
                    }
                    >
                      {item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
           </div>
           {/* ================= menu end ===============*/} 
           <div className="nav_right d-flex align-items-center gap-4">
            <div className='nav_btnsd-flex align-items-center gap-4'>
                <Button className='btn secondary__btn'><Link to="/Login"> Login </Link></Button>
                <Button className='btn primary__btn'><Link to="/Register"> Register </Link></Button>
            </div>

            <span className="mobile__menu">
              <i class='ri-menu-line'></i>
            </span>
           </div>
          </div>
        </Row>
      </Container>
    </header>
  
};

export default Header;