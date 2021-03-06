import React, { useState, Fragment } from 'react'

import '../styles/App.css';
import '../styles/contact.css';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { Linkedin } from 'react-bootstrap-icons'
import { EnvelopeFill } from 'react-bootstrap-icons'
import { FileEarmarkPersonFill } from 'react-bootstrap-icons'

import {init,send} from 'emailjs-com'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ReCAPTCHA from 'react-google-recaptcha'
import Footer from '../components/footer.js'

import resume from '../resume/resume.pdf'


function Contact() {
  const { register, errors, handleSubmit, reset } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    sendEmail(data, e);
  }

  const [recaptchaError, setRecapError] = useState(false)
  const [sendSuccess, msgSent] = useState(false)

  init("user_a6P09OEwRwJqn9dXYGn75");


  function sendEmail(data, e){
    var info = {
      from_name: data.name,
      from_email: data.email,
      message: data.message
    }
    send('gmail', 'EMAIL_TEMPLATE', info, 'user_a6P09OEwRwJqn9dXYGn75')
      .then((result) => {
        msgSent(true)
        setRecapError(false)
        e.target.reset()
      }, (error) => {
          if((/\brecaptcha\b/gi).test(error.text)){setRecapError(true)}
          console.log(error.text)
      });
    }

    return(
      <>
      <div className='content'>
        <div className='container shadow bg-white padding'>
          <Row>
            <Col>
              <h1 className='my-3 text-center'>Let's Get In Touch</h1>
              <hr/>
            </Col>
          </Row>

          <Row>
            <Col xs={2}>
            </Col>

            <Col xs={4} className='text-center'>
              <OverlayTrigger
                key='left'
                placement='left'
                overlay={
                  <Tooltip id='tooltip-bottom'>
                    LinkedIn
                  </Tooltip>
                }
                >
                <a href='https://www.linkedin.com/in/a-greenwell/'>
                  <Linkedin color='#7691c0' size={38} />
                </a>
              </OverlayTrigger>
              <h6 className='link-label'> LinkedIn </h6>
            </Col>

            <Col xs={4} className='text-center'>

            <OverlayTrigger
              key='right'
              placement='right'
              overlay={
                <Tooltip id='tooltip-bottom'>
                  Resume
                </Tooltip>
              }
              >
              <a href={resume} target='_blank'>
                <FileEarmarkPersonFill color='#7691c0' size={38} />
              </a>
            </OverlayTrigger>

              <h6 className='link-label'> Resume </h6>
            </Col>

            <Col xs={2}>
            </Col>
          </Row>
          <hr/>

          <div className='container-fluid'>
            <div className='shadow jumbotron contact'>
              <Alert className={`text-center ${ sendSuccess ? '' : 'd-none'}`} variant='success'>
                Success! Your message has been sent
              </Alert>
              <Form onSubmit={handleSubmit(onSubmit)} className='row'>
                <Col lg={12}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name<small className='req-tag'>(Required)</small></Form.Label>
                    <ErrorMessage className="invalid-feedback" name="name" errors={errors}
                      render={({ message }) =>
                         <p className='flex-left error-msg'>{message}</p>
                      }
                    />
                    <input
                      name='name'
                      placeholder='Enter name'
                      className={`form-control ${
            						errors.name ? "is-invalid" : ""
            					}`}
                      ref={register({
                        required: 'Please enter your name',
                        minLength: {
                          value: 3,
                          message: 'Name must be minimum three (3) characters'
                        },
                        maxLength: {
                          value: 25,
                          message: 'Name cannot exceed twenty-five (25) characters'
                        },
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: 'Invalid characters, '
                        }
                        })}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address <small className='req-tag'>(Required)</small></Form.Label>
                    <ErrorMessage className="invalid-feedback" name="email" errors={errors}
                      render={({ message }) =>
                          <p className='flex-left error-msg'>{message}</p>
                      }
                    />
                    <input
                      name='email'
                      placeholder='Enter email'
                      className={`form-control ${
            						errors.email ? "is-invalid" : ""
            					}`}
                      ref={register({
                        required: 'Please enter your email',
                        pattern: {
              						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              						message: "Invalid email address format"
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Text className="text-muted text-center">
                    I'll never share your data with anyone else.
                  </Form.Text>
                </Col>
                <Col lg={12}>
                  <Form.Group controlId="formMsg">
                    <Form.Label className='mt-2'>Message <small className='req-tag'>(Required) *Max 500 characters*</small></Form.Label>
                    <ErrorMessage className="invalid-feedback" name="message" errors={errors}
                      render={({ message }) =>
                          <p className='flex-left error-msg'>{message}</p>
                      }
                     />
                    <textarea
                      rows='5'
                      name='message'
                      maxLength='500'
                      className={`form-control ${
            						errors.message ? "is-invalid" : ""
            					}`}
                      ref={register({
                        required: 'Please enter a message',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters long'
                        }
                      })}
                    />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  {
                    recaptchaError ?
                        <p className="error-msg text-center">
                          Please complete ReCAPTCHA
                        </p>
                    :
                     ''
                  }
                  <ReCAPTCHA sitekey='6LfMHV4aAAAAACwEKBQQLzoE2KZ-2k0bKlP2rf64' className='recaptcha'/>
                </Col>
                <Col lg={12} className='text-center'>
                  <Form.Group>
                    <Button className='submit mt-3' type="submit">
                      Submit
                    </Button>
                  </Form.Group>
                </Col>
              </Form>

            </div>
          </div>

        </div>
      </div>
      <Footer/>
      </>
    )
}

export default Contact;
