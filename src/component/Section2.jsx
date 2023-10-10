import React from 'react'
import section2Img from '../assets/Rectangle 33.jpg'

const Section2 = () => {
  return (
    <div>
        <div className='relative '>
            <div className='max-w-[1250px]  mt-28 flex w-11/12 flex-col lg:flex-row 
            justify-between items-center mx-auto '>

                {/* left section2 */}
                <div className='w-[70%] flex flex-row '>
                    <div className='flex flex-col  justify-evenly gap-[120px]'>
                    <h2 className='font-medium text-xs text-white -rotate-90'>ABOUT US</h2>
                    <div className='h-[1px] w-32 mt-1 bg-gradient-to-r 
                    from-[#1044FC] via-[#C6ACF5] to-[#F190DF] rotate-90'>
                    </div>
                    </div>
                    <div className='flex flex-col gap-6 '> 
                        <h1 className='text-white font-bold text-4xl'>Who We Are</h1>
                        <p className='text-white leading-7 text-[17px]  font-normal opacity-80 '>
                        Welcome to<span
                        className='font-semibold text-transparent bg-clip-text text-2xl
                            bg-gradient-to-r  from-[#1044FC] via-[#C6ACF5] to-[#F190DF]'
                        > ViVidBloc.studio,</span>
                         a realm where creativity knows no bounds.
                          We're not just a video production agency; 
                          we're your creative confidants. Our approach 
                          is rooted in a unique blend of storytelling and strategy, 
                         designed to reflect the world as it truly 
                        is. We call it 'Unified Vision,' and it's what sets us apart.
                        </p>
                    </div>
                </div>
                <div className='top-28  mr-16 opacity-40  lg:absolute right-0 relative mx-auto
                 '>
                    <img src={section2Img} 
                        className='w-[603px] h-[350px] rounded-md  inset-0 bg-gradient-to-b from-black to-white '
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section2