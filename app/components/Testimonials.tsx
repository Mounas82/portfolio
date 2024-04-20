import React from 'react'
import Image from "next/image"
import Pic from "@/public/Image (7).png"
import BG from "@/public/Background.png"

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center bg-[#ffd4d0] '> 
      <div className=''><Image src={BG} alt= "Image" width={120} /> </div>
        <div className='flex flex-col text-center gap-8 py-14 mt-6'>
            <div className='font-bold text-4xl'>Testimonials</div>
            <div className='mr-56 ml-56'> Mounas Samim designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!</div>
            <div className='flex flex-row text-center justify-center'> 
                <Image src={Pic} alt="Image" width={40} className='hover:scale-105' /> 
                <div className='mt-2 ml-2'> <b> John Smith </b> / CEO of XYZ Company </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials