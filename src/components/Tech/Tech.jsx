import React,{useState,useEffect} from 'react'
import { vrG,tag1,tag2,tag3,tag4 } from '../../assets/imports'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { motion } from 'framer-motion';


const Tech = () => {
  const [isShown, setIsShown] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsShown(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <motion.div
    whileInView={{scale:[0,1]}}
    transition={{duration:0.5}}     
    className='w-full h-full felx-1 flex justify-center items-center md:mt-20 mt-[5rem] flex-col' id='TECHNOLOGIES'>
      <div className='ip:w-[700px] md:w-[1278px] w-[348px] md:h-[303px] h-[163.35px] rounded-[90px] flex justify-center items-center bg-no-repeat  bg-custom bg-cover bg-center'>
      <div className='ip:w-[700px] md:w-[1278px] w-[348px] md:h-[303px] h-[163.35px] flex justify-center items-center bg-black rounded-[90px] bg-opacity-40'>
      <div className='flex justify-center items-center flex-col md:mt-32'>
      <h1 className='font-bold md:text-[36px] text-[16px] text-white'>TECHNOLOGIES & HARDWARE</h1>
      <div className='flex justify-center items-center flex-col gap-16 '>
      <p className='font-normal md:text-[36px] text-[24px] text-white md:mt-0 mt-3'>
      USED BY HYDRA VR.
</p>
<div className='w-[60px] h-[60px]
 bg-primary rounded-full text-white md:flex hidden justify-center items-center'>
  <a className='text-[30px]' href='#sponsors'>↓</a>
 </div>
</div>
</div>
      </div>
      </div>
      <div className='w-full h-full md:flex hidden justify-center items-center gap-24 mt-16' id='sponsors'>
        {[tag1,tag2,tag3,tag4].map((img2) => ( 
          <img src={img2} className='ip:w-[120px] w-[222px] ip:h-[120px] h-[222px]'/>
        ))}
      </div>
      <div>
        {isShown && ( 
<div className='w-[256px] h-[256px] ip:hidden'>
<div className='w-full h-full flex justify-center items-center text-center'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      style={{ '--swiper-navigation-color': 'white', '--swiper-navigation-size': '25px'}}

    >
      <SwiperSlide><img src={tag1} className='ml-14 mt-2 w-[150px]'/></SwiperSlide>
      <SwiperSlide><img src={tag2} className='ml-[3.5rem] mt-2 w-[150px]'/></SwiperSlide>
      <SwiperSlide><img src={tag3} className='ml-[3.5rem] mt-2 w-[150px]'/></SwiperSlide>
      <SwiperSlide><img src={tag4} className='ml-[3.5rem] mt-2 w-[150px]'/></SwiperSlide>
    </Swiper>
</div>
</div>
        )}
      </div>
    </motion.div>
  )
}

export default Tech