import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
const CopyRights = () => {
  return (
    <div className='w-full h-full flex-1 flex justify-center items-center mt-20 text-white'>
      <div className='flex md:justify-between justify-center items-center text-center md:gap-20 gap-5 md:flex-row flex-col'>
      <div className='flex justify-center items-center flex-col'>
      <h1>Coded From Scratch BY</h1>
      <h1>- OMER ELMAS -</h1>
      </div>
      <div className='flex justify-center items-center flex-col'>
      <h1>get in touch with me</h1>
      <a href='mailto:omer.elmas1@ogr.sakarya.edu.tr' className='border bg-primary border-none rounded-[90px] p-[4px]'>omer.elmas1@ogr.sakarya.edu.tr</a>
      <h1>&&</h1>
<a href='https://www.linkedin.com/in/omer-elmas-010490251/' target='_blank'><AiFillLinkedin className='w-[25px] h-[25px] text-primary'/></a>
</div><div className='md:flex hidden justify-center items-center flex-col'>
      <h1>Design BY</h1>
      <h1>- BY ZINE. E. FALOUTI -</h1></div>
      </div>
    </div>
  )
}

export default CopyRights