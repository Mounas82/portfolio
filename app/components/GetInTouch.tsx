import React from 'react'
import Image from "next/image"
import Phn from "@/public/bxs_phone-call.png"
import Mail from "@/public/ic_sharp-email.png"
import Loc from "@/public/carbon_location-filled.png"
import BG from "@/public/Background1.png"

const GetInTouch = () => {
  return (
    <div className='flex flex-row gap-12 items-center mt-20 justify-between bg-[#ffd4d0]'>
        <div > <Image src={BG} alt="Image" width={120}  /> </div>
        <div className='flex flex-col w-auto gap-4 ml-20 '>
            <div className='font-bold text-2xl'>Get in Touch</div> 
            <div>Have a question or a project in mind? I had love to hear from you. Lets chat and make something amazing together.</div> 
            <div className='flex flex-row gap-2 '>
                <div> <Image src={Phn} alt="Image" width={16} /> </div>
                <div> 0419300572 </div>
            </div> 
            <div className='flex flex-row gap-2'>
                <div> <Image src={Mail} alt="Image" width={16} /> </div>
                <div> mounassamim1@gmail.com</div>
            </div>
            <div className='flex flex-row gap-2 '>
                <div> <Image src={Loc} alt="Image" width={16} /> </div>
                <div> 123 Design Street,Creativeville, Webland,Imaginary State, 98765 </div>
            </div> 
        
        </div>
        <div className='flex flex-col mt-20 mr-20 ml-12 gap-5'>
            <div className=' bg-white py-1  w-full '> <input type='text' placeholder='First Name' /> </div> 
            <div className=' bg-white py-1 '> <input type='text' placeholder='Email' /> </div> 
            <div className=' bg-white py-1  '> <input type='number' placeholder='Phone number' /> </div> 
            <div className=' bg-white py-12 '> <input type='text' placeholder='your message' /> </div> 
            <div> <button className='bg-black text-white hover:bg-white hover:text-black py-2 px-14 mt-3 mr-14 mb-20'> Send message </button> </div>
        </div> 
    </div>
  )
}
export default GetInTouch; 