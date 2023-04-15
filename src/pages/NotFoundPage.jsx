import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import notfoundpage from '../img/pagenotfound.jpg'

const NotFoundPage = () => {
  return (
     <>
      <Nav />

       <div className='errorbox'>
            <NavLink to='/home'>
                  <img src={notfoundpage} alt='error' />
            </NavLink>
       </div>

      <Footer />
     </>
  )
}

export default NotFoundPage