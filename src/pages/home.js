import React, { Component } from 'react'
import '../styles/home.css'
import '../styles/App.css';

class Home extends Component {
  render(){
    return(
      <div className='home content'>
        <div className='home-info'>
          <h1>DREAM IT.</h1><h1>DESIGN IT.</h1><h1>DEVELOP IT.</h1>
        </div>
      </div>
    )
  }
}

export default Home;
