import React from 'react'
import Image from 'next/image'
export const Page2 = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row gap-4 p-4">
  {/*<!-- Cart Items -->*/}
  <div className="flex-1">
    <div className="space-y-4">
      {/*<!-- Item -->*/}
      <div className='border-[#E0E0E0] border-[2px] w-[424px] h-[700px]  mb-40'>
      <div className="flex items-center gap-4 border-b pb-4 mt-10 ml-10">
        <Image src="/checkout.png" alt="Chicken Tikka Kabab" width={83}  height={88}className=" object-cover"></Image>
        <div className="flex-1">
          <h2 className="font-semibold text-lg">Chicken Tikka Kabab</h2>
          <p className="text-sm text-[#4F4F4F]">150 gm net</p>
          <p className="text-sm font-semibold text--[#4F4F4F]">50$</p>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b pb-4 mt-5 ml-10">
        <Image src="/checkout.png" alt="Chicken Tikka Kabab" width={83} height={88}  className="object-cover" />
        <div className="flex-1">
          <h2 className="font-semibold text-lg">Chicken Tikka Kabab</h2>
          <p className="text-sm text-[#4F4F4F]">150 gm net</p>
          <p className="text-sm font-semibold text--[#4F4F4F]">50$</p>
        </div>
      </div>
      <div className="flex items-center gap-4 border-b pb-4 mt-5 ml-10">
        <Image src="/checkout.png" alt="Chicken Tikka Kabab" width={83} height={88} className="object-cover" />
        <div className="flex-1">
          <h2 className="font-semibold text-lg">Chicken Tikka Kabab</h2>
          <p className="text-sm text-[#4F4F4F]">150 gm net</p>
          <p className="text-sm font-semibold text--[#4F4F4F]">50$</p>
        </div>
      </div>
      {/*<!-- Summary -->*/}
  <div className="w-full md:w-[376px] h-[202px] p-6 ml-5 mb-30">
    <div className="space-y-2">
      <div className="flex justify-between text-gray-700">
        <span>Sub-total</span>
        <span>$130</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Discount</span>
        <span>25%</span>
      </div>
      <div className="flex justify-between text-gray-700">
        <span>Tax</span>
        <span>$54.76</span>
      </div>
      <div className="flex justify-between font-semibold text-gray-900">
        <span>Total</span>
        <span>$432.65</span>
      </div>
    </div>
    <button className="mt-7 w-[350px] h-[58px] bg-[#FF9f0D] text-white py-2 rounded-sm">
      Place an order 
    </button>
  </div>
</div>
      </div>
    </div>
  </div>

    </div>
  )
}
