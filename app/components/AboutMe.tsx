import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex flex-col bg-black'> 
        <div className='text-white text-center justify-center '> 
            <div className='font-black text-2xl mb-6 mt-10'>About Me</div>
            <div className='mr-60 ml-60'><p>  I'm Muhammad Mounas Samim, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together. </p></div>
        </div>
        <div className='flex flex-row text-white gap-10 mt-12 mb-16 mr-56 ml-56 text-center justify-between'> 
            <div className=' flex flex-col text-[#ffd4d0]'> 
              <div className='text-5xl font-bold mb-2'> 502  </div>
              <div> <p>  Projects Done </p> </div>
            </div>
            <div className=' flex flex-col text-[#ffd4d0]'> 
              <div className='text-5xl font-bold mb-2'> 10+  </div>
              <div> <p>  Years of Experience </p> </div>
            </div>
            <div className=' flex flex-col text-[#ffd4d0]'> 
              <div className='text-5xl font-bold mb-2'> 273+  </div>
              <div> <p>  Clients Served </p> </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe