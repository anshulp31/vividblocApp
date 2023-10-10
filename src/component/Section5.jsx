import React from 'react'
import ellipse from '../assets/Ellipse 5.jpg'

const Section5 = () => {
  return (
    <div className='h-[500px]'>
        <div className='max-w-[1080px] lg:border-[0.1px] rounded border-slate-700 p-10  h-[437px] flex items-center mx-auto'>
          <div className='max-w-[90%] flex lg:flex-row flex-col   justify-between mx-auto'>
            <img src={ellipse} width={273} height={273}
              className='rounded-full flex justify-start mx-auto'>

            </img>
            <div className='ml-9'>
                <h1 className='text-white font-normal text-[60px]'>
                Woah.
                </h1>
                <p className='text-white text-base '>
                “The video is fantastic, and has been really well received by those 
                I’ve shared it with.
                 Our CEO described it is ‘sensational’ and said it made his day.”
                </p>

                <div className='text-white mt-6 flex justify-between flex-col '>
                  <h1 className='font-bold text-sm '>Jane Doe</h1>
                  <p>SomeCompany LLC.</p>
                  
               </div>
               <a href='/' className='text-blue-600 mt-40'>https://somecompanyllc.co</a>
            </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default Section5