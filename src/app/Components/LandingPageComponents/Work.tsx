import Image from 'next/image'
import React from 'react'
import image from '../../Resources/WorksBg.png'
import CountUp from 'react-countup';

function Work() {
  return (
    <div className='relative lg:h-[70vh] h-[100vh] top-[30vh] lg:top-0' id='Work'>
    
      <Image
        src={image}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className='absolute'
      />
        <p className='text-5xl font-bold text-white lg:w-[25vw] w-[10vw] relative lg:left-[38vw] left-[20vw] top-[8vh]'>Work Experience</p>
      <div className='flex lg:flex-row flex-col justify-evenly absolute lg:top-0 top-[15vh] left-0 w-full h-full'>
    
        <div>
         
        <div className=''><p className='font-extrabold text-6xl text-white w-[10vw] h-[30vh]  lg:top-[20vh] lg:ml-[0vw] ml-[27vw]'> <CountUp end={100} delay={5}  className='relative top-[10vh] lg:top-[30vh]' />
        </p>
        <div className='text-2xl text-white lg:w-[20vw] w-[60vw] lg:h-[30vh] relative lg:top-[9vh] bottom-[10vh] lg:ml-[0vw] ml-[23vw] '>
        Jobs Complete
        </div>
        </div>
        </div>
        <div>
         
         <div className=''><p className='font-extrabold text-6xl text-white w-[10vw] h-[30vh]  lg:top-[20vh] lg:ml-[0vw] ml-[27vw]'> <CountUp end={100} delay={5}  className='relative  lg:top-[30vh]' />
         </p>
         <div className='text-2xl text-white lg:w-[20vw] w-[60vw] lg:h-[30vh] relative lg:top-[9vh] bottom-[20vh] lg:ml-[0vw] ml-[23vw] '>
         Jobs Complete
         </div>
         </div>
         </div>
         <div className='relative bottom-[10vh] lg:bottom-0'>
         
         <div className=''><p className='font-extrabold text-6xl text-white w-[10vw] h-[30vh]  lg:top-[20vh] lg:ml-[0vw] ml-[27vw]'> <CountUp end={100} delay={5}  className='relative  lg:top-[30vh]' />
         </p>
         <div className='text-2xl text-white lg:w-[10vw] w-[60vw] lg:h-[30vh] relative lg:top-[9vh] bottom-[20vh] lg:ml-[0vw] ml-[23vw] '>
         Jobs Complete
         </div>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Work
