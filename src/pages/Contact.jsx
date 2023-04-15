import React from 'react'
import 'animate.css';
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Contact = () => {

     const { t } = useTranslation();

  return (
    <>
    <Nav />

      <div className='contactpage'>

           <div className='contactbg'>
                <div className='layout'>
                     <h1 className='animate__animated animate__bounceIn'>{t("contact.h1")}</h1>
                </div>
           </div>

           <div className='line'></div>


           <div className='formbox'>

                <div className='main-box'>

                     <div className='contactform '>
                          <div className='h2box'>
                               <h2 className='animate__animated animate__fadeIn'>{t("contact.h2")}</h2>
                          </div>

                          <div className='form'>
                              <form action="https://formsubmit.co/emin.abdullayev.1998@gmail.com" method="POST">
                               <div className='textinput'>
                                   <input name="name" type='text' placeholder={t("contact.placeholder1")} required />
                               </div>
                               <div className='emailinput'>
                                   <input name="email" type='email' placeholder={t("contact.placeholder2")} required />
                               </div>
                               <div className='subjectinput'>
                                   <input name="subject" type='text' placeholder={t("contact.placeholder3")} required />
                               </div>
                               <div className='textareainput'>
                                    <textarea name="message" placeholder={t("contact.placeholder4")} required></textarea>
                               </div>
                               <div className='sendbtn'>
                                   <button type='submit'>{t("contact.button")}</button>
                               </div>
                              </form>
                          </div>
                     </div>


                     <div className='infobox'>
                          <div className='h2box'>
                               <h2 className='animate__animated animate__fadeIn'>{t("contact.h3")}</h2>
                          </div>

                          <div className='text'>
                               <p className='animate__animated animate__fadeIn'>{t("contact.p1")}</p>
                          </div>

                          <div className='phone'>
                               <p className='animate__animated animate__fadeIn'>8 800 234 56 78</p>
                          </div>

                          <div className='email'>
                               <p className='animate__animated animate__fadeIn'>support@flixgo.com</p>
                          </div>

                          <div className='social'> 
                              <a href='https://www.facebook.com/netflix/' target="_blank" rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a>
                              <a href='https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw' target="_blank" rel='noreferrer'><i className="fa-brands fa-youtube"></i></a>
                              <a href='https://www.instagram.com/netflix/?hl=en' target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                              <a href='https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>
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

export default Contact