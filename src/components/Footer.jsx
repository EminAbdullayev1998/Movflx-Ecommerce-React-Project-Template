import React from 'react'
import { Link } from "react-router-dom";
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import appstore from '../img/appstore.png'
import playstore from '../img/playstore.png'
import debitcards from '../img/debitcards.png'

const Footer = () => {

     const { t } = useTranslation();

  return (
    <>
      <footer>

          <div className='newsletter'>
    
              <div className='main-box'>
                   <div className='text'>
                        <div className='h4box'>
                             <h4>{t("footer.trial")}</h4>
                        </div>
    
                        <div className='pbox'>
                             <p>{t("footer.membership")}</p>
                        </div>
                   </div>
    
                   <div className='inputbox'>
                      <div className='inputbar'>
                        <input type='email' placeholder={t("footer.placeholder")} />
                        <button>{t("footer.get")}</button>
                      </div>
                   </div>
              </div>
    
          </div>


          <div className='footer'>

               <div className='nav'>
                     <div className='hero-box'>
                          <div className='apps'>
                               <div className='title'>
                                    <h6>{t("footer.download")}</h6>
                               </div>
      
                               <div className='appstore'>
                                  <a href='https://apps.apple.com/ca/app/netflix/id363590051 ' target="_blank" rel='noreferrer'><img src={appstore} alt='error' /></a>
                               </div>
      
                               <div className='playstore'>
                                   <a href='https://play.google.com/store/apps/details?id=com.netflix.mediaclient' target="_blank" rel='noreferrer'><img src={playstore} alt='error' /></a>
                               </div>
                          </div>
      
                          <div className='resources'>
                               <div className='title'>
                                    <h6>{t("footer.resources")}</h6>
                               </div>
      
                               <div className='aboutUs'>
                                    <Link to='/home'>{t("footer.about")}</Link>
                               </div>
      
                               <div className='pricing'>
                                    <Link to='/home'>{t("footer.pricing")}</Link>
                               </div>
      
                               <div className='helpCenter'>
                                    <Link to='/home'>{t("footer.help")}</Link>
                               </div>
                          </div>
      
                          <div className='legal'>
                               <div className='title'>
                                    <h6>{t("footer.legal")}</h6>
                               </div>
      
                               <div className='term'>
                                    <Link to='/home'>{t("footer.term")}</Link>
                               </div>
      
                               <div className='privacy'>
                                    <Link to='/home'>{t("footer.privacy")}</Link>
                               </div>
      
                               <div className='security'>
                                    <Link to='/home'>{t("footer.security")}</Link>
                               </div>
                          </div>
      
                          <div className='contact'>
                               <div className='title'>
                                    <h6>{t("footer.contact")}</h6>
                               </div>
      
                               <div className='tel'>
                                    <p><i className="fa-solid fa-phone"></i>    8 800 234 56 78</p>
                               </div>
      
                               <div className='email'>
                                    <p><i className="fa-solid fa-envelope"></i> support@movflx.com</p>
                               </div>
      
                               <div className='socialApps'>
                                    <a href='https://www.facebook.com/netflix/' target="_blank" rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a>
                                    <a href='https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw' target="_blank" rel='noreferrer'><i className="fa-brands fa-youtube"></i></a> 
                                    <a href='https://www.instagram.com/netflix/?hl=en' target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a> 
                                    <a href='https://twitter.com/netflix?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel='noreferrer'><i className="fa-brands fa-twitter"></i></a> 
                               </div>
                          </div>
                     </div>
               </div>



               <div className='copyright'>
                    <div className='main-box'>
                         <div className='text'>
                              <p>{t("footer.p")} <span>Emin Abdullayev</span></p>
                         </div>

                         <div className='photo'>
                              <img src={debitcards} alt='error' />
                         </div>
                    </div>
               </div>


          </div>

      </footer>
    </>
  )
}

export default Footer