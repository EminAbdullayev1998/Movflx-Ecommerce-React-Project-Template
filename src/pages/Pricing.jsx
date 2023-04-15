import React from 'react'
import 'animate.css';
import { Link } from 'react-router-dom'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Pricing = () => {

     const { t } = useTranslation();

  return (
    <>
    <Nav />

     <div className='pricingpage'>

       <div className='pricingbg'>
            <h1 className='animate__animated animate__jackInTheBox'>{t("pricing.h1")}</h1>
       </div>

       <div className='line'></div>

       <div className='plans'>

            <div className='main-box'>

                 <div className='planbox1 animate__bounceIn'>
                      <div className='title'>
                           <p>{t("pricing.p1")}</p>
                           <p>{t("pricing.p2")}</p>
                      </div>

                      <div className='pricelist'>
                           <ul>
                              <li>{t("pricing.li1")}</li>
                              <li>{t("pricing.li2")}</li>
                              <li>{t("pricing.li3")}</li>
                              <li>{t("pricing.li4")}</li>
                              <li>{t("pricing.li5")}</li>
                           </ul>
                      </div>

                      <div className='boxbtn'>
                           <Link to='#'>{t("pricing.button")}</Link>
                      </div>
                 </div>

                 <div className='planbox2 animate__bounceIn'>
                      <div className='title'>
                           <p>Premium</p>
                           <p>$19.99</p>
                      </div>

                      <div className='pricelist'>
                           <ul>
                              <li>{t("pricing.li6")}</li>
                              <li>{t("pricing.li7")}</li>
                              <li>{t("pricing.li8")}</li>
                              <li>{t("pricing.li9")}</li>
                              <li>{t("pricing.li10")}</li>
                           </ul>
                     </div>

                     <div className='boxbtn'>
                         <Link to='#'>{t("pricing.button")}</Link>
                     </div>
                 </div>

                 <div className='planbox3 animate__bounceIn'>
                      <div className='title'>
                           <p>{t("pricing.p3")}</p>
                           <p>$39.99</p>
                      </div>

                      <div className='pricelist'>
                           <ul>
                              <li>{t("pricing.li11")}</li>
                              <li>{t("pricing.li12")}</li>
                              <li>{t("pricing.li13")}</li>
                              <li>{t("pricing.li14")}</li>
                              <li>{t("pricing.li15")}</li>
                           </ul>
                      </div>

                      <div className='boxbtn'>
                          <Link to='#'>{t("pricing.button")}</Link>
                      </div>
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

export default Pricing