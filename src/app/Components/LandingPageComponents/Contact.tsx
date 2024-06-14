import Image from 'next/image'
import React from 'react'
import Bg from '../../Resources/Group 1 (3).png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { TextField } from '@mui/material';

import ContactBg from '../../Resources/ContactBg.png'
function Contact() {
//   // const nodemailer = require("nodemailer");
//   const [Message,setMessage]=React.useState({
//     name: '',
//     subject:'',
//     email: '',
//     message: '',  
//   })

//   const handleChange=(e:any)=>{
//     setMessage({
//       ...Message,
//       [e.target.name]: e.target.value
//     });
    
//   }

// console.log(Message)












//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'kimotkt8@gmail.com',
//         pass: 'pnvgqvrajzpjkqge'
//     },
//     host: 'smtp.gmail.com',
//     port: 465, // or 587 for TLS
//     secure: true, // true for 465, false for other ports
// });
// const ContactSender=(SenderName:any,SenderEmail:any,Subject:any,SenderMessage:any)=>{
  
//   var mailOptions={
//       from: 'kerim.tarik.qe2282@gmail.com',
//       to: 'kerim.tarik.qe2282@gmail.com'   ,         //email,
//       subject: Subject ,
//       html: `message from Portofolio ${SenderMessage}`



//     };
//     transporter.sendMail(mailOptions, function(error:any, info:any){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
// }
  return (
    <div className='lg:h-[80vh] h-[190vh]  relative lg:top-0 top-[140vh]' id='Contact'>
      
      
      <Image
        src={ContactBg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        
      />
     
      <div className='lg:w-[80vw] w-[87vw] lg:h-[70vh] bg-white relative lg:left-[10vw] left-[5vw] rounded-md top-[6vh] flex lg:flex-row h-[170vh] flex-col   '>
        <div className=' w-[40vw]'>
          <p className='font-bold text-5xl relative left-[10vw] top-[10vh]'>Get In Touch </p>
          <p className='relative left-[5vw] top-[15vh] lg:w-[35vw] w-[70vw] font-normal'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Placeat, modi itaque! Id atque alias, dicta excepturi aspernatur necessitatibus temporibus qui quam, 
             consectetur fugit laboriosam harum quisquam incidunt expedita vero. Ipsam?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Placeat, modi itaque! Id atque alias, dicta excepturi aspernatur necessitatibus temporibus qui quam, 
             consectetur fugit laboriosam harum quisquam incidunt expedita vero. Ipsam?
             </p>
             <div className='relative left-[5vw] top-[20vh] w-[35vw] h-[20vh]'>
  <div className='flex flex-col space-y-4'>
    <div className='flex items-center space-x-2'>
      <LocationOnIcon />
      <p>Addis Abeba, Ethiopia</p>
    </div>
    <div className='flex items-center space-x-2'>
      <PhoneAndroidIcon />
      <p>(+251) 924 5695</p>
    </div>
    <div className='flex items-center space-x-2'>
      <EmailIcon />
      <p>Kerim.Tarik.Qe2282@gmail.com</p>
    </div>
  </div>
  <div className='relative top-[5vh]'>
 <Link href={'#'}> <XIcon style={{ marginLeft: '1vw',width: '1.5vw', height: '1.5vw'}} /></Link>
 <Link href={'#'}><InstagramIcon  style={{ marginLeft: '1vw',width: '1.5vw', height: '1.5vw'}}/></Link>
 <Link href={'#'}><GitHubIcon style={{ marginLeft: '1vw',width: '1.5vw', height: '1.5vw'}}/></Link>
 <Link href={'#'}> <LinkedInIcon  style={{ marginLeft: '1vw',width: '1.5vw', height: '1.5vw'}}/></Link>

  </div>
</div>

        </div>
        <div className=' w-[40vw] relative lg:top-0 top-[25vh]'>
        <p className='font-bold text-4xl relative left-[5vw] top-[10vh]  lg:w-[30vw] w-[50vw]'>Send me a message  </p>
        <div className='relative left-[5vw] top-[15vh]'>
    
        <input type="text" name='name'  id="first_name"  className="bg-gray-50 border border-gray-300 lg:h-[6vh] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[25vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Name" required />
        <br />
        <input type="text" name='email'  id="first_name" className="bg-gray-50 border border-gray-300 lg:h-[6vh] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[25vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Your Email" required />
        <br/>
        <input type="text" name='subject'  id="first_name" className="bg-gray-50 border border-gray-300 lg:h-[6vh] text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[25vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Subject" required />
        <br/>
        <input type="text" name='message'  id="first_name" className="bg-gray-50 border border-gray-300 lg:h-[15vh] h-[20vh]  text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[25vw] w-[62vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Message" required  />

        </div>
        <br/>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 relative lg:left-[6vw] left-[5vw] top-[15vh]">Blue</button>
</div>

      </div>
    
   <div className='h-10vh bg-blue-600 relative lg:top-[10vh] top-[15vh] pt-2 lg:h-[5vh] h-[7vh]'>
<p className='lg:ml-[37vw] ml-[6vw] text-white'>© Kerim tarik Developments 2024 all Rights Reserved</p>
   </div>
    </div>
  )
}

export default Contact
