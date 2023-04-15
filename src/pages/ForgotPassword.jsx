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

const ForgotPassword = () => {

     const { t } = useTranslation();

  return (
    <>
    <Nav />
    
      <div className='forgotpassbox'>

          <div className='main-box'>

                <div className='formbox'>
                    <div className='logo'>
                         <img src={logo} alt='error' />
                    </div>

                    <div className='email'>
                          <div className='inputbox'>
                              <input type='email' placeholder={t('forgotpassword.placeholder')} />
                          </div>
                    </div>

                    <div className='privacy'>
                          <label className="main">{t('forgotpassword.label')} <NavLink to='#'>{t('forgotpassword.a')}</NavLink>
                              <input type="checkbox" />
                              <span className="geekmark"></span>
                          </label>
                    </div>

                    <div className='button'>
                        <button type='submit'>{t('forgotpassword.button')}</button>
                    </div>

                    <div className='info'>
                         <p>{t('forgotpassword.p')}</p>
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

export default ForgotPassword