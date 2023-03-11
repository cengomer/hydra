import React,{useState,useEffect} from 'react'
import { shape,HeroImg,Vector1,Vector2,Vector3,Vector4 } from '../../assets/imports'
import {SiGooglemaps} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {CiMail} from 'react-icons/ci'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { motion } from 'framer-motion'

const Hero = () => {
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
    <div className='w-full h-full flex-1 flex justify-center items-center md:mt-[5rem] mt-[3rem] flex-col'>
      <div className='w-full h-full flex justify-between items-center md:flex-row  flex-col-reverse md:text-start text-center'>
        <div>
          <h1 className='font-bold text-white md:text-[46px] text-[25px]'><span className='text-primary'>Dive</span> Into The Depths</h1>
          <h1 className='font-bold text-white md:text-[46px] text-[25px] mb-6'>Of <span className='text-primary'>Virtual Reality</span></h1>
          <p className='text-white text-[16px] font-small leading-[1.5rem] mb-12 md:block hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
            <div className='flex md:justify-start justify-center items-center'>
            <button className='bg-primary text-[12px] font-bold md:w-[214px] w-[292px] h-[48px] rounded-[40px] md:mr-8 mr-0'>BUILD YOUR WORLD</button>
            <motion.img
            whileInView={{scale:[0,2,1]}}
            transition={{duration:0.7}}
             src={shape} className='md:block hidden'/>
            </div>

        </div>
        <div className='md:w-[490px] w-[318px]  md:h-[426px] bg-[#a3a3a3]
         box-shadow-secondary rounded-100/100/100/240 bg-hero-pattern md:mb-0 mb-10'>
         <img
          src={HeroImg} className='rounded-100/100/100/240 min-w-full min-h-full'/>
        </div>
      </div>
      <div className='w-full p-8 h-[167px] md:flex hidden justify-between items-center rounded-[90px] bg-radial mt-16' id='JOINHYDRA'>
        <div className='flex justify-center items-center'>
          <SiGooglemaps className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <h1 className='text-[20px] font-bold text-white'>Pay Us a Visit</h1>
          <p className='text-[14px] text-white'>Union St, Seattle, WA 98101, United States</p></div>
        </div>
        <div className='w-[0.5px] h-[116px] bg-primary md:block hidden mr-5'/>
        <div className='flex justify-center items-center'>
          <FiPhoneCall className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <h1 className='text-[20px] font-bold text-white'>Give Us a Call</h1>
          <p className='text-[14px] text-white'>(110) 1111-1010</p></div>
        </div>
        <div className='w-[0.5px] h-[116px] mr-5 bg-primary md:block hidden'/>
        <div className='flex justify-center items-center'>
          <CiMail className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <h1 className='text-[20px] font-bold text-white'>Send Us a Message</h1>
          <p className='text-[14px] text-white'>Contact@HydraVTech.com</p></div>
        </div>
      </div>
      <div>
        {isShown && ( 
<div className=' w-[347px] h-[109px] bg-white mt-5 rounded-[90px] boxColor ip:hidden'>
<div className='w-full h-full flex justify-center items-center'>
<Swiper
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      style={{ '--swiper-navigation-color': 'white', '--swiper-navigation-size': '15px' }}
    >
      <SwiperSlide>
      <div className='flex justify-center items-center'>
          <SiGooglemaps className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <p className='text-[14px] text-white'>Union St, Seattle, WA 98101,<br/> United States</p></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center items-center'>
          <FiPhoneCall className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <p className='text-[14px] text-white'>(110) 1111-1010</p></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center items-center'>
          <CiMail className='w-[50px] h-[50px] md:mr-5 mr-0 text-primary'/>
          <div>
          <p className='text-[14px] text-white'>Contact@HydraVTech.com</p></div>
        </div>
      </SwiperSlide>
    </Swiper>
</div>
</div>
        )}
      </div>
    </div>
  )
}

export default Hero