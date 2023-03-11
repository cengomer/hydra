import React, { useEffect, useState } from 'react'
import { shape } from '../../assets/imports'
import WhyCard from '../../constants/WhyCard'
import { r1, r2, r3, r4,news } from '../../assets/imports'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { motion } from 'framer-motion';
const Why = () => {
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
    className='w-full h-full flex-1 flex justify-center items-start md:mt-40 flex-col' id='SERVICES'>

      <div className='w-full h-full flex-1 flex justify-between items-center md:flex-row flex-col'>
        <div className='flex justify-start md:items-start items-center flex-col md:mt-20 mt-10'>
          <h1 className='font-bold md:text-[36px] text-[26px] text-white'>WHY BUILD</h1>
          <div className='flex justify-start items-center'>
            <h1 className='font-light	text-white md:text-[36px] text-[26px]'>WITH HYDRA?</h1>
            <img src={shape} className='md:block hidden' /></div>
        </div>
        <div className='md:mt-20'>
          <p className='font-normal	text-[16px] text-white md:block hidden'>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat <br className='md:block hidden' />
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo  <br className='md:block hidden' />
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare  <br className='md:block hidden' />
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.<br className='md:block hidden' />
          </p>
        </div>
      </div>
      <WhyCard />
      <div className='w-full h-full flex justify-center items-center'>
        {isShown && (

          <div className='w-[320px] h-[511px] rounded-[40px] boxColor mt-5 ip:hidden'>
<div className='w-full h-full flex justify-center items-center text-center'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      style={{ '--swiper-navigation-color': 'white', '--swiper-navigation-size': '25px'}}
    >
      <SwiperSlide>
      
      <div className='flex justify-center items-center flex-col text-center'>
                    <div className='w-[210px] h-[210px] bg-[#0e0e0e25]
 rounded-full flex justify-center items-center mt-8 mb-5'>
                        <img src={r1}
                        />
                    </div>

                    <div className='w-full h-full justify-center items-center'>
                        <h1 className='text-white text-[24px] font-bold '>SIMULATION</h1>
                        <div className='w-[154px] h-[0.1px] bg-[#c0b7e8] ml-[25%] mt-5' />
                        <p className='text-[12px] text-white text-start p-8'>Vitae sapien pellentesque habitant
                         morbi <br/> nunc. Viverra aliquet
                          porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button className='bg-primary text-[12px]
 font-bold w-[250px] h-[48px] rounded-[40px] mb-12'>
                            TRY IT NOW</button>
                    </div>
                </div>


      </SwiperSlide>
      <SwiperSlide>
      
      <div className='flex justify-center items-center flex-col text-center'>
                    <div className='w-[210px] h-[210px] bg-[#0e0e0e25]
 rounded-full flex justify-center items-center mt-8 mb-5'>
                        <img src={r2}
                        />
                    </div>

                    <div className='w-full h-full justify-center items-center'>
                        <h1 className='text-white text-[24px] font-bold '>EDUCATION</h1>
                        <div className='w-[154px] h-[0.1px] bg-[#c0b7e8] ml-[25%] mt-5' />
                        <p className='text-[12px] text-white text-start p-8'>Vitae sapien pellentesque habitant
                         morbi <br/> nunc. Viverra aliquet
                          porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button className='bg-primary text-[12px]
 font-bold w-[250px] h-[48px] rounded-[40px]'>
                            TRY IT NOW</button>
                    </div>
                </div>


      </SwiperSlide>
      <SwiperSlide>
      
      <div className='flex justify-center items-center flex-col text-center'>
                    <div className='w-[210px] h-[210px] bg-[#0e0e0e25]
 rounded-full flex justify-center items-center mt-8 mb-5'>
                        <img src={r1}
                        />
                    </div>

                    <div className='w-full h-full justify-center items-center'>
                        <h1 className='text-white text-[24px] font-bold '>SELF-CARE</h1>
                        <div className='w-[154px] h-[0.1px] bg-[#c0b7e8] ml-[25%] mt-5' />
                        <p className='text-[12px] text-white text-start p-8'>Vitae sapien pellentesque habitant
                         morbi <br/> nunc. Viverra aliquet
                          porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button className='bg-primary text-[12px]
 font-bold w-[250px] h-[48px] rounded-[40px]'>
                            TRY IT NOW</button>
                    </div>
                </div>


      </SwiperSlide>
      <SwiperSlide>
      
      <div className='flex justify-center items-center flex-col text-center'>
                    <div className='w-[210px] h-[210px] bg-[#0e0e0e25]
 rounded-full flex justify-center items-center mt-8 mb-5'>
                        <img src={r4}
                        />
                    </div>

                    <div className='w-full h-full justify-center items-center'>
                        <h1 className='text-white text-[24px] font-bold '>OUTDOOR</h1>
                        <div className='w-[154px] h-[0.1px] bg-[#c0b7e8] ml-[25%] mt-5' />
                        <p className='text-[12px] text-white text-start p-8'>Vitae sapien pellentesque habitant
                         morbi <br/> nunc. Viverra aliquet
                          porttitor rhoncus libero justo laoreet sit amet vitae.</p>
                        <button className='bg-primary text-[12px]
 font-bold w-[250px] h-[48px] rounded-[40px]'>
                            TRY IT NOW</button>
                    </div>
                </div>


      </SwiperSlide>
          </Swiper>
</div>

          </div>



        )}
      </div>
    </motion.div>
  )
}

export default Why