import React from 'react'

const Section4 = () => {
  return (
    <div>
        <div className='max-w-[1080px] h-[500px] mt-28 flex w-11/12 flex-col lg:flex-row 
            justify-between items-center mx-auto '>
            <div className='w-[60%] flex flex-row'>
          <div className='flex flex-col  justify-evenly gap-[80px]'>
                    <h2 className='font-medium text-xs text-white -rotate-90'>TESTIMONIALS</h2>
                    <div className='h-[1px] w-20 mt-1 bg-gradient-to-r 
                    from-[#1044FC] via-[#C6ACF5] to-[#F190DF] rotate-90'>
                    </div>
         </div>
         <div className='flex flex-col gap-6 max-w[50%] items-start'> 
                        <h1 className='text-white font-bold text-4xl'>Voices of Our Tribe</h1>
                        <p className='text-white leading-7 text-[17px]  font-normal opacity-80 '>
                        Meet the brands and individuals who've transformed 
                        their stories with us. Real narratives, real impact
                        </p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Section4