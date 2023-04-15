import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import authdata from '../data/auth'
import logo from '../img/logo.png'

const Authentication = () => {

      const [uname,setUname]=useState();
      const [pass,setPass]=useState();
      const [alert,setAlert]=useState();
      const [text,setText]=useState();
      
    
      const navigate = useNavigate();


      const formSubmit =(e)=>{
           e.preventDefault();

           if (!uname || !pass) {
               setAlert('alert alert-warning');
               setText('Please fill in the input');
               document.querySelector('#alert').style.display = 'block';
               setTimeout(()=>{
                 document.querySelector('#alert').style.display = 'none'
               },5000);
           }else{
              setText('');
              if (authdata.dataname === uname && authdata.datapass === pass) {
                  setAlert('alert alert-success');
                  setText('Login Successfully');
                  // navigate('/home');
                  document.querySelector('#alert').style.display = 'block';
                  setTimeout(()=>{
                    document.querySelector('#alert').style.display = 'none'
                  },3000);
                  setTimeout(()=>{
                     navigate('/home');
                  },2000);
              }else{
                 setAlert('alert alert-danger');
                 setText('Login is wrong!');
                 document.querySelector('#alert').style.display = 'block';
                 setTimeout(()=>{
                   document.querySelector('#alert').style.display = 'none'
                 },5000);
              }
           }
      };

  return (
    <>
      <div className='authentication'>

              <div className='main-box'>

                   <div className='formbox'> 
                        <div className='logo'>
                             <img src={logo} alt='error' />
                        </div>
                      <form onSubmit={formSubmit}>
                        <div className='h2box'>
                            <div id='alert' className={`text-center ${alert}`} role="alert">
                                 {text}
                            </div>
                        </div>

                        <div className='email'>
                             <div className='inputbox'>
                                  <input onChange={(e)=>{setUname(e.target.value)}} type='email' placeholder='Email' />
                             </div>
                        </div>

                        <div className='password'>
                            <div className='inputbox'>
                              <input onChange={(e)=>{setPass(e.target.value)}} type='password' placeholder='Password' />
                            </div>
                        </div>

                        <div className='checkbox'>
                            <label className="main">Remember Me
                              <input type="checkbox" />
                              <span className="geekmark"></span>
                            </label>
                        </div>

                        <div className='button'>
                            <button type='submit'>LOG IN</button>
                        </div>

                        <div className='signup'>
                            <p>Don't have an account? <NavLink to='/signup'>Sign Up!</NavLink> </p>
                        </div>

                        <div className='forgotpass'>
                            <NavLink to='/forgotpassword'>Forgot Password?</NavLink>
                        </div>
                      </form>
                   </div>

              </div>

      </div>
    </>
  )
}

export default Authentication