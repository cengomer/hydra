import React from 'react'
import { Logo } from '../../assets/imports'
import {AiOutlineInstagram,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='w-full h-full flex-1 flex justify-center items-center mt-20'>
      <div className='ip:grid flex grid-cols-4 grid-rows-0 justify-between items-center text-start md:flex-row flex-col'>
        <div className='min-w-[185px] min-h-[187px]'>
          <img src={Logo} alt='main-logo' className='w-full h-full'/>
        </div>
        <div className='h-[196px] w-[2px] bg-primary div-gradient mx-14 md:block ip:hidden hidden' />
        <div className='md:flex hidden flex-col justify-center items-start gap-5 text-white font-semibold'>
          {['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO', 'JOIN HYDRA'].map((nav, index) => (
            <a key={index} href={`#${nav}`} className='text-[16px]'>
              {nav}
            </a>
          ))}
        </div>
        <div className='h-[196px] w-[2px] bg-primary div-gradient mx-14 md:block ip:hidden hidden' />
        <div className='md:flex hidden flex-col justify-center items-start gap-5 text-white font-semibold'>
          {['F.A.Q', 'SITEMAP', 'TECHNOLOGIES', 'CONDITIONS', 'LICENSES'].map((nav, index) => (
            <a key={index} href={`#${nav}`} className='text-[16px]'>
              {nav}
            </a>
          ))}
        </div>
        <div className='h-[196px] w-[2px] bg-primary div-gradient mx-14 md:block ip:hidden hidden'  />
        <div className='flex flex-col justify-center items-start gap-5 text-white font-semibold'>
<h1 className='text-[16px]'>SOCIALIZE WITH HYDRA</h1>
<div className='w-full h-full flex justify-start items-center'>
  <AiFillFacebook className='icon text-snow cursor-pointer'/>
  <AiFillLinkedin className='icon text-snow cursor-pointer'/>
  <AiFillTwitterCircle className='icon text-snow cursor-pointer'/>
  <AiFillYoutube className='icon text-snow cursor-pointer'/>
  <AiOutlineInstagram className='icon2 text-snow cursor-pointer'/>
</div>
<button className='md:mt-10 mt-2 bg-primary w-[214px] h-[48px] rounded-[40px] text-[14px] font-bold text-snow'>BUILD YOUR WORLD</button>
        </div>  
        </div>
    </div>
  )
}

export default Footer