import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { useCart } from 'react-use-cart'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import emptycart from '../img/emptycart.png'





const Cart = () => {

    const { t } = useTranslation();

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    

    const {
      isEmpty,
      items,
      updateItemQuantity,
      cartTotal,
      removeItem,
    } = useCart();


    if(isEmpty){
      return(
        <>
        <Nav />
           
           <div className='emptycart'>

                <div className='hero-box'>
                     <div className='photo'>
                         <img src={emptycart} alt='error' />
                     </div>
                     <div className='text1'>
                          <h1>{t("cart.h1")}</h1>
                     </div>
                     <div className='text2'>
                          <p>{t("cart.p1")} <i className="fa-solid fa-face-smile"></i></p>
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

      <div className='cartpage'>

           <div className='main-box'>
                  <Table>

                      <Thead>
                        <Tr>
                          <Th>№</Th>
                          <Th>{t('cart.th1')}</Th>
                          <Th>{t('cart.th2')}</Th>
                          <Th>{t('cart.th3')}</Th>
                          <Th>{t('cart.th4')}</Th>
                          <Th>{t('cart.th5')}</Th>
                        </Tr>
                      </Thead>

                          <Tbody>
                            {items.map((fd,i)=>(
                                  <Tr>
                                  <Td>{i+1}</Td>
                                  <Td>{fd.title}</Td>
                                  <Td><div><img src={fd.img} alt="error" width="50px" height="50px" /></div></Td>
                                  <Td>{fd.price*fd.quantity}$</Td>
                                  <Td><button onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}><i className="fa-solid fa-minus"></i></button><div className='numberbox'>{fd.quantity}</div><button onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}><i className="fa-solid fa-plus"></i></button></Td>
                                  <Td><button onClick={()=>{removeItem(fd.id)}}><i className="fa-solid fa-trash"></i></button></Td>
                                </Tr>
                            ))}
                          </Tbody>

                  </Table>

                  <div className='totalprice'>
                       <h1>{t('cart.h12')}: <span>{cartTotal}$</span></h1>
                  </div>
                  <div className='paybox'>
                       {isLoggedIn ? (
                            <button onClick={()=>{items.forEach((fd) => removeItem(fd.id))}}>{t('cart.button')}</button>
                          ) : (
                             <button onClick={() => alert('Please log in')}>
                                    {t('cart.button')}
                             </button>
                        )}
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

export default Cart