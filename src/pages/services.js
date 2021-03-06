import React, { Component, Fragment } from 'react'
import '../styles/App.css';
import '../styles/services.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Footer from '../components/footer.js'

import { Pencil } from 'react-bootstrap-icons'
import { CodeSlash } from 'react-bootstrap-icons'
import { ArrowRepeat } from 'react-bootstrap-icons'


class Services extends Component {
  render(){
    return(
      <>
      <div className='content'>
        <div className='container shadow bg-white'>
          <Row className='mb-1' >
            <Col>
              <h1 className='my-3 text-center'>Freelance Web Developer Services</h1>
              <hr/>
            </Col>
          </Row>
          <h3 className='text-center mb-4'>The Process</h3>
          <Row>
            <Col lg={4}>
              <Card className='info-card shadow bg-white text-center mb-4'>
                <Pencil color='#7691c0' size={140} className='info-pic'/>
                <Card.Body>
                  <Card.Title className='card-title'>Design</Card.Title>
                  <Card.Text className='card-desc'>
                    This is the first step. I work with you to get an understanding of what your website needs to properly display your brand or buisness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className='info-card shadow bg-white text-center mb-4'>
                <CodeSlash color='#7691c0' size={140} className='info-pic'/>
                <Card.Body>
                  <Card.Title className='card-title'>Develop</Card.Title>
                  <Card.Text className='card-desc'>
                    Each Line of code is then planned out and written with optimization and user experience in mind. I use SEO best practices to make sure your brand is seen.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className='info-card shadow bg-white text-center'>
                <ArrowRepeat color='#7691c0' size={140} className='info-pic'/>
                <Card.Body>
                  <Card.Title className='card-title'>Maintain</Card.Title>
                  <Card.Text className='card-desc'>
                    If you need a change made to your site, I'm the one to call. Updating, adding to, or even completely remodling your site is as easy as sending me an email.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row className='my-3' >
            <Col>
              <hr/>
              <h3 className='my-3 text-center underlined'>Services Offered</h3>
              <hr/>
            </Col>
          </Row>
          <Row className='container mb-3' >
            <Col>
              <ul>
                <li className='service'>Website Design and Development</li>
                <li className='service'>Code Debugging (JavaScript / CSS / HTML)</li>
                <li className='service'>Personal Websites for Entrepenuers, Bands, Artists, etc.</li>
                <li className='service'>Small Buisness Website for Restaurants etc.</li>
                <li className='service'>Landing Page for Brand or Buisness</li>
                <li className='service'>SEO Implementation</li>
              </ul>
            </Col>
          </Row>
          <Row className='mb-3' >
            <Col>
              <hr/>
              <h3 className='mb-3 text-center underlined'>F A Q</h3>
              <hr/>
            </Col>
          </Row>
          <div className='container faq'>
          <Accordion className='shadow'>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                What is your rate?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>My average rate is $55 an hour. This can vary based on the complexity of the project.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                How long does a project take?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Projects typically take 2 to 4 weeks to complete after the collabrative design stage. Any additional time required will be discussed and priced accordingly.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                How do you accept payment?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>I accept payment via PayPal and Venmo.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
}

export default Services;
