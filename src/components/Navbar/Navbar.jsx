import React, { useState } from 'react'
import { Logo, LogoText } from '../../assets/imports'
import { RiMenu3Fill } from 'react-icons/ri'
import { HiX } from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <motion.div
    whileInView={{y:[-60,0]}}
    transition={{duration:0.4}}
     className='w-full h-full flex justify-center items-center text-center flex-1'>

      <div className='w-full h-full flex-1 flex justify-between items-center'>


        <div className='md:w-[102px] w-[59px] flex justify-center items-center '>
          <img src={Logo} alt='logo' className='w-full h-full' />
          <img src={LogoText} alt='logo' className='w-full h-full' />
        </div>


        <div>
          <ul className='ip:w-[200px] w-full h-full flex-1 md:flex hidden gap-8
           text-white justify-center items-center font-semibold ip:ml-10'>
            {['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO'].map((nav, index) => (
              <li key={index}>
              <a href={`#${nav.replace(/\s+/g, '')}`} className='ip:text-[10px]'>
                  {nav}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className='flex justify-center items-center ml-5 flex-row flex-wrap text-center'>
          <a href='#CONTACTUS'><button className=' ip:w-[100px] w-[154px] h-[48px] border rounded-[40px]
           text-white ip:mr-1 mr-8 font-semibold md:flex hidden justify-center items-center ip:mb-0 mb-0 text-[12px]'>CONTACT US</button></a>
          <a href='#JOINHYDRA'><button className='ip:w-[100px] w-[154px] h-[48px] border border-none
           bg-[#8176AF] rounded-[40px] text-[#302C42] font-semibold md:flex hidden justify-center items-center text-[12px]'>JOIN HYDRA</button></a>
        </div>
        <div className='w-[35px] h-[35px] rounded-[50%] relative md:hidden flex justify-center items-center'>
          <RiMenu3Fill onClick={() => setToggle(true)} className='w-[33px] h-[26px] text-primary font-bold' />
          {toggle && (
            <div className='fixed top-0 bottom-0 right-0 z-[5] p-[1rem] w-[80%]
 h-[100vh] flex justify-end items-end flex-col bg-[#645b8f]'>
              <HiX onClick={() => setToggle(false)} className='w-[35px] h-[35px] mx-[1rem] my-[2.5rem]' />
              <ul className='w-full h-full flex-1 flex gap-8
           text-white justify-center items-center font-semibold flex-col text-[30px] cursor-pointer'>
                {['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO', 'CONTACT US', 'JOIN HYDRA'].map((nav, index) => (
                  <li key={index}>
                    <a href={`#${nav.replace(/\s+/g, '')}`}>
                      {nav}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>




    </motion.div>
  )
}

export default Navbar