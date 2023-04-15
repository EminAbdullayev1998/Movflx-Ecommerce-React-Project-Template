import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import NotFoundPage from './pages/NotFoundPage'
import ForgotPassword from './pages/ForgotPassword'
import Signup from './pages/Signup'
import MovieDetails from './pages/MovieDetails'
import { BlogProvider } from './context/BlogContext'
import AddBlog from './form/AddBlog'
import BlogListboard from './pages/BlogListboard'
import EditBlog from './form/EditBlog'



const AppRouter = () => {

  return (
    <>
      <BrowserRouter>
          <BlogProvider>
            <CartProvider>
              <WishlistProvider>
                  <Routes>
                     <Route path='/' element={<Authentication />}></Route>
                     <Route path='/home' element={<Home />}></Route>
                     <Route path='/movies' element={<Movies />}></Route>
                     <Route path='/addblog' element={<AddBlog />}></Route>
                     <Route path='/editblog/:url' element={<EditBlog />}></Route>
                     <Route path='/bloglistboard' element={<BlogListboard />}></Route>
                     <Route path='/movies/:id' element={<MovieDetails />}></Route>
                     <Route path='/pricing' element={<Pricing />}></Route>
                     <Route path='/blog' element={<Blog />}></Route>
                     <Route path='/contact' element={<Contact />}></Route>
                     <Route path='/wishlist' element={<Wishlist />}></Route>
                     <Route path='/cart' element={<Cart />}></Route>
                     <Route path='/signin' element={<Signin />}></Route>
                     <Route path='/signup' element={<Signup />}></Route>
                     <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
                     <Route path='*' element={<NotFoundPage />}></Route>
                  </Routes>
              </WishlistProvider>
            </CartProvider>
          </BlogProvider>
      </BrowserRouter>
    </>
  )
}

export default AppRouter