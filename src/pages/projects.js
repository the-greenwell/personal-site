import React, { Component, Fragment } from 'react'
import '../styles/App.css';
import '../styles/projects.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Footer from '../components/footer.js'

import personalProj from '../photos/personalProj.png'
import kanyeProj from '../photos/KanyeProj.png'
import junketProj from '../photos/JunketProj.png'
import trackerProj from '../photos/TrackerProj.png'

class Projects extends Component {
  render(){
    return(
      <>
      <div className='content'>
        <div className='container shadow bg-white pb-1'>
          <Row className='mb-3' >
            <Col>
              <h1 className='my-3 text-center'>Previous Project-a-rinos</h1>
              <hr/>
            </Col>
          </Row>
          <div className='container'>
            <Row className='jumbotron'>
              <Col xs={12} lg={4} className='text-center'>
                <Image className='proj-pic' src={personalProj} thumbnail/>
              </Col>
              <Col>
                <h3 className='proj-title'>Personal Portfolio</h3>
                <p className='proj-skills h6 my-3'>HTML5, React, CSS, Bootstrap, AWS</p>
                <p className='proj-desc h5'>My personal webpage designed and developed by me! This page is completely responsive and was coded using javascript through the React framework, styled using the Bootstrap CSS framework, and deployed using AWS (Amazon Web Services).</p>
              </Col>
            </Row>
            <Row className='jumbotron'>
              <Col xs={12} lg={4} className='text-center'>
                <Image className='proj-pic' src={trackerProj} thumbnail/>
              </Col>
              <Col>
                <h3 className='proj-title'>Full Stack MEAN App w/ User Authorization</h3>
                <p className='proj-skills h6 my-3'>Angular, Express, Mongodb, Node, Bootstrap</p>
                <a className='proj-link btn mb-3' href='https://github.com/the-greenwell/job-tracker'>Link to GitHub</a>
                <p className='proj-desc h5'>Built on a MongoDB, Express, and Node backend with an Angular frontend. Full functioning web app that helps keep track of job applications!</p>
              </Col>
            </Row>
            <Row className='jumbotron'>
              <Col xs={12} lg={4} className='text-center'>
                <Image className='proj-pic' src={kanyeProj} thumbnail/>
              </Col>
              <Col>
                <h3 className='proj-title'>Kanye West Music Tribute Page</h3>
                <p className='proj-skills h6 my-3'>HTML5, jQuery, CSS, Bootstrap</p>
                <a className='proj-link btn mb-3' href='https://codepen.io/agreenwell2/full/oNXPrZo'>Link to Project</a>
                <p className='proj-desc h5'>HTML project I created for fun. Showcases Kanye West's albums and the track list for each. Uses Bootstrap for layout, CSS for animations, and jQuery for logic.</p>
              </Col>
            </Row>
            <Row className='jumbotron'>
              <Col xs={12} lg={4} className='text-center'>
                <Image className='proj-pic' src={junketProj} thumbnail/>
              </Col>
              <Col>
                <h3 className='proj-title'>Travel Tips Project Site</h3>
                <p className='proj-skills h6 my-3'>HTML5, Ruby on Rails, CSS, MaterialDesign, User Authentication</p>
                <a className='proj-link btn mb-3' href='https://vast-falls-69882.herokuapp.com/'>Link to Project</a>
                <p className='proj-desc h5'>A travel project I collaborated on while at General Assembly. I was in charge of the website layout and design, but also offered help in the user authentication process and with coding the database models.</p>
              </Col>
            </Row>
            <Row className='jumbotron'>
              <Col className='text-center'>
              <h2> More Projects Coming Soon! </h2>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
}

export default Projects;
