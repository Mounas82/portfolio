import React from 'react'
import Image from "next/image"
import Logo1 from "@/public/Vector.png"
import Logo2 from "@/public/Vector (1).png"
import Logo3 from "@/public/Vector (2).png"
import Logo4 from "@/public/Vector (3).png"
const Services = () => {
  return (
    <div className='flex flex-col '> 
        <div className='flex flex-col justify-center text-center gap-8 mr-52 ml-52 mt-16'>
            <div className='font-bold text-2xl'>Services</div>
            <div> Explore my design services, from user interface and experience to prototyping and testing. Lets craft exceptional digital experiences together. </div>
        </div>
        <div className='flex flex-row justify-between gap-6 mr-20 ml-20 mt-10'>
            <div className='flex flex-col w-64 justify-center gap-8' >
                <div> 
                    <Image src={Logo1} alt="Image" width={40} height={40} /> 
                </div>
                <div className=' text-2xl font-bold'>Design</div>
                <div>I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</div>
            </div>
            <div className='flex flex-col w-60 justify-center gap-8' >
                <div> 
                    <Image src={Logo2} alt="Image" width={100} height={100} /> 
                </div>
                <div className=' text-2xl font-bold'>Branding</div>
                <div>Im a branding expert, crafting unique visual identities that tell your story and resonate with your audience.</div>
            </div>
            <div className='flex flex-col w-60 justify-center gap-8' >
                <div> 
                    <Image src={Logo3} alt="Image" width={60} height={60} /> 
                </div>
                <div className=' text-2xl font-bold'>UX Research</div>
                <div>I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.</div>
            </div>
            <div className='flex flex-col w-60 justify-center gap-8' >
                <div> 
                    <Image src={Logo4} alt="Image" width={60} height={60} /> 
                </div>
                <div className=' text-2xl font-bold'>Usability Testing</div>
                <div>I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.</div>
            </div>
        </div>
        
    </div>
  )
}

export default Services