import React from 'react'
import Text from './Text'
import { links } from '../config/links'
import { Link, NavLink } from 'react-router-dom'
import insta from '../assets/skill-icons_instagram.jpg'
import linkedin from "../assets/skill-icons_linkedin.jpg"
import twitter from "../assets/line-md_twitter-x-alt.png"

const Footer = () => {
  return (
    <div>
        <div className='h-[200px] flex lg:flex-row flex-col max-w-[1080px] justify-between mx-auto items-center lg:mt-0 mt-8'>
            <Text text={"vividbloc.studio"}/>
            <div className='flex lg:flex-row flex-col lg:gap-9 gap-2 text-white'>
                {
                    links.map(({link,title})=>(
                       
                            <Link
                                to={link}
                                key={title}
                            >
                                {title}
                            </Link>
                        
                    ))
                }
            </div>
            <div className='flex flex-row gap-7  '>
                <a href='/'>
                    <img src={linkedin} className='rounded-md'></img>
                </a>
                <a href='/'>
                    <img src={twitter} className='rounded-md bg-black'></img>
                </a>
                <a href='/'>
                    <img src={insta} className='rounded-md'></img>
                </a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer