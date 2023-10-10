import React from 'react'

import section2Img from '../assets/Rectangle 33.jpg';
import img1 from '../assets/Rectangle 36 (1).jpg';
import img2 from '../assets/Rectangle 37.jpg';
import img3 from '../assets/Rectangle 38.jpg';
import img4 from '../assets/Rectangle 39.jpg';



const data=[
    {
        id:1,
        title:"Video Production",
        image:img1,
    },
    {
        id:2,
        title:"Talent Management",
        image:img2,
    },
    {
        id:3,
        title:"Personal Branding",
        image:img3,
    },
    {
        id:4,
        title:"Event Management",
        image:img4,
    }

]
const Section3 = () => {
  return (
    <div className='mt-[500px]'>
        <div>
            <h1 className='text-white font-bold text-[40px]
             leading-10 mx-auto text-center'>Our Craft</h1>

             <div className='flex flex-row gap-2 flex-wrap justify-center hover:cursor-pointer mt-24 items-center relative'>
                {
                    data.map(({image,id,title})=>(
                        <div className='relative transition-all hover:duration-1000  hover:bg-gradient-to-b from-white to-black ' key={id}>
                            <img src={image} className='w-[320px] h-[475px] 
                                 hover:opacity-70
                            '></img>
                            <h1 className='text-white absolute top-[90%] left-[84px]
                                text-xl font-normal leading-3
                            '>{title}</h1>
                        </div>
                    ))
                }
             </div>
        </div>
    </div>
  )
}

export default Section3