import { Button } from '@mui/material'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {ComponentContext} from '../page'
import  {Link }  from 'react-scroll';
// import { scroller } from 'react-scroll';

import React from 'react'

import CloseIcon from '@mui/icons-material/Close';
function Header() {
 const [smallMenu,setSmallMenu] = React.useState(false)
const [Component,setComponent]=React.useState()
  const component=React.useContext(ComponentContext)
  
  
  return (
    <div className={`sticky top-0 z-50 bg-black/40  ${component !== 1 ? 'h-[7vh]' : ''}`}>
    <div className=' bg-black    '>
     
    <div className=' relative z-50 h-0   bg-black'>
        <div className={`relative  ${component !== 1 ? 'top-[5vh]' : 'top-[8vh]'}  hidden lg:block  `}>
      <div className='flex flex-column justify-end text-white relative  '><div>
   
      <div className='hidden lg:inline '>
  <a href="/" className="text-lg mr-10 mb-5 relative bottom-8 group">
    Home
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===1 && 'scale-x-100'}`}></span>
  </a>
</div>
  </div>
  
  <div  className='hidden lg:inline cursor-pointer'>
  <Link  to="about" duration={1000}   offset={50} smooth={true} 
 className="text-lg mr-10 mb-5 relative bottom-8 group ">
    About
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===2 && 'scale-x-100'}`}></span>
  </Link>
</div>
<div  className='hidden lg:inline cursor-pointer'>
  <Link  to="Services" duration={1000}   offset={50} smooth={true}  className="text-lg mr-10 mb-5 relative bottom-8 group">
    Services
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===3 && 'scale-x-100'}`}></span>
  </Link>
</div>
  <div  className='hidden lg:inline cursor-pointer'>
  <Link  to="Work" duration={1000}   offset={50} smooth={true}  className="text-lg mr-10 mb-5 relative bottom-8 group">
    Work 
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===4 && 'scale-x-100'}`}></span>
  </Link>
</div>
<div  className='hidden lg:inline cursor-pointer'>
  <Link  to="Portofolio" duration={1000}   offset={50} smooth={true}  className="text-lg mr-10 mb-5 relative bottom-8 group">
    Portofolio 
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===5 && 'scale-x-100'}`}></span>
  </Link>
</div>

<div className='mr-[15vw]  hidden lg:inline cursor-pointer'>
  <Link  to="Contact" duration={1000}   offset={50} smooth={true}  className="text-lg mr-10 mb-5 relative bottom-8 group">
    Contact
    <span className={` mt-7 absolute left-0 w-full h-1 bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 ${component===6 && 'scale-x-100'}`}></span>
  </Link>
</div>
</div>
                         

            </div>
            <div className='relative z-10 text-white lg:hidden block ml-[80vw] top-[2vh]' >
    
                                <MenuIcon onClick={() => setSmallMenu(!smallMenu)} />
                                  </div>
                                  <div className={`w-[80vw] h-[80vh] bg-white ml-[10vw] pt-[10vh] ${smallMenu ? 'block' : 'hidden' }`}>
                                    <div className='relative left-[70vw] bottom-10 '  onClick={() => setSmallMenu(!smallMenu)}>
                                  <CloseIcon />
                                  </div>
                                  <Link to="about" duration={1000}   offset={50} smooth={true} className="ml-[38vw] mt-[20vh] ">
                                                                  Home
  
                                           </Link>
                                           <hr className='mb-[5vh]' />
                                           <Link to="about" duration={1000}   offset={50} smooth={true} className="ml-[38vw]  ">
                                                                  About
  
                                           </Link>
                                           <hr className='mb-[5vh]'/>
                                           <Link to="Services" duration={1000}   offset={50} smooth={true} className="ml-[38vw] ">
                                                                  Services 
  
                                           </Link>
                                           <hr className='mb-[5vh]'/>
                                           <Link to="Work" duration={1000}   offset={50} smooth={true} className="ml-[38vw] ">
                                                                  Work 
  
                                           </Link>
                                           <hr className='mb-[5vh]'/>
                                           <Link to="Contact" duration={1000}   offset={50} smooth={true} className="ml-[38vw] ">
                                                                  Contact
  
                                           </Link>
                                           <hr className='mb-[5vh]'/>
                                           <Link to="Portofolio" duration={1000}   offset={50} smooth={true} className="ml-[38vw] ">
                                           Portofolio
  
                                           </Link>
                                           <hr className='mb-[5vh]'/>
                                          
            </div>
            </div>
            
            
    </div>
    </div>
  )
}

export default Header
