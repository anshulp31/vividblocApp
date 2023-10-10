import React from 'react'

const Text = ({text}) => {
  return (
    <div className='font-semibold text-transparent bg-clip-text text-2xl
    bg-gradient-to-r  from-[#1044FC] via-[#C6ACF5] to-[#F190DF]'>
        {text}
    </div>
  )
}

export default Text