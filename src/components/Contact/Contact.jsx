import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full flex justify-center items-center md:mt-40' id='CONTACTUS'>
      <div className='bg-primary rounded-[40px] bg-opacity-20 md:w-[1275px] ip:w-[700px] w-[320px]'>
        <form className='flex justify-center items-center
         flex-col md:w-[1275px] ip:w-[700px] w-[320px] h-full border border-none rounded-[40px] bg-secondary bg-opacity-90 p-10'>
        <h1 className='md:text-[36px] text-[24px] text-white font-bold mb-5'>JOIN HYDRA</h1>
        <div className='md:w-[414px] w-[116.5px] h-[0.1px] bg-white opacity-90'/>
        <p className='md:text-[36px] text-[24px] font-light text-white mt-6 text-center'>Let’s Build <br className='md:hidden block text-center'/>Your VR Experience</p>
        <div className='w-full h-full flex justify-center items-center gap-4 mt-20 md:flex-row flex-col'>
          <input type='text' className='md:w-[524px] w-[250px] md:h-[72px] h-[53px] outline-none
           rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='First Name'/>
                 <input type='text' className='md:w-[524px] w-[250px] md:h-[72px] h-[53px] outline-none
rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='Last Name'/>

        </div>
        <div className='w-full h-full flex justify-center items-center  gap-4 md:mt-10 mt-5 md:flex-row flex-col'>
          <input type='email' className='md:w-[524px] w-[250px] md:h-[72px] h-[53px] outline-none
           rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='Email'/>
                 <input type='number' className='md:w-[524px] w-[250px] md:h-[72px] h-[53px] outline-none
rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='Phone Number'/>
        </div>
        <input type='text' className='md:w-[1058px] ip:w-[640px] w-[250px] md:h-[72px] h-[53px] md:mt-10 mt-5 outline-none
rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='Subject'/>

<textarea type='text' className='md:w-[1058px] md:w-[1058px] ip:w-[640px] w-[250px] h-[210px] md:mt-10 mt-5 outline-none
rounded-[40px] bg-secondary border md:text-[20px] text-[14px] md:p-8 p-4 text-white' placeholder='Tell Us Something..'/>
<button className='mt-10 bg-primary w-[214px] h-[48px] rounded-[40px] text-[14px] font-bold'>SEND TO HYDRA</button>
        </form>
      </div>
    </div>
  )
}

export default Contact