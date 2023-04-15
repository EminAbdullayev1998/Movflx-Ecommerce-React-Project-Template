import React from 'react'
import { useWishlist } from 'react-use-wishlist';
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import wishempty from '../img/wishempty.png'
import { useCart } from 'react-use-cart';


const Wishlist = () => {

     const { t } = useTranslation();

     const {addItem} = useCart();

     const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
     } = useWishlist();

        

     if (isWishlistEmpty){
          return(
              <>
                 <Nav />

                     <div className='emptywish'>

                          <div className='main-box'>
                               <div className='photo'>
                                    <img src={wishempty} alt='error' />
                               </div>
                               <div className='text'>
                                   <h1>{t("wishlist.h11")} <i className="fa-solid fa-face-sad-tear"></i></h1>
                               </div>
                          </div>

                     </div>

                 <Footer />
              </>
          )
     }
      

  return (
    <>
      <Nav />
      
          <div className='wishlistpage'>
               
               <div className='main-box'>

                    <div className='title'>
                          <h1>{t("wishlist.h12")} ({totalWishlistItems})</h1>
                    </div>

                    <div className='list'>

                         {items.map((item)=>(
                              <div className='wishcart' >
                                   <div className='photo'>
                                       <img src={item.img} alt='error' />
                                   </div>
                                   <div className='info'>
                                        <div className='name'>
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className='about'>
                                             <div className='year'>
                                                 <p><span>{t("wishlist.p1")}:</span> {item.year}</p>
                                             </div>
                                             <div className='rating'>
                                                 <p><span>{t("wishlist.p2")}:</span> {item.rating}</p>
                                             </div>
                                             <div className='price'>
                                                 <p><span>{t("wishlist.p3")}:</span> {item.price}$</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className='buttonbox'>
                                        <div className='deletebutton'>
                                            <button onClick={() => removeWishlistItem(item.id)}>{t("wishlist.button1")}</button>
                                        </div>
                                        <div className='cartbutton'>
                                            <button onClick={() => addItem(item)}>{t("wishlist.button2")}</button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                       
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

export default Wishlist