import React from 'react'
import Common from '../../components/common'
import Page1 from './page1'
import { Page2 } from './page2'

const Checkoutpage= () => {
  return (
    <><div className='bg-white w-full md:max-w-[1920px] mb-16'>
          <Common title='Checkout Page' subtitle='Checkout' />
      </div >
      <div className='md:max-w-[1320px] gap-2 flex flex-col md:flex-row ml-40'>
      <Page1/>
      <Page2/>
          </div></>
  )
}  
export default Checkoutpage