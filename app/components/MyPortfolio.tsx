import React from 'react'
import Image from "next/image"
import Img1 from "@/public/Image (1).png"
import Img2 from "@/public/Image (2).png"
import Img3 from "@/public/Image (3).png"
import Img4 from "@/public/Image (4).png"
import Img5 from "@/public/Image (5).png"
import Img6 from "@/public/Image (6).png"


const MyPortfolio = () => {
  return (
    <div className='flex flex-col '> 
        <div className='flex flex-col bg-[#ffd4d0] text-center gap-8 py-16 mt-16'>
            <div className='font-bold text-2xl'>My Portfolio</div>
            <div className='mr-56 ml-56'> Explore my design services, from user interface and experience to prototyping and testing. Lets craft exceptional digital experiences together. </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between gap-12 mr-20 ml-20 mt-10'>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img1} alt="Image" width={400} height={40}  className='hover:scale-110 duration-500' /> 
                </div>
                <div className=' text-2xl font-bold'>Educational Platform</div>
                <div>Web Design / Usability Testing </div>
            </div>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img2} alt="Image" width={400} height={100} className='hover:scale-110 duration-500' /> 
                </div>
                <div className=' text-2xl font-bold'>Travel App Design</div>
                <div>UX Research / App Design</div>
            </div>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img3} alt="Image" width={400} height={60}  className='hover:scale-110 duration-500'/> 
                </div>
                <div className=' text-2xl font-bold'>Personal Page</div>
                <div>Web Design</div>
            </div>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img4} alt="Image" width={400} height={60} className='hover:scale-110 duration-500' /> 
                </div>
                <div className=' text-2xl font-bold'>Furniture Mobile App</div>
                <div>App Design</div>
            </div>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img5} alt="Image" width={400} height={60} className='hover:scale-110 duration-500' /> 
                </div>
                <div className=' text-2xl font-bold'>Cofee House Landing Page</div>
                <div>UX Research / App Design</div>
            </div>
            <div className='flex flex-col w-80 justify-center gap-4' >
                <div> 
                    <Image src={Img6} alt="Image" width={400} height={60} className='hover:scale-110 duration-500' /> 
                </div>
                <div className=' text-2xl font-bold'>Home Services Page</div>
                <div>Web Design / Marketing</div>
            </div>
        </div>
        
    </div>
  )
}

export default MyPortfolio