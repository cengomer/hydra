import React from 'react'
import { shape,vr } from '../../assets/imports'
import { motion } from 'framer-motion'
const Intro = () => {
  return (
    <motion.div
    whileInView={{scale:[0,1]}}
    transition={{duration:0.5}}
     className='w-full h-full flex-1 flex justify-center items-start mt-40 flex-col' id='ABOUT'>

      <div className='w-full h-full flex-1 flex justify-between items-center md:flex-row flex-col'>
        <div className='flex justify-start md:items-start items-center flex-col'>
          <h1 className='font-bold md:text-[36px] text-[26px] text-white'>INTRODUCTION</h1>
          <div className='flex justify-start items-center'>
          <h1 className='font-light	text-white md:text-[36px] text-[26px]'>TO HYDRA VR</h1>
          <img src={shape} className='md:block hidden'/></div>
        </div>
        <div>
          <p className='font-normal	text-[16px] text-white md:block hidden'>
Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat<br className='md:block hidden'/> 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo <br className='md:block hidden'/>
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare <br className='md:block hidden'/>
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.<br className='md:block hidden'/>
          </p>
        </div>
      </div>
      <div className='w-full h-full flex justify-between items-center md:mt-10 mt-7 md:flex-row flex-col'>
        <div className='md:w-[490px] w-[318px]  md:h-[426px]'>
          <img src={vr}/>
        </div>
        <div>
          <h1 className='font-bold text-[36px] text-white md:block hidden'>ABOUT</h1>
          <h1 className='font-light	text-white text-[36px] mb-6 md:block hidden'>HYDRA VR</h1>
          <p className='font-normal	md:text-[16px] text-[14px] text-white mb-12 md:mt-0 mt-8'>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus <br className='md:block hidden'/>
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida <br className='md:block hidden'/>
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. <br className='md:block hidden'/>
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet <br className='md:block hidden'/>
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam <br className='md:block hidden'/>
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet <br className='md:block hidden'/>
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha<br className='md:block hidden'/>
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi<br className='md:block hidden'/>
n tempor.</p>
<div className='flex md:justify-start justify-center items-center'>
<button className='bg-primary text-[12px] font-bold md:w-[214px] w-[276px] md:h-[48px] h-[56px] rounded-[40px] md:mr-8 mr-0'>LET’S GET IN TOUCH</button></div>
        </div>
      </div>

    </motion.div>
  )
}

export default Intro