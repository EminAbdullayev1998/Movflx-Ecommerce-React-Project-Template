import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { BlogContext } from '../context/BlogContext'

const AddBlog = () => {
     const [img,setImg] = useState("");
     const [title,setTitle] = useState("");
     const [date,setDate] = useState("");
     const [desc,setDesc] = useState("");
     const [blog,setBlog] = useContext(BlogContext);

     const uptadeImg = (e)=>{
         setImg(e.target.value)
     }

     const uptadeTitle = (e)=>{
          setTitle(e.target.value)
     }

     const uptadeDate = (e)=>{
          setDate(e.target.value)
     }

     const uptadeDesc = (e)=>{
          setDesc(e.target.value)
     }

     const navigate = useNavigate();

     const addBlog = (e)=>{
          e.preventDefault();
          setBlog(prevBlog=>[...prevBlog,{id:uuidv4(),img:img,title:title,date:date,desc:desc}]);
          navigate('/blog');
     }

  return (
    <>
    <Nav />

       <div className='addblogpage'>

            <div className='main-box'>
                <div className='listboardbutton'>
                    <Link to='/bloglistboard'><button>Blog Listboard</button></Link> 
                </div>

                <div className='formbox'>

                     <div className='form'>
                         <form onSubmit={addBlog}>
                         <div className='photo'>
                              <p>Photo:</p>
                              <input onChange={uptadeImg} type='text'></input>
                         </div>

                         <div className='title'>
                              <p>Title:</p>
                              <input onChange={uptadeTitle} type='text'></input>
                         </div>

                         <div className='date'>
                              <p>Date:</p>
                              <input onChange={uptadeDate} type='date'></input>
                         </div>

                         <div className='desc'>
                              <p>Text:</p>
                              <textarea onChange={uptadeDesc} rows='4' cols='56'></textarea>
                         </div>

                         <div className='button'>
                             <button>ADD</button>
                         </div>
                         </form>
                     </div>

                </div>
            </div>

       </div>

    <Footer />
    </>
  )
}

export default AddBlog