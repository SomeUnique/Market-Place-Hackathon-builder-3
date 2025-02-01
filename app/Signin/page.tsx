import React from 'react'
import Common from '../../components/common'
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";

 const page = () => {
  return (
    <div className='bg-white md:max-w-[1920px]'>
     <Common title='Sign In Page' subtitle='Sign in'/>
     <div className='md:max-w-[424px] w-full h-[624px] shadow-sm shadow-[#FF9f0D]  space-y-2 md:mx-[40%] mx-8 my-36'>
      <h2 className=' font-bold text-[20px] mt-6 mb-2 md:pl-[40px] pl-[25px] '>Sign In</h2>
      
      <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-gray-200 border-[1px] '>
        <AiOutlineUser size={24} className='text-[#000000]' />
        <input type="text" placeholder='Name'/>
        </div>

        <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-gray-200 border-[1px] '>
        <MdOutlineMail size={24} className='text-[#000000]' />
        <input type="text" placeholder='Email'/>
        </div>

        <div className='flex p-4 gap-4 md:mx-8 mx-2 rounded-md border-gray-200 border-[1px] '>
        <CiLock size={24} className='text-[#000000]' />
        <input type="password" placeholder='Password'/>
        </div>

        <div className='flex p-4 gap-4 md:mx-8 mx-2'>
        
        <input type="checkbox" className='bg-[#FF9f0D] text-[#ffffff]'/>
        <p>Remember me?</p>
        </div>
        <button className='md:max-w-[360px] w-full h-[44px] md:mx-8 mx-2 rounded-md bg-[#FF9f0D] text-[#ffffff] p-2 '>Sign In</button>
        <p className='text-right mt-4 md:mx-8 mx-2'>Forgot Password?</p>
        <div className='w-full  flex items-center justify-center'>
          <hr className='w-1/3 bg-gray-500 border-2'/>
          <span className='text-gray-500 border-[2px] p-2'>OR</span>
          <hr className='w-1/3 bg-gray-500 border-2 '/>
          </div>
          <div className='flex p-4 gap-16 md:mx-8 mx-2 rounded-md border-gray-200 border-[1px] '>
        <FcGoogle  size={24} />
        <p>Sign In with Google</p>
        </div>
          <div className='flex p-4 gap-16 md:mx-8 mx-2 rounded-md border-gray-200 border-[1px]'>
        <IoLogoApple size={24}  />
      <p>Sign In with Apple</p>
        </div>
        
     </div>
    </div>
  )
}
export default page