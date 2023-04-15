import React, { useEffect, useState } from 'react'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'animate.css';
import Carousel from 'nuka-carousel'
import Pagination from '../components/Pagination'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Card from '../components/Card'
import moviedata from '../data/moviedata'
import nuka1 from '../img/nuka1.jpg'
import nuka2 from '../img/nuka2.jpg'
import nuka3 from '../img/nuka3.jpg'
import nuka4 from '../img/nuka4.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const Home = () => {

     AOS.init();

     useEffect(()=>{

          // category buttonlari click effektleri ====================================
          document.querySelector('#catbutton1').onclick = ()=>{
               document.querySelector('#catbutton1').classList.add('active');
               document.querySelector('#catbutton2').classList.remove('active');
               document.querySelector('#catbutton3').classList.remove('active');
               document.querySelector('#catbutton4').classList.remove('active');
          };

          document.querySelector('#catbutton2').onclick = ()=>{
               document.querySelector('#catbutton2').classList.add('active');
               document.querySelector('#catbutton1').classList.remove('active');
               document.querySelector('#catbutton3').classList.remove('active');
               document.querySelector('#catbutton4').classList.remove('active');
          };

          document.querySelector('#catbutton3').onclick = ()=>{
               document.querySelector('#catbutton3').classList.add('active');
               document.querySelector('#catbutton2').classList.remove('active');
               document.querySelector('#catbutton1').classList.remove('active');
               document.querySelector('#catbutton4').classList.remove('active');
          };

          document.querySelector('#catbutton4').onclick = ()=>{
               document.querySelector('#catbutton4').classList.add('active');
               document.querySelector('#catbutton3').classList.remove('active');
               document.querySelector('#catbutton2').classList.remove('active');
               document.querySelector('#catbutton1').classList.remove('active');
          };

     });
     
     // i18n dil kodu ===================================
     const { t } = useTranslation();

    // Nuka carousel ayarlari =============================
     const settings = {
        wrapAround: true,
        slidesToShow: 1,
        animation:'fade',
        pauseOnHover: Boolean,
        enableKeyboardControls: Boolean,
        autoplay: Boolean,
        defaultControlsConfig:{
          nextButtonText: '>',
          prevButtonText: '<',
          nextButtonStyle:{
              color:'black',
              background:"white"
          },
          prevButtonStyle:{
               color:'black',
               background:'white'
          },
          pagingDotsStyle: {
            fill: 'white'
          }
        }
     };


     // OWL CAROUSEL AYARLAR KODLARI ===================================
     const options = {
         autoplay:true,
         rewind:true,
         mouseDrag:true,
         touchDrag:true,
         pullDrag:true,
         margin:10,
         autoplayHoverPause: true,
         responsive:{
             0:{
               items:1
             },
             480:{
                items: 1,
                dots:false,
                nav:true,
             },
             1000:{
               items:3
             },
         },
     }


    // Movie Category kodlari ===================================
     const [data,setData] = useState(moviedata);

     const filterResult = (catItem)=>{
          
           const result = moviedata.filter((fdata)=>{
               return  fdata.category === catItem;
           });
          
          setData(result);
     };


    //  PAGINATION AYARLARI KODLARI =================================
     const [currentPage, setcurrentPage] = useState(1);
     const [postPerPage] = useState(3);




     const firstText = currentPage * postPerPage;
     const indexText = firstText - postPerPage;
     const CurrentPost = moviedata.filter(fd=>fd.top).slice(indexText, firstText);
    
   
     const paginate = (postNumber) => setcurrentPage(postNumber);
     

  return (
    <>
    <Nav />
      
      <div className='home'>
        
      <div className='carousel'>
        <Carousel {...settings}   >
            <img src={nuka1}  alt="error"/>
            <img src={nuka2}  alt="error"/>
            <img src={nuka3}  alt="error"/>
            <img src={nuka4}  alt="error"/>
        </Carousel>
      </div>

      <div className='categories'>

          <div className='main-box'>

               <div className='catbuttons'>
                   <div className='hero-box'>
                        <button id='catbutton1' onClick={()=>{filterResult('tv shows')}}>{t("home.btn1")}</button>
                        <button id='catbutton2' onClick={()=>{filterResult('documentary')}}>{t("home.btn2")}</button>
                        <button id='catbutton3' onClick={()=>{filterResult('sports')}}>{t("home.btn3")}</button>
                        <button id='catbutton4' onClick={()=>{filterResult('comedy')}}>{t("home.btn4")}</button>
                   </div>
               </div>

               
               <div className='listbox'>
                      {data.filter(fd=>fd.category).slice(0,8).map((fd,i)=>(
                            <Card img={fd.img} title={fd.title} quality={fd.quality} rating={fd.rating} price={fd.price} duration={fd.duration} year={fd.year} id={fd.id} allproduct={fd} allwishlist={fd} key={i}/>
                      ))}
               </div>
               
          </div>

      </div>



      <div className='videoads'>
           <div className='main-box'>
               <video autoPlay muted playsInline loop>
                    <source src={require('../img/avatar2.mp4')} type="video/mp4" />
               </video>
           </div>
      </div>



      <div className='test'>

           <div className='main-box'>

              <div className='title animate__heartBeat'>
                   <h1>{t("home.h1")}</h1>
              </div>

              <div className='list'>
                   {CurrentPost.map((fd, i) => {
                        return <Card  img={fd.img} title={fd.title} quality={fd.quality} rating={fd.rating} price={fd.price} duration={fd.duration} year={fd.year} id={fd.id} allproduct={fd} allwishlist={fd} key={i} />
                    })}
              </div>

              <Pagination
                  postPerPage={postPerPage}
                  totalPosts={moviedata.filter(fd=>fd.top).length}
                  paginate={paginate}
               />

           </div>

      </div>



     <div className='moviescarousel'>

          <div className='main-box'>
               <div className='title'><h1>Upcoming Movies</h1></div>
               <OwlCarousel 
                 className='owl-theme'
                 {...options}
               >
                    {moviedata.filter(fd => fd.new).map((fd,i)=>(
                         <div className='item'>
                              <Card img={fd.img} title={fd.title} quality={fd.quality} rating={fd.rating} price={fd.price} duration={fd.duration} year={fd.year} id={fd.id} allproduct={fd} allwishlist={fd} key={i}/>
                         </div>
                    ))}
               </OwlCarousel>
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

export default Home