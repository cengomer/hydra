import React from 'react'
import { r1, r2, r3, r4,news } from '../assets/imports'


const cardsArray = [
    {
        imgURL: r1,
        title: 'SIMULATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
        imgURL: r2,
        title: 'EDUCATION',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
        imgURL: r1,
        title: 'SELF-CARE',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
        imgURL: r4,
        title: 'OUTDOOR',
        text: 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
]




const WhyCard = () => {
    return (
        <div className='w-full h-full ip:grid md:flex hidden grid-cols-2  flex-1 justify-center items-center gap-10 md:flex-row'>
        
{cardsArray.map((card,index) => ( 
<>
<div className='w-[310px] h-[511px] rounded-[40px]
         bg-[#211E2E] shadow-[#433D60] shadow-2xl flex justify-center items-start mt-20' key={index}>
<div className='flex justify-center items-center flex-col text-center'>
                    <div className='w-[210px] h-[210px] bg-[#0e0e0e25]
 rounded-full flex justify-center items-center mt-8 mb-5'>
                        <img src={card.imgURL}
                        />
                    </div>

                    <div className='w-full h-full justify-center items-center'>
                        <h1 className='text-white text-[24px] font-bold '>{card.title}</h1>
                        <div className='w-[154px] h-[0.1px] bg-[#c0b7e8] ml-[25%] mt-5' />
                        <p className='text-[12px] text-white text-start p-8'>{card.text}</p>
                        <button className='bg-primary text-[12px]
 font-bold md:w-[154px] w-[292px] h-[48px] rounded-[40px]'>
                            TRY IT NOW</button>
                    </div>
                </div>
            </div>

                    </>

))}

        </div>
    )
}

export default WhyCard