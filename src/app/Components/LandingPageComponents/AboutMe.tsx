import React from 'react'
import Spline from '@splinetool/react-spline';
import { LinearProgress, Paper } from '@mui/material';
import image from '../../Resources/image.png'
import Image from 'next/image';
function AboutMe() {
  return (
    <div className=' lg:h-[100vh] h-[180vh] w-[90vw]' id='about'>
      {/* <div style={{ height: '80%', width: '80%', position: 'relative', top: '10vh', left: '10vw', display: 'flex', flexDirection: 'row'}} > */}
      <div className="lg:h-[70%] h-[10vh] lg:w-[90vw] w-[97vw] relative lg:top-[10vh] top-[5vh] lg:left-[5vw] left-1  flex lg:flex-row flex-col bg-white shadow-2xl rounded-lg">
        
        <div className=' w-[90vw] h-[80vh]'>
          <div>
            
            <div className='flex lg:flex-col flex-row'>
              <div>
        <Image
        src={image}
        alt='my image'
        className=' lg:w-[10vw] w-[23vw] h-[15vh] relative lg:left-[5vw] left-[2.5vw] top-[10vh]'
        />
        
        </div>
        <div>
        <div>
        <div className='flex flex-row lg:w-[32vw] w-[40vw]'>
        <p className='lg:text-xl text-medium font-medium relative lg:left-[17vw] left-[28vw]  bottom-[3vh]  '>Name:</p>
        <p className='lg:text-xl font-light relative lg:left-[17.5vw] left-[28vw] bottom-[3vh] '>Kerim tarik</p>

        </div>
        <div className='flex flex-row lg:w-[32vw] w-[55vw]'>
        <p className='lg:text-xl font-medium relative lg:left-[17vw] left-[28vw] bottom-[3vh]'>Profile:</p>
        <p className='lg:text-xl font-light relative lg:left-[17.5vw] left-[28vw] bottom-[3vh]'>Full Stack Developer</p>

        </div>
        <div className='flex flex-row lg:w-[32vw] '>
        <p className='lg:text-xl text-medium font-medium relative lg:left-[17vw] left-[28vw] bottom-[3vh]'>Email:</p>
        <p className='lg:text-xl font-light relative lg:left-[17.5vw] left-[28vw] bottom-[3vh]'>Kerim.Tarik.Qe2282@gmail.com</p>

        </div>
        <div className='flex flex-row lg:w-[32vw] w-[55vw]'>
        <p className='lg:text-xl font-medium relative lg:left-[17vw] left-[28vw] bottom-[3vh]'>Phone:</p>
        <p className='lg:text-xl font-light relative lg:left-[17.5vw] left-[28vw] bottom-[3vh]'>(+251) 911 245 695</p>
        </div>
        </div>
        </div>
        </div>
        </div>
      <p className='lg:text-xl font-bold relative left-[6vw] top-[3vh] w-[30vw]'>Skills </p>
      <p className='lg:text-xl font-medium relative left-[6vw] w-[30vw] top-[5vh]'>React Js 90% </p>
      <LinearProgress variant="determinate" value={90} style={{ width: '70%', height: '1vh', position: 'relative', left: '6vw', top: '6vh' }} />
      <p className='lg:text-xl font-medium relative left-[6vw] w-[30vw] top-[8vh]'>Node Js 75% </p>
      <LinearProgress variant="determinate" value={75} style={{ width: '70%', height: '1vh', position: 'relative', left: '6vw', top: '9vh' }} />
      <p className='lg:text-xl font-medium relative left-[6vw] top-[10vh] w-[30vw]'>Express Js  80% </p>
      <LinearProgress variant="determinate" value={80} style={{ width: '70%', height: '1vh', position: 'relative', left: '6vw', top: '11vh' }} />
      <p className='lg:text-xl font-medium relative left-[6vw] top-[12vh] w-[30vw]'>Mongo Db 80% </p>
      <LinearProgress variant="determinate" value={80} style={{ width: '70%', height: '1vh', position: 'relative', left: '6vw', top: '13vh' }} />
</div>
<div className=' w-[100vw] h-[80vh] relative right-[5vw] lg:left-[1vw] lg:top-[3vh] bottom-[10vh] lg:bottom-0'>
<p className='lg:text-3xl text-3xl font-bold relative  lg:top-[10vh] top-[7vh] lg:bottom-[0]  lg:left-0 left-[20vw] w-[40vw] '>About Me</p>
<p className='  relative  lg:top-[13vh] lg:w-[40vw] top-[10vh] lg:left-0  w-[70vw] left-10'>As a computer science graduate with a keen interest in MERN stack development, my journey into web development has been both exciting and challenging. Mastering MongoDB, Express.js, React, and Node.js has empowered me to create dynamic and responsive web applications. The versatility of JavaScript across the stack allows me to build seamless user interfaces and robust backend services, enhancing my ability to craft efficient and modern web solutions. Alongside coding, my passion for web design ensures that user experience remains at the forefront, blending functionality with aesthetics to deliver intuitive and visually compelling interfaces.</p>
<p className='  relative lg:top-[15vh] lg:w-[40vw] top-[12vh]  w-[70vw] left-10 lg:left-0 '>In addition to my expertise in MERN stack development, I have a deep fascination with 3D modeling, which allows me to bring virtual concepts to life. Through tools like Blender and Autodesk Maya, I create intricate and realistic 3D models, leveraging my understanding of shapes, textures, and lighting. This blend of technical proficiency and artistic creativity enables me to visualize and construct virtual environments, from architectural designs to character animations. Integrating my skills in web design further complements my ability to showcase 3D models in interactive and engaging ways, ensuring that every project resonates with both functionality and visual appeal.</p>

</div>


      </div>
    </div>
  )
}

export default AboutMe
