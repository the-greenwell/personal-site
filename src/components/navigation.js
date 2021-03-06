import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

function Navigation(props) {
  const [expanded, setExpanded] = useState(false);
  const { location } = props;

  return(
    <Navbar expanded={expanded} expand='lg'>
      <Navbar.Brand className='nav-brand' as={Link} onClick={() => setExpanded(false)} to='/'><b>GREENWELL.DEV</b></Navbar.Brand>
      <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={location.pathname} className="ml-auto">
          <Nav.Link className='nav-link' as={Link} onClick={() => setExpanded(false)} to="/about">About</Nav.Link>
          <Nav.Link className='nav-link' as={Link} onClick={() => setExpanded(false)} to="/freelance">Freelance</Nav.Link>
          <Nav.Link className='nav-link' as={Link} onClick={() => setExpanded(false)} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link className='nav-link' as={Link} onClick={() => setExpanded(false)} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
