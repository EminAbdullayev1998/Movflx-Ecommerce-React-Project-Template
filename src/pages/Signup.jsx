import React from 'react'
import { NavLink } from 'react-router-dom'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import logo from '../img/logo.png'

const Signup = () => {

     const { t } = useTranslation();

  return (
    <>
     <Nav />

      <div className='signupbox'>

           <div className='main-box'>

                <div className='formbox'>
                     <div className='logo'>
                         <img src={logo} alt='error' />
                     </div>

                     <div className='name'>
                        <div className='inputbox'>
                            <input type='text' placeholder={t('signup.placeholder1')} />
                        </div>
                     </div>

                     <div className='email'>
                          <div className='inputbox'>
                              <input type='email' placeholder={t('signup.placeholder2')} />
                          </div>
                     </div>

                     <div className='password'>
                          <div className='inputbox'>
                              <input type='text' placeholder={t('signup.placeholder3')} />
                          </div>
                     </div>

                     <div className='checkbox'>
                          <label className="main">{t('signup.label')} <NavLink to='#'>{t('signup.a1')}</NavLink>
                              <input type="checkbox" />
                              <span className="geekmark"></span>
                          </label>
                     </div>

                     <div className='button'>
                          <button type='submit'>{t('signup.button')}</button>
                     </div>

                     <div className='info'>
                          <p>{t('signup.p')} <NavLink to='/signin'>{t('signup.a2')}</NavLink> </p>
                     </div>
                </div>

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

export default Signup