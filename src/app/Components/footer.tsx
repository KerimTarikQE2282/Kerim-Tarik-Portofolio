import React from 'react'
import Logo from '../Resources/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TextField } from '@mui/material';

function Myfooter() {
  return (
    <div className='text-white bg-black h-[40vh]'>
      <div className='flex flex-row'>
      <div className='flex flex-col relative left-[10vw] top-[5vh]'>
      <Link href='#' className='mt-5'> Home</Link>
      <Link href='#' className='mt-5'> Projects</Link>
      <Link href='#'className='mt-5'> CV</Link>
      
     </div>
     <div className='relative left-[37vw] top-[5vh]'>
     <Image src={Logo} alt='wrong' className='w-[4vh] h-[5vh] relative left-[10vw] '/>
     <p className='w-[10vh] h-[5vh] relative left-[9vw] top-[2vh]'>Kerim Tarik</p>
     <p className='w-[20vh] h-[5vh] relative left-[8vw] top-[2vh] font-light'>Making Software That Satisfies all your needs</p>
     </div>
     <div className='relative left-[70vw] top-[5vh]'>
      <p>Contact me </p>
      <input  placeholder='email' style={{width:'10vw',background:'white', marginTop: '1vh',}}/>
      <br/>
      <textarea  style={{width: '10vw', height: '10vh', background: 'white', marginTop: '1vh',}}></textarea>
     </div>
     </div>
     <hr className='border-0.5 w-[70vw] relative left-[16vw] top-[13vh]'/>
     <div className='relative ml-[43vw] top-[15vh] '>
           <Link href='#'> <XIcon className='mr-4'/></Link> 
           <Link href='#'> <InstagramIcon className='mr-4'/></Link> 
           <Link href='#'> <GitHubIcon className='mr-4'/></Link> 
           <Link href='#'> <LinkedInIcon className='mr-4'/></Link> 
           </div>
           <p className='relative left-[20vw] top-[12vh] w-[20vw] font-extralight'> © 2023 kerim tarik inc </p>

    </div>
  )
}

export default Myfooter
