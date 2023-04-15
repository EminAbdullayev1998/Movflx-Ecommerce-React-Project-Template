import React, { useEffect, useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollToTop } from 'react-simple-scroll-up'
import Emin from '../img/Emin.jpeg'
import moviedata from '../data/moviedata'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Pagination from '../components/PaginationMaster'
import Card from '../components/Card'

const Movies = () => {

    // CHECKBOXES VALUES TO LOCAL STORAGE and Filter by Categories  START==============================================================
    const [checkboxValues, setCheckboxValues] = useState({});

    useEffect(() => {
        setCheckboxValues(JSON.parse(localStorage.getItem("checkboxValues") || "{}"));
    }, []);
      
    const handleChange = (e, catItem) => {
        const newCheckboxValues = { ...checkboxValues, [e.target.id]: e.target.checked };
        setCheckboxValues(newCheckboxValues);
        localStorage.setItem("checkboxValues", JSON.stringify(newCheckboxValues));
        const result = moviedata.filter(fdata => fdata.category === catItem);
        setData(result);
    };
      
    // CHECKBOXES VALUES TO LOCAL STORAGE  END==============================================================


    useEffect(()=>{
        // Filter hamburger menu ====================================================
          const filter = document.querySelector('#filter');
          const hamburger = document.querySelector('.filterHamburger');
          const close = document.querySelector('.fa-x');

          filter.onclick = ()=>{
                hamburger.style.display = 'block';
          };

          close.onclick = ()=>{
               hamburger.style.display = 'none';
          }
        // Filter hamburger menu end ===================================================    
    });

    // Pagination kodlari ==============================================================
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

     const [data,setData] = useState(moviedata);

     const [query, setQuery] = useState("");

    const filteredMovieData = data.filter(u=>u.title.toLocaleLowerCase().includes(query))

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredMovieData.slice(indexOfFirstPost, indexOfLastPost)
    const howManyPages = Math.ceil(filteredMovieData.length/postsPerPage)


    

    // const filterResult = (catItem)=>{
          
    //     const result = moviedata.filter((fdata)=>{
    //         return  fdata.category === catItem;
    //     });
       
    //    setData(result);
    // };



  return (
    <>
    <Nav />
  
        <div className='moviespage'>

            <div className='main-box'>

                    <div className='searchbox'>
                        <div className='search'>
                             <input onChange={(e)=>{setQuery(e.target.value)}} type='text' placeholder='Search' />
                             <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>

                    <div className='filterbox'>
                         <button id='filter'><i className="fa-solid fa-filter"></i> Filter</button>
                    </div>
                
                    <div className='listbox'>
    
                            <div className='categorybox'>
                                <div className='categoryitem'>
                                     <label className="container"><span>TV SHOWS</span>
                                         <input  type="checkbox" id='checkbox1' onChange={(e) => handleChange(e, 'tv shows')} checked={checkboxValues["checkbox1"]} />
                                         <div className="checkmark" />
                                     </label>
                                </div>
          
                                <div className='categoryitem'>
                                     <label className="container"><span>DOCUMENTARY</span>
                                         <input  type="checkbox" id='checkbox2' onChange={(e) => handleChange(e, 'documentary')} checked={checkboxValues["checkbox2"]} />
                                         <div className="checkmark" />
                                     </label> 
                                </div>
          
                                <div className='categoryitem'>
                                     <label className="container"><span>SPORTS</span>
                                         <input  type="checkbox" id='checkbox3' onChange={(e) => handleChange(e, 'sports')} checked={checkboxValues["checkbox3"]} />
                                         <div className="checkmark" />
                                     </label>
                                </div>
          
                                <div className='categoryitem'>
                                     <label className="container"><span>COMEDY</span>
                                         <input  type="checkbox" id='checkbox4' onChange={(e) => handleChange(e, 'comedy')} checked={checkboxValues["checkbox4"]}  />
                                         <div className="checkmark" />
                                     </label>
                                </div>
          
                                <div className='categoryitem'>
                                     <label className="container"><span>2022</span>
                                         <input  type="checkbox" id='checkbox5' onChange={(e) => handleChange(e, '2022')} checked={checkboxValues["checkbox5"]}  />
                                         <div className="checkmark" />
                                     </label>
                                </div>
          
                                <div className='categoryitem'>
                                     <label className="container"><span>2021</span>
                                         <input  type="checkbox" id='checkbox6' onChange={(e) => handleChange(e, '2021')} checked={checkboxValues["checkbox6"]}  />
                                         <div className="checkmark" />
                                     </label>
                                </div>
                            </div>
    
    
                            <div className='movieslist'>
                                <div className='list'>
                                    {currentPosts.map((fd, i) => {
                                       return <Card  img={fd.img} title={fd.title} quality={fd.quality} rating={fd.rating} price={fd.price} duration={fd.duration} year={fd.year} id={fd.id} allproduct={fd} allwishlist={fd} key={i} />
                                    })}
                                </div>
                                <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>
                            </div>


                            <div className='filterHamburger'>
                                <div className='closebox'>
                                     <i className="fa-solid fa-x"></i>
                                </div>

                                <div className='categorylist'>
                                     <div className='itemcategory'>
                                        <label className="container"><span>TV SHOWS</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>

                                     <div className='itemcategory'>
                                        <label className="container"><span>DOCUMENTARY</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>

                                     <div className='itemcategory'>
                                        <label className="container"><span>SPORTS</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>

                                     <div className='itemcategory'>
                                        <label className="container"><span>COMEDY</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>

                                     <div className='itemcategory'>
                                        <label className="container"><span>2022</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>

                                     <div className='itemcategory'>
                                        <label className="container"><span>2021</span>
                                            <input defaultChecked="checked" type="checkbox" />
                                            <div className="checkmark" />
                                        </label>
                                     </div>
                                </div>
                            </div>
    
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

export default Movies