import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../config/i18n'
import { useTranslation } from 'react-i18next'
import logo from '../img/logo.png'
import aze from '../img/aze.png'
import uk from '../img/uk.png'
import { useWishlist } from 'react-use-wishlist'
import { useCart } from 'react-use-cart'

const Nav = () => {

   const { t, i18n } = useTranslation();

   const isLoggedIn = localStorage.getItem('isLoggedIn');
   const email = localStorage.getItem('userEmail');

   const handleLogout = () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      window.location.reload();
   };

   const handleClick =(lang)=>{
      i18n.changeLanguage(lang);
   }

   const { totalWishlistItems } = useWishlist();

   const { items } = useCart();

   
   // aktiv navlink reng kodu
   const activeStyle = {
      color: "#e4d804",
   };


   const [theme,setTheme] = useState(localStorage.getItem('theme'));

   useEffect(()=>{
      // DARK LIGHT MODE LOCAL STORAGE ILE
      document.querySelector('.mode').onclick = ()=>{
            if (theme === "light") {
                localStorage.setItem('theme','dark');
                setTheme("dark");
            }else{
                localStorage.setItem('theme','light');
                setTheme("light");
            }
      };

       document.body.className = theme;
      
   },[theme]);

   useEffect(()=>{

            // Checkbox deyerini local storage saxlamaq Start=============
            function save() {	
               const checkbox = document.querySelector(".mode");
                localStorage.setItem("mode", checkbox.checked);	
            };
            
   
            //for loading
              const checked = JSON.parse(localStorage.getItem("mode"));
              document.querySelector(".mode").checked = checked;
              window.addEventListener('change', save);
   
         // Checkbox deyerini local storage saxlamaq End=============

   },[]);

   useEffect(()=>{
         const hamburger = document.querySelector('#hamburger');

         const hamburgermenu = document.querySelector('#togglemenu');

            hamburger.onclick = ()=>{
                  if (hamburger.className === 'fa-solid fa-bars') {
                      hamburger.className = 'fa-solid fa-x';
                     //  hamburgermenu.style.display = 'block';
                     hamburgermenu.className = 'show';
                  }else{
                     hamburger.className = 'fa-solid fa-bars';
                     // hamburgermenu.style.display = 'none';
                     hamburgermenu.className = 'null';
                  }
            };

   },[]);

  return (
    <>
       <header>

           <div className='logo'>
              <Link to='/home'><img src={logo} alt='error' /></Link>  
           </div>

           <div className='nav'>
                <ul>
                   <NavLink to='/home' style={({isActive})=> isActive ? activeStyle : undefined}><li>{t("nav.home")}</li></NavLink>
                   <NavLink to='/movies' style={({isActive})=> isActive ? activeStyle : undefined}><li>{t("nav.movies")}</li></NavLink> 
                   <NavLink to='/pricing' style={({isActive})=> isActive ? activeStyle : undefined}><li>{t("nav.pricing")}</li></NavLink> 
                   <NavLink to='/blog' style={({isActive})=> isActive ? activeStyle : undefined}><li>{t("nav.blog")}</li></NavLink> 
                   <NavLink to='/contact' style={({isActive})=> isActive ? activeStyle : undefined}><li>{t("nav.contact")}</li></NavLink> 
                </ul>
           </div>

           <div className='tools'>
                <div className='langbox'>
                      <button className='btnEn' onClick={()=>{handleClick("en")}}><img src={uk} alt='error' /></button>
                      <button className='btnAz' onClick={()=>{handleClick("az")}}><img src={aze} alt='error' /></button>
                </div>

                <div className='modebox'>
                     <input type="checkbox" id="darkmode-toggle" className='mode'/>
                     <label htmlFor="darkmode-toggle">
                            <i className="fa-solid fa-sun"></i>
                            <i className="fa-solid fa-moon"></i>
                     </label>
                </div>

                <div className='wishlist'>
                     <ul>
                     <NavLink to='/wishlist' style={({isActive})=> isActive ? activeStyle : undefined}><li><i className="fa-solid fa-heart"></i>{t("nav.wishlist")} ({totalWishlistItems})</li></NavLink>
                     </ul>
                </div>

                <div className='cart'>
                     <ul>
                        <NavLink to='/cart' style={({isActive})=> isActive ? activeStyle : undefined}><li><i class="fa-solid fa-cart-shopping"></i>{t("nav.cart")} ({items.length})</li></NavLink>
                     </ul>
                </div>

                <div className='login'>
                     {isLoggedIn && email? ( 
                        <div className='test'>
                           <p>{email}</p>
                           <button onClick={handleLogout}>Log out</button>
                        </div>
                     ) : (
                        <NavLink to='/signin'>{t("nav.signIn")}</NavLink>
                     )}
                </div>

                <div className='burger-menu' >
                     <i className="fa-solid fa-bars" id='hamburger'></i>
                </div>
           </div>

           {/* TOGGLE MENU */}
           <div id='togglemenu'>

                <div className='main-box'>
                     <div className='home'><NavLink to='/home' style={({isActive})=> isActive ? activeStyle : undefined}>{t("nav.home")}</NavLink></div>
                     <div className='movies'><NavLink to='/movies' style={({isActive})=> isActive ? activeStyle : undefined}>{t("nav.movies")}</NavLink></div>
                     <div className='pricing'><NavLink to='/pricing' style={({isActive})=> isActive ? activeStyle : undefined}>{t("nav.pricing")}</NavLink></div>
                     <div className='blog'><NavLink to='/blog' style={({isActive})=> isActive ? activeStyle : undefined}>{t("nav.blog")}</NavLink></div>
                     <div className='contact'><NavLink to='/contact' style={({isActive})=> isActive ? activeStyle : undefined}>{t("nav.contact")}</NavLink></div>
                     <div className='langbox'>
                         <button className='btnEn' onClick={()=>{handleClick("en")}}><img src={uk} alt='error' /></button>
                         <button className='btnAz' onClick={()=>{handleClick("az")}}><img src={aze} alt='error' /></button>
                    </div>
                    <div className='wishlist'>
                         <ul>
                         <NavLink to='/wishlist' style={({isActive})=> isActive ? activeStyle : undefined}><li><i className="fa-solid fa-heart"></i>{t("nav.wishlist")} ({totalWishlistItems})</li></NavLink>
                         </ul>
                    </div>
                    <div className='cart'>
                        <ul>
                           <NavLink to='/cart' style={({isActive})=> isActive ? activeStyle : undefined}><li><i className="fa-solid fa-cart-shopping"></i>{t("nav.cart")} ({items.length})</li></NavLink>
                        </ul>
                    </div>
                    <div className='login'>
                       {isLoggedIn && email? ( 
                           <div className='test'>
                              <p>{email}</p>
                              <button onClick={handleLogout}>Log out</button>
                           </div>
                        ) : (
                           <NavLink to='/signin'>{t("nav.signIn")}</NavLink>
                        )}
                    </div>
                </div>

           </div>

       </header>
    </>
  )
}

export default Nav