import React from 'react'
import Image from "next/image"
import Logo from "@/public/Logo.png"
import Img from "@/public/Image.png"
import BG from "@/public/Background.png"

const Nav = () => {
  return (
    <main>
        <div className='flex bg-[#ffd4d0] items-center flex-col'>
          <div> < Image src={BG} alt="Image" width={110} /> </div>
            <div className='flex flex-row justify-between w-screen'>
              <div> <Image src={Logo} alt="Logo" width={100} height={100} className='mr-40 ml-20 ' /> </div>              
              <div> About </div>              
              <div> Services </div>              
              <div> Portfolio </div>              
              <div> Blog </div>              
              <div> <button className='bg-black text-white hover:bg-white hover:text-black py-2 px-5 ml-32 mr-14'> Lets talk </button> </div>              
            </div>
            <div className='flex flex-row justify-between mr-10'> 
              <div className='mt-32 flex flex-col w-fit ml-20'>
                <div> UX Designer </div>
                <div className='text-3xl font-black mt-5'> Hi There, Im </div>
                <div className='text-red-500 font-black text-3xl mt-3'> Muhammad Mounas Samim </div>
                <div className='mt-4'> <p> Welcome to my portfolio of captivating digital experiences. Explore my work and lets create something extraordinary together</p></div>
                <div > 
                  <button className='bg-black hover:bg-white text-white hover:text-black py-1 px-10 mr-3 mt-7'>Hire me</button>
                  <button className='bg-black hover:bg-white text-white hover:text-black py-1 px-10 '>Portfolio</button>
                </div>
              </div>
              <div>
                <Image src={Img} alt='Main Image' width={800} height={600} className ='mt-14 ' />

              </div>
              
            </div>
        </div>
    </main>
  )
}

export default Nav;