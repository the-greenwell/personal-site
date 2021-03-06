import React from 'react'
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Services from './pages/services.js'
import Navigation from './components/navigation.js'
import NotFound from './pages/notfound.js'
import { withRouter } from 'react-router'

function App() {
  const NaviWithRouter = withRouter(Navigation);
  return(
    <BrowserRouter className='root'>
      <NaviWithRouter />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/freelance' component={Services} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
