import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import logo from '../img/logo.png'

const Signin = () => {

     const [isLoggedIn, setIsLoggedIn] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const handleLogin = (e) => {
          
          e.preventDefault();
          // Here you would typically make an API call to validate the user's credentials
          if (email === 'emin@gmail.com' && password === 'emin') {
               localStorage.setItem('isLoggedIn', true);
               localStorage.setItem('userEmail', email); // store user's email in local storage
               setIsLoggedIn(true);
          }
     };

     const handleLogout = () => {
          localStorage.removeItem('isLoggedIn');
          setIsLoggedIn(false);
          setEmail('');
          setPassword('');
     };

     useEffect(() => {
          const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
          if (storedIsLoggedIn) {
            setIsLoggedIn(true);
            const storedEmail = localStorage.getItem('userEmail');
            setEmail(storedEmail);
          }
     }, []);

     const { t } = useTranslation();

  return (
    <>
     <Nav />

      <div className='signinbox'>

           <div className='main-box'>

               {isLoggedIn ? (
                  <div className='test'>
                    <p>Welcome  <span>{email}</span>!</p>
                    <button onClick={handleLogout}>Log out</button>
                  </div>
               ):(
                    <div className='formbox'>
                         <div className='logo'>
                             <img src={logo} alt='error' />
                         </div>
     
                         <div className='email'>
                              <div className='inputbox'>
                                  <input type='email' placeholder={t('signin.placeholder1')} value={email} onChange={(e) => setEmail(e.target.value)} />
                              </div>
                         </div>
     
                         <div className='password'>
                              <div className='inputbox'>
                                  <input type='password' placeholder={t('signin.placeholder2')} value={password} onChange={(e) => setPassword(e.target.value)}/>
                              </div>
                         </div>
     
                         <div className='checkbox'>
                              {/* <input type='checkbox' />
                              <label>Remember Me</label> */}
                              <label className="main">{t('signin.label')}
                                  <input type="checkbox" />
                                  <span className="geekmark"></span>
                              </label>
                         </div>
     
                         <div className='button'>
                              <button type='submit' onClick={handleLogin}>{t('signin.button')}</button>
                         </div>
     
                         <div className='signup'>
                              <p>{t('signin.p')} <NavLink to='/signup'>{t('signin.a1')}</NavLink> </p>
                         </div>
     
                         <div className='forgotpass'>
                              <NavLink to='/forgotpassword'>{t('signin.a2')}</NavLink>
                         </div>
                    </div>
                 )
               }


           </div>

      </div>

     <ScrollToTop
        bgColor='#FF6E31'
        strokeFillColor='#FF6E31'
        offsetTop={450}
     />

     <FloatingWhatsApp 
        phoneNumber='+994514284703' 
        accountName='Emin' 
        chatMessage='Salam! 🤝 Biz necə kömək edə bilərik?' 
        darkMode='true'
        allowClickAway='true'
        placeholder='Mesaj yaz'
        statusMessage='Adətən 1 saat ərzində cavab verir'
        avatar={Emin}
        notification='true'
        notificationSound='true'
        notificationDelay={10}
     />
      
     <Footer />
    </>
  )
}

export default Signin