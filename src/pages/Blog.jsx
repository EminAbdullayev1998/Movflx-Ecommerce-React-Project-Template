import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

const Blog = () => {

  const [blog,setBlog] = useContext(BlogContext);

  return (
    <>
    <Nav />

      <div className='blogpage'>

          <div className='main-box'>

               <div className='bloglist'>
                    {blog.map((fd,i)=>(
                         <BlogCard img={fd.img} title={fd.title} desc={fd.desc} date={fd.date}  key={i}/>
                    ))}
               </div>

               <div className='sidebar'>
                    <div className='dashboard'>
                        <Link to='/addblog'><button>Dashboard</button></Link>
                    </div>
               </div>
                
          </div>

      </div>
      
    <Footer />
    </>
  )
}

export default Blog