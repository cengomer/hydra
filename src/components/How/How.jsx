import React,{useState,useEffect} from 'react'
import { shape } from '../../assets/imports'
import Circule from '../../constants/Circule'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';


const How = () => {
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
<div className='w-full h-full flex-1 flex justify-center items-start md:mt-20 flex-col' id='HOWTO'>

<div className='w-full h-full flex-1 flex justify-between items-center md:flex-row flex-col'>
  <div className='flex justify-start md:items-start items-center flex-col'>
    <h1 className='font-bold md:text-[36px] text-[26px] text-white'>HOW WE BUILD</h1>
    <div className='flex justify-start items-center'>
    <h1 className='font-light	text-white md:text-[36px] text-[26px]'>WITH HYDRA VR?</h1>
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
<div className='w-full h-full md:flex hidden justify-start items-center'>
  <Circule/>
</div>
<div className='w-full h-full flex justify-center items-center'>
  {isShown && ( 
<div className='w-[270px] h-[270px] mt-5 mb-16 ip:hidden'>
<div className='w-full h-full flex justify-center items-center text-center'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      style={{ '--swiper-navigation-color': 'white', '--swiper-navigation-size': '25px'}}
    >
      <SwiperSlide>

      <div className='w-full h-full justify-center items-center flex-row'>
                    <div className='flex justify-center items-center flex-col'>
            <div className='w-[198px] h-[198px]
         bg-rare rounded-full flex justify-center items-center flex-row'>
                <div className='w-[159px] h-[159px] rounded-full bg-primary
 flex justify-center items-center text-center'>
 <h1 className='text-[64px] font-bold text-[#343045]'>01</h1>
                </div>
            </div>
            <div className='flex justify-center items-center text-center two-lines leading-tight'>
                <h1 className='mt-0 ml-0 text-[24px] text-white font-bold'>3D Conception <br/>& Design</h1>
            </div>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>

      <div className='w-full h-full justify-center items-center flex-row'>
                    <div className='flex justify-center items-center flex-col'>
            <div className='w-[198px] h-[198px]
         bg-rare rounded-full flex justify-center items-center flex-row'>
                <div className='w-[159px] h-[159px] rounded-full bg-primary
 flex justify-center items-center text-center'>
 <h1 className='text-[64px] font-bold text-[#343045]'>02</h1>
                </div>
            </div>
            <div className='flex justify-center items-center text-center two-lines leading-tight'>
                <h1 className='mt-0 ml-0 text-[24px] text-white font-bold'>Interaction<br/> Design</h1>
            </div>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>

      <div className='w-full h-full justify-center items-center flex-row'>
                    <div className='flex justify-center items-center flex-col'>
            <div className='w-[198px] h-[198px]
         bg-rare rounded-full flex justify-center items-center flex-row'>
                <div className='w-[159px] h-[159px] rounded-full bg-primary
 flex justify-center items-center text-center'>
 <h1 className='text-[64px] font-bold text-[#343045]'>03</h1>
                </div>
            </div>
            <div className='flex justify-center items-center text-center two-lines leading-tight'>
                <h1 className='mt-0 ml-0 text-[24px] text-white font-bold'>VR World <br/>User Testing</h1>
            </div>
        </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>

      <div className='w-full h-full justify-center items-center flex-row'>
                    <div className='flex justify-center items-center flex-col'>
            <div className='w-[198px] h-[198px]
         bg-rare rounded-full flex justify-center items-center flex-row'>
                <div className='w-[159px] h-[159px] rounded-full bg-primary
 flex justify-center items-center text-center'>
 <h1 className='text-[64px] font-bold text-[#343045]'>04</h1>
                </div>
            </div>
            <div className='flex justify-center items-center text-center two-lines leading-tight'>
                <h1 className='mt-0 ml-0 text-[24px] text-white font-bold'>Hydra VR<br/> Deploy</h1>
            </div>
        </div>
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

export default How