import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { BlogContext } from '../context/BlogContext'

const BlogListboard = () => {
    const [blog,setBlog] = useContext(BlogContext);

    const deleteBlog = (id)=>{
         setBlog(blog.filter(blog => blog.id !== id))
    }

  return (
    <>
    <Nav />

       <div className='bloglistboardpage'>

           <div className='main-box'>
              {blog.length?(
               <Table>
                  <Thead>
                    <Tr>
                      <Th>№</Th>
                      <Th>Title</Th>
                      <Th>Date</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {blog.map((fd,i)=>(
                        <Tr>
                          <Td>{i+1}</Td>
                          <Td>{fd.title}</Td>
                          <Td>{fd.date}</Td>
                          <Td><button onClick={()=>deleteBlog(fd.id)}>Delete</button>
                              <Link to={`/editblog/${fd.id}`}><button className='edit'>Edit</button></Link>
                          </Td>
                        </Tr>
                    ))}
                  </Tbody>
                </Table>
              ):(
                <h1>The BlogLisboard is empty</h1>
              )}
           </div>

       </div>

    <Footer />
    </>
  )
}

export default BlogListboard