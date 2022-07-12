import React from 'react'
import Header from '../common/header/Header'
import { 
    BrowserRouter as Router,
    Switch,
    Route
} 

from "react-router-dom" ; 
import home from '../home/home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/Services';
import Pricing from '../pricing/Pricing';
import Contact from '../contact/Contact';
import Blog from '../blog/Blog';
import Login from '../home/login/Login';
import Booking from '../home/Booking/Booking';
import Register from '../home/register/Register';




  const pages = () => {
    return (
    <>  
    
    <Router>
      <Header/>
      <Switch>    
      <Route exact path='/' component={home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/pricing' component={Pricing} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/Booking' component={Booking} />
      </Switch>
      <Footer/> 
    
    </Router>

    </>
    )
  }
  
  export default pages