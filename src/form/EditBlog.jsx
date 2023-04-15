import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const EditBlog = () => {
    const [blog,setBlog] = useContext(BlogContext);

    const { url } = useParams();
    const editItems = blog.find(p => p.id === url);

    const [img,setImg] = useState(editItems.img);
    const [title,setTitle] = useState(editItems.title);
    const [date,setDate] = useState(editItems.date);
    const [desc,setDesc] = useState(editItems.desc);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
         e.preventDefault();

         setBlog(
            blog.map(blog => blog.id === editItems.id? {...blog, img, title, date, desc} : blog)
         );

         navigate('/blog');
    }

  return (
    <>
    <Nav />

       <div className='editblogpage'>

           <div className='main-box'>
               <form onSubmit={handleSubmit}>
               <div className='photo'>
                   <p>Photo:</p>
                   <input value={img} onChange={e => setImg(e.target.value)} type='text'></input>
               </div>

               <div className='title'>
                   <p>Title:</p>
                   <input value={title} onChange={e => setTitle(e.target.value)} type='text'></input>
               </div>

               <div className='date'>
                   <p>Date:</p>
                   <input value={date} onChange={e => setDate(e.target.value)} type='date'></input>
               </div>

               <div className='desc'>
                   <p>Text:</p>
                   <textarea value={desc} onChange={e => setDesc(e.target.value)} rows='4' cols='56'></textarea>
               </div>

               <div className='button'>
                   <button>Edit</button>
               </div>
               </form>
           </div>

       </div>

    <Footer />
    </>
  )
}

export default EditBlog