import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({img, title, desc, date, id}) => {
  return (
    <>
      <div className='blogcard'>
          <div className='photo'>
              <img src={img} alt='error' />
          </div>
 
          <div className='date'>
              <p><i className="fa-regular fa-clock"></i> {date}</p>
          </div>

          <div className='title'>
              <h2>{title}</h2>
          </div>

          <div className='desc'>
              <p>{`${desc.substring(0, 120)}...`}</p>
          </div>

          <div className='readmore'>
              <p><i className="fa-regular fa-user"></i> <span>by Admin</span></p>
              <p><Link to={`/blog/${id}`}><span>Read More</span> <i className="fa-solid fa-angles-right"></i></Link></p>
          </div>
      </div>
    </>
  )
}

export default BlogCard