import React from 'react'
import Common from '../../components/common'
import Secondside from './secondside'
import Firstside from './firstside'


const page= () => {
  return (
    <div className='md:max-w-[1920px]'>
        <Common title="Blog Details" subtitle="Blog details"/>
        <div className='md:max-w-[1320px] gap-2 flex flex-col md:flex-row ml-30'>
        <Firstside/>
        <Secondside/>
        </div>
    </div>
  )
}
export default page