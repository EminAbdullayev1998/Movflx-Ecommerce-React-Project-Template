import React from 'react'
import { Link } from "react-router-dom"
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist'
import toast, { Toaster } from 'react-hot-toast'


const Card = ({img, title, quality, rating, price, duration, year, id, allproduct, allwishlist}) => {

     const { t } = useTranslation();

     const {addItem} = useCart();

     const {addWishlistItem} = useWishlist();

     const notify = () => toast.success('Added Succesfully', {
          style: {
            border: '1px solid #171D22',
            padding: '16px',
            font: '16px',
            background: '#e4d804',
            color: '#171D22',
          },
        });

  return (
    <>
      <Toaster />
      <div className='card'>
          <div className='photo'>
               <img src={img} alt='error' />

               <div className='info'>

                    <div className='hero-box'>
                         <div className='title'>
                              <h4>{title}</h4>
                         </div>

                         <div className='duration'>
                              <p><i className="fa-regular fa-clock"></i> {duration}</p>
                         </div>

                         <div className='year'>
                              <p><i className="fa-solid fa-calendar-days"></i> {year}</p>
                         </div>

                         <div className='quality'>
                              <p><i className="fa-solid fa-glasses"></i> {quality}</p>
                         </div>

                         <div className='rating'>
                              <p><i className="fa-solid fa-star"></i> {rating}</p>
                         </div>

                         <div className='price'>
                              <p><i className="fa-solid fa-sack-dollar"></i> {price}$</p>
                         </div>
                    </div>

               </div>
          </div>

          <div className='part1'>
               <button onClick={()=>(notify(addWishlistItem(allwishlist)))}>{t("home.btn5")}</button>
          </div>

          <div className='part2'>
              <button onClick={()=>(notify(addItem(allproduct)))}>{t("home.btn6")}</button>
          </div>

          <div className='part3'>
              <Link to={`/movies/${id}`}>{t("home.btn7")}</Link>
          </div>
      </div>
    </>
  )
}

export default Card