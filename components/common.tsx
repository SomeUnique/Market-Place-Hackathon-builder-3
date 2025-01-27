import Link from 'next/link'
import React from 'react'
interface propstype{
    title:string;
    subtitle: string
}
const Common:React.FC<propstype> = ({title,subtitle}:propstype) => {
    return (
        <div className='md:max-w-[1920px] h-[410px] w-full' style={{ backgroundImage: "url('images/heropic.png')" }}>
            <div className='w-full h-[104px] top-{198} text-center left-{850}'>
                <h1 className='font-bold text-[48px] w-full pt-[6%] text-white'>{title}</h1>
                <div className='flex w-full text-white gap-2 pl-[46%] pt-[]'>
                    <Link href="/"><span className='text-white'>Home</span></Link>&gt;<span className='text-[#FF9f0D]'>{subtitle}</span>
                </div>
            </div>
        </div>
    )
}
export default Common