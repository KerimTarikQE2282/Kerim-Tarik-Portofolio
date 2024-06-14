import { LinearProgress } from '@mui/material'
import React from 'react'
import model from '../../Resources/3d.png'
import code from '../../Resources/code.png'
import design from '../../Resources/design.png'
import Image from 'next/image'
function Services() {
  return (
    <div id='Services'>
       <div className=' lg:h-[100vh]     '>
    <p className='text-5xl font-bold relative lg:left-[42.5vw] left-[30vw] top-[10vh] lg:top-[0vh] lg:bottom-[3vh] w-[20vw]'>Services</p>
                         <LinearProgress variant="determinate" style={{width:'11vw ',height:'1vh',position:'relative',left:'42.5vw',top:'10vh'}} value={100} />
                         <div className='flex lg:flex-row flex-col relative  top-[8vh] lg:top-[2vh] w-[90vw]'>
                          <div className=' shadow-2xl relative top-32 rounded-lg lg:ml-[9.5vw] ml-[5vw]  lg:w-[45vw] w-[80vw] h-[60vh]'>
                              <Image src={design} alt='image' className='relative lg:left-[6vw] left-[20vw] top-[3vh] lg:w-[10vw] lg:h-[10vw] w-[40vw] h-[40vw]' />
                              <div>
                                  <p className='text-3xl font-bold relative lg:left-[7vw] left-[15vw] top-[5vh]'>Web Design</p>
                                  <p className='  lg:text-xl font-light relative lg:w-[20vw] w-[70vw] left-[3vw] lg:top-[7vh] top-[10vh]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                              </div>
                          </div>
                          <div className=' shadow-2xl relative top-32 rounded-lg lg:ml-[2vw] ml-[5vw] lg:mt-0 mt-12 lg:w-[45vw] w-[80vw] h-[60vh]'>
                              <Image src={code} alt='image' className='relative lg:left-[6vw] left-[20vw] top-[3vh] lg:w-[10vw] lg:h-[10vw] w-[40vw] h-[40vw]' />
                              <div>
                                  <p className='text-3xl font-bold relative lg:left-[7vw] left-[15vw] lg:mt-0 mt-12 top-[5vh]'>Web Design</p>
                                  <p className='  lg:text-xl font-light relative lg:w-[20vw] w-[70vw] left-[3vw] lg:top-[7vh] top-[10vh]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                              </div>
                          </div>
                          <div className=' shadow-2xl relative top-32 rounded-lg lg:ml-[2vw] ml-[5vw] lg:mt-0 mt-12 lg:w-[45vw] w-[80vw] h-[60vh]'>
                              <Image src={model} alt='image' className='relative lg:left-[6vw] left-[20vw] top-[3vh] lg:w-[10vw] lg:h-[10vw] w-[40vw] h-[40vw]' />
                              <div>
                                  <p className='text-3xl font-bold relative lg:left-[7vw] left-[15vw] top-[5vh]'>Web Design</p>
                                  <p className='  lg:text-xl font-light relative lg:w-[20vw] w-[70vw] left-[3vw] lg:top-[7vh] top-[10vh]'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                              </div>
                          </div>
                          

                         </div>
    </div>
    </div>
  )
}

export default Services
