import React from 'react'
import { shape } from '../assets/imports'
import { motion } from 'framer-motion'

const infos  = [ 
     {
         num:'01',
         title:'3D Conception & Design'
     },
     {
        num:'02',
        title:'Interaction Design'
    },
    {
        num:'03',
        title:'VR World User Testing'
    },
    {
        num:'04',
        title:'Hydra VR Deploy'
    },
]


const Circule = () => {
    return (
        <div className='grid md:grid-cols-4 ip:grid-cols-2 grid-cols-1 gap-10 mt-20'>
        {infos.map((info,index) => ( 
            <motion.div
            whileInView={{scale:[0,1]}}
            transition={{duration: index * 0.3}}
             className='w-full h-full justify-center items-center flex-row'>
                    <div className='flex justify-center items-center flex-col'>
            <div className='w-[198px] h-[198px]
         bg-rare rounded-full flex justify-center items-center flex-row'>
                <div className='w-[159px] h-[159px] rounded-full bg-primary
 flex justify-center items-center text-center'>
 <h1 className='text-[64px] font-bold text-[#343045]'>{info.num}</h1>
                </div>
            </div>
            <div className='flex justify-center items-center text-center two-lines leading-tight'>
                <img src={shape} className='mt-8' />
                <h1 className='mt-8 ml-5 text-[24px] text-white font-bold'>{info.title}</h1>
            </div>
        </div>
        </motion.div>)
        )}
        </div>
    )
        }

export default Circule