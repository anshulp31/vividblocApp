import React from 'react'
import Text from './Text'
import sectionImg from '../assets/section1.jpg' 
import sectionImg2 from '../assets/Rectangle 56.jpg' 


const Section1 = () => {
  return (
    <div className='max-w-full ml-24 flex md:flex-row-reverse flex-col justify-between text-white relative'>
        <div className='max-w-[60%]  '>
            <img src={sectionImg}  
                className='rounded-l-[800px] lg:opacity-100 opacity-0 w-[892px] h-[700px]'
             />
             {/* <img src={sectionImg2} className='left-0 w-full h-full rounded-b-full absolute top-0 lg:opacity-0 opacity-100'></img> */}
        </div>
        <div className='mt-52 flex flex-col  lg:static absolute'>
            
                <div  className='lg:absolute flex flex-col '>
                    <span className='font-bold text-5xl text-transparent bg-clip-text 
                    bg-gradient-to-r  from-[#1044FC] via-[#C6ACF5] to-[#F190DF] opacity-30'>
                        vividbloc <br/>
                        studio
                    </span>
                <h1 className='text-white text-4xl font-bold'>
                Where Your <span className='font-semibold text-transparent italic 
                text-4xl  text-white
                bg-gradient-to-r  from-[#1044FC] via-[#C6ACF5] to-[#F190DF] ' >
                Story Takes Center Stage</span>
                </h1>
                <p className='text-white text-2xl font-normal mt-2'>
                    Changing the Conversation, One Frame at a Time
                </p>
                <p className='mt-5'>Discover Your Story</p>
                <div className='h-[1px] w-32 mt-1 bg-gradient-to-r 
                 from-[#1044FC] via-[#C6ACF5] to-[#F190DF] '>
                </div>
                </div>
        </div>
        
    </div>
  )
}

export default Section1