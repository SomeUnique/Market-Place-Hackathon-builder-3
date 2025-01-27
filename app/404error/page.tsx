import React from 'react'
import Common from '../../components/common'
import Link from 'next/link' 
const page = () => {
  return (
    <div  className='bg-white w-full md:max-w-[1920px] mb-16'>
        <Common title='404 Error' subtitle='404'/>

        <h1 className='text-[94px] font-bold text-[#FF9F0D] mt-32 m text-center'>
            404
        </h1>
        <h2 className='text-[24px] font-bold text-center mt-4 md:text-[32px] '>
        Oops! Look likes something going wrong
        </h2>
        <p className='text-[16px] w-[490px] md:ml-[35%] ml-[15%] mt-4  text-gray-600 flex justify-center'>
        Page Cannot be found! we’ll have it figured out in no time.<br/>
        Menwhile, cheek out these fresh ideas
        </p>
        <div className='flex justify-center mt-6 mb-32 '>
        <Link href="/"><button className='md:max-w-[197px] w-full h-[58px] md:mx-8 mx-2 rounded-sm bg-[#FF9f0D] text-[#ffffff] p-2 r '>Go to home</button></Link>
        </div>
        </div>
        
  )
}
export default page
