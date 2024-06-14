import Image from 'next/image'
import React from 'react'
import portofolio1 from '../../Resources/portfolio-details-1.jpg';
import portofolio2 from '../../Resources/portfolio-details-2.jpg';
import portofolio3 from '../../Resources/portfolio-details-3.jpg';
import { Button } from '@mui/material';
function Portofolio() {
  return (
    <div className='h-[100vh] relative top-[30vh] lg:top-0' id='Portofolio' >
        <p className='text-5xl font-bold  w-[25vw] relative left-[20vw] lg:left-[42.5vw] top-[8vh]'>Portofolio</p>
       <div className=' relative top-[20vh]  w-[99vw] flex flex-row  flex-wrap
          '>
       <div className="group shadow-md rounded-lg lg:w-[30vw] w-[90vw] h-[55vh] ml-[3.5vw] lg:ml-[2.5vw] overflow-hidden  hover:h-[65vh] hover:lg:w-[30vw] transition-all duration-500 lg:mt-0 "><Image src={portofolio1} alt='image' className=' h-[40vh] object-cover transition-all duration-500'></Image>
       <p className='text-3xl font-bold text-gray-700 relative left-10 top-6'>Title</p>
       <div>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'1vw' ,position:'relative',top:'5vh'}}>App</Button>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'2vw',position:'relative',top:'5vh'}}>Figma Design</Button>
       
       </div>
       <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 delay-100 relative top-[8vh]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio voluptates mollitia architecto,
    cum neque doloribus repudiandae animi sed quae, officia molestiae et saepe, voluptatem quasi
    quos ullam dolor error?
  </p>
       </div>
       <div className="group shadow-md rounded-lg lg:w-[30vw] w-[90vw] h-[55vh] ml-[3.5vw] lg:ml-[2.5vw] overflow-hidden  hover:h-[65vh] hover:lg:w-[30vw] transition-all duration-500 lg:mt-0 mt-[5vh]"><Image src={portofolio1} alt='image' className=' h-[40vh] object-cover transition-all duration-500'></Image>
       <p className='text-3xl font-bold text-gray-700 relative left-10 top-6'>Title</p>
       <div>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'1vw' ,position:'relative',top:'5vh'}}>App</Button>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'2vw',position:'relative',top:'5vh'}}>Figma Design</Button>
       
       </div>
       <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 delay-100 relative top-[8vh]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio voluptates mollitia architecto,
    cum neque doloribus repudiandae animi sed quae, officia molestiae et saepe, voluptatem quasi
    quos ullam dolor error?
  </p>
       </div>
       <div className="group shadow-md rounded-lg lg:w-[30vw] w-[90vw] h-[55vh] ml-[3.5vw] lg:ml-[2.5vw] overflow-hidden  hover:h-[65vh] hover:lg:w-[30vw] transition-all duration-500 lg:mt-0 mt-[5vh]"><Image src={portofolio1} alt='image' className=' h-[40vh] object-cover transition-all duration-500'></Image>
       <p className='text-3xl font-bold text-gray-700 relative left-10 top-6'>Title</p>
       <div>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'1vw' ,position:'relative',top:'5vh'}}>App</Button>
       <Button variant='contained' style={{fontFamily:'sans-serif', marginLeft:'2vw',position:'relative',top:'5vh'}}>Figma Design</Button>
       
       </div>
       <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 delay-100 relative top-[8vh]">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio voluptates mollitia architecto,
    cum neque doloribus repudiandae animi sed quae, officia molestiae et saepe, voluptatem quasi
    quos ullam dolor error?
  </p>
       </div>
     
    </div>
    </div>
  )
}

export default Portofolio
