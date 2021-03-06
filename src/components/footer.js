import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../styles/footer.css'

class Footer extends Component {
  render(){
    return(
      <div className='footer'>
        <Row>
          <Col></Col>
          <Col xs={3} className='text-center'>
            <h6>Freelance Web Developer</h6>
          </Col>
          <Col xs={3} className='text-center'>
            <h6>Frontend Web Developer</h6>
          </Col>
          <Col xs={3} className='text-center'>
            <h6>Full Stack Web Developer</h6>
          </Col>
          <Col></Col>
        </Row>
      </div>
    )
  }
}

export default Footer;
