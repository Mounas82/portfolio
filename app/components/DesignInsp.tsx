import React from 'react'
import Image from "next/image"
import Img1 from "@/public/Image (8).png"
import Img2 from "@/public/Image (9).png"
import Img3 from "@/public/Image (10).png"



const DesignIns = () => {
  return (
    <div className='flex flex-col bg-[#f7f7f7] '> 
        <div className='flex flex-col text-center gap-6 py-16 mt-6'>
            <div className='font-bold text-4xl'>Design Insights and Inspiration</div>
            <div className='mr-56 ml-56'> Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience. </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between gap-12 mb-2 mr-20 ml-20'>
            <div className='flex flex-col bg-white w-80 justify-center gap-2' >
                <div> 
                    <Image src={Img1} alt="Image" width={400} height={40}  className='hover:scale-110 duration-1000' /> 
                </div>
                <div className='font-light ml-2'> August 15, 2023 / UX </div>
                <div className=' font-bold ml-2'>Typography Tips for Design Success</div>
                <div className='ml-2'>Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs. </div>
                <div className='font-bold ml-2'>Read more... </div>
            </div>
            <div className='flex flex-col bg-white w-80 justify-center gap-2' >
                <div> 
                    <Image src={Img2} alt="Image" width={400} height={40} className='hover:scale-110 duration-1000' /> 
                </div>
                <div className='font-light ml-2'> August 15, 2023 / UX </div>
                <div className=' font-bold ml-2'>Color Psychology in UX</div>
                <div className='ml-2'>Explore how color choices impact user emotions and decision-making in UX design.</div>
                <div className='font-bold mt-6 ml-2'>Read more... </div>
            </div>
            <div className='flex flex-col bg-white w-80 justify-center gap-2' >
                <div> 
                    <Image src={Img3} alt="Image" width={400} height={40} className='hover:scale-110 duration-1000' /> 
                </div>
                <div className='font-light ml-2'> August 15, 2023 / UX </div>
                <div className=' font-bold ml-2'>Boosting UX with Microinteractions</div>
                <div className='ml-2'>Discover the power of microinteractions in enhancing user experience and engagement.</div>
                <div className='font-bold mt-6 ml-2'>Read more... </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default DesignIns