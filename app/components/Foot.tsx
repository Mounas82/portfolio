import React from 'react'
import Image from "next/image"
import Log from "@/public/Logo.png"

const Foot = () => {
  return (
    <div className='flex flex-col bg-black text-white items-center'>
        <div className='flex flex-row justify-between'> 
          <div> About</div>
          <div> Services</div>
          <div> <Image src={Log} alt="Image" width={200} /> </div>
          <div> Portfolio </div>
          <div> Blog </div>
        </div>
    </div>
  )
}

export default Foot