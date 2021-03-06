import React, { Component, Fragment } from 'react'
import '../styles/App.css';
import '../styles/about.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Footer from '../components/footer.js'
import me from '../photos/me.png'


class About extends Component {
  render(){
    return(
      <>
      <div className='content'>
        <div className='container shadow bg-white'>
          <Row className='mb-3' >
            <Col>
              <h1 className='my-3 text-center'>A Little About Me</h1>
              <hr/>
            </Col>
          </Row>
          <div className='container'>
          <Row className='mb-3' >
            <Col lg={6} className="text-center mb-3">
              <Image src={me} className='img-thumbnail shadow about-image' />
            </Col>
            <Col lg={6}>
              <p className='about-desc'>My name is Anthony Greenwell & I'm a web developer from the San Francisco Bay Area.<br/><br/>I have experience working with both front end and back end software, but front end is my passion. I love to create thoughtful user interfaces and accessible user experiences.<br/><br/>I'm currently open to both freelance work and a full-time position!</p>
            </Col>
          </Row>
          <Row className='mb-3' >
            <Col>
              <hr/>
              <h3 className='mb-3 text-center underlined'>Technical Skills</h3>
              <hr/>
            </Col>
          </Row>
          <Row className='container tech-skills' >
            <Col lg={4}>
              <ul>
                <li className='skill'>HTML5</li>
                <li className='skill'>CSS Layout / Grids</li>
                <li className='skill'>CSS / SASS</li>
                <li className='skill'>JavaScript (ES6+)</li>
                <li className='skill'>JSON / XML</li>
                <li className='skill'>JQuery</li>
                <li className='skill'>React.js</li>
                <li className='skill'>Bootstrap</li>
                <li className='skill'>Express.js</li>
                <li className='skill'>Node.js</li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul>
                <li className='skill'>MongoDB</li>
                <li className='skill'>NPM</li>
                <li className='skill'>RESTful APIs</li>
                <li className='skill'>Adobe Photoshop</li>
                <li className='skill'>Adobe XD</li>
                <li className='skill'>User Interface Design</li>
                <li className='skill'>User Experience</li>
                <li className='skill'>Wireframing</li>
                <li className='skill'>Version Control (e.g. Git / Github)</li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul>
                <li className='skill'>Amazon Web Services(AWS)</li>
                <li className='skill'>Single Page Applications</li>
                <li className='skill'>Authorization & Authentication</li>
                <li className='skill'>Object-Oriented Programming</li>
                <li className='skill'>Browser Development Tools</li>
                <li className='skill'>Responsive Web Design</li>
              </ul>
            </Col>
          </Row>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

export default About;
