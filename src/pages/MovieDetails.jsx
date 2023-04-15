import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import moviedata from '../data/moviedata'
import { useCart } from 'react-use-cart'

const MovieDetails = () => {

     // Go Back buttonu ucun kod ==========================================
     const navigate = useNavigate();
    
    const {id} = useParams();
    const detailItems = moviedata.find(p => p.id === id)

  // Thumbnail image slider kodlari ========================================
    useEffect(()=>{
        //  thumbnail sekiller deyismek kodlari ============================   
         const mainphoto = document.querySelector('#main-image');
         const thumbphoto1 = document.querySelector('#thumb-image1');
         const thumbphoto2 = document.querySelector('#thumb-image2');

         thumbphoto1.onclick = ()=>{
               mainphoto.src = thumbphoto1.src
         };

         thumbphoto2.onclick = ()=>{
             mainphoto.src = thumbphoto2.src
         };

       // video pop up kodlari =================================================
          const trailer = document.querySelector('#watch'); 
          const popup = document.querySelector('.popup');
          const cancel = document.querySelector('#cancel');
          
          trailer.onclick = ()=>{
                popup.style.display = 'block';
          };

          cancel.onclick = ()=>{
              popup.style.display = 'none';
          };

    });


    const { t } = useTranslation();

    const {addItem} = useCart();



  return (
    <>
    <Nav />

    <div className='detailspage'>

         <div className='main-box'>

              <div className='detailbox'>
                   <div className='photos'>
                        <div className='mainphoto'>
                            <div className='hero-box'>
                                <img id='main-image' src={detailItems?.img} alt='error' />
                            </div>
                        </div>
                        <div className='thumb-box'>
                             <img id='thumb-image1' src={detailItems?.thumb1} alt='error' />
                             <img id='thumb-image2' src={detailItems?.thumb2} alt='error' />
                        </div>
                   </div>

                   <div className='info'>
                        <div className='backbox'>
                             <p onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left"></i> {t('moviedetails.p1')}</p>
                        </div>
                        <div className='title'>
                             <h2>{detailItems?.title}</h2>
                        </div>
                        <div className='about'>
                             <div className='quality'>
                                  <p><span>{t('moviedetails.p2')}:</span> {detailItems?.quality}</p>
                             </div>
                             <div className='year'>
                                  <p><span>{t('moviedetails.p3')}:</span> {detailItems?.year}</p>
                             </div>
                             <div className='rating'>
                                  <p><span>{t('moviedetails.p4')}:</span> {detailItems?.rating}</p>
                             </div>
                        </div>
                        <div className='description'>
                             <p>{detailItems?.desc}</p>
                        </div>
                        <div className='buttons'>
                             <button>{t('moviedetails.button1')}</button> <button>{t('moviedetails.button2')}</button>
                        </div>
                        <div className='watch'>
                             <button id='watch'>{t('moviedetails.button3')}</button>
                        </div>
                   </div>
              </div>


              <div className='popup'>
                   <video  controls>
                        <source src={require('../img/wednesday.mp4')} type="video/mp4" />
                   </video>
                   <button id='cancel'><i className="fa-solid fa-x"></i></button>
              </div>

         </div>

        
    </div>

    <Footer />
    </>
  )  
}

export default MovieDetails