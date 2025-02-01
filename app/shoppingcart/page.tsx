import React from 'react'
import Common from '../../components/common'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';

const page = () => {
  return (
    <div  className='bg-white w-full md:max-w-[1920px] mb-16'>
            <Common title='Shopping Cart' subtitle='Shopping cart'/>

    <div className="container mx-auto px-8 py-8 my-20">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="mt-4">
            <th className="text-left py-4 px-6 font-bold text-black text-lg">Product</th>
            <th className="text-left py-4 px-6 font-bold text-black text-lg">Price</th>
            <th className="text-left py-4 px-6 font-bold text-black text-lg">Quantity</th>
            <th className="text-left py-4 px-6 font-bold text-black text-lg">Total</th>
            <th className="text-left py-4 px-6 font-bold text-black text-lg">Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Row */}
          {[
            {
              id: 1,
              name: "Burger",
              price: 35,
              quantity: 1,
              total: 221.00,
              image: "/cart1.png"
            },
            {
              id: 2,
              name: "Fresh Lime",
              price: 25,
              quantity: 2,
              total: 521.00,
              image: "/cart2.png"
            },
            {
              id: 3,
              name: "Pizza",
              price: 15,
              quantity: 3,
              total: 421.00,
              image: "/cart3.png"
            },
            {
                id: 4,
                name: "Chocolate Muffin",
                price: 45,
                quantity: 2,
                total: 521.00,
                image: "/cart4.png"
              },
              {
                id: 5,
                name: "Cheese Butter",
                price: 15,
                quantity: 3,
                total: 425.00,
                image: "/product_img.png"
              },
          ].map((item, index) => (
            <tr key={item.id} className=" border-b border-gray-300 my-6 ">
              <td className="py-4 px-6 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={94}
                  height={98}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                  <div className="text-[#FF9F0D] flex mt-1 gap-1">
                  <FaStar /><FaStar /><FaStar /><span className='text-gray-300 flex gap-1'><FaStar /><FaStar /></span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6 text-gray-600 font-medium">
                ${item.price.toFixed(2)}
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2 border rounded-md w-[98px] h-[42px]">
                  <button className="px-3 py-1 ">-</button>
                  <span>{item.quantity}</span>
                  <button className=" px-3 py-1">+</button>
                </div>
              </td>
              <td className="py-4 px-6 text-black font-bold text-lg">
                ${item.total.toFixed(2)}
              </td>
              <td className="py-4 px-6">
                <button className="text-gray-400 text-lg font-semibold"><RxCross2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>




    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coupon Code Section */}
        <div>
        <h1 className="text-3xl font-bold mb-8">Coupon Code</h1>
        <div className="bg-white p-6 rounded-lg shadow-md ">
        
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non.
          </p>
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Enter Here code"
              className="w-full border rounded-sm px-4 py-2 text-sm "
            />
            <button className="bg-[#FF9F0D] text-white px-6 py-2 rounded-sm font-semibold hover:bg-orange-400">
              Apply
            </button>
          </div>
        </div>
        </div>

        {/* Total Bill Section */}
        <div>
        <h2 className="text-3xl font-bold mb-8">Total Bill</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-black">
              <span className='font-semibold text-lg'>Cart Subtotal</span>
              <span className='font-semibold text-lg'>$120.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping Charge</span>
              <span>$0.00</span>
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between text-base font-semibold">
              <span>Total Amount</span>
              <span>$205.00</span>
            </div>
          </div>
          <Link href="/checkoutPage"><button className="w-full mt-6 bg-[#FF9F0D] text-white py-3 rounded-md font-semibold hover:bg-orange-400">
            Proceed to Checkout
          </button></Link>
        </div>
        </div>
      </div>
    </div>










            </div>
  )
}
export default page