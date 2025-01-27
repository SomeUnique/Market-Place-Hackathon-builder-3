import React from 'react'
import Common from '../../components/common'
import Image from 'next/image';
import { PiQuotesThin } from "react-icons/pi";
export const Page = () => {
  return (
    <div className='bg-white w-full md:max-w-[1920px] mb-16'>
      <Common title='About Us' subtitle='About' />
      <div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-40 mt-38">
  {/* Left: Image Grid */}
  <div className="w-[669px] h-[734px] grid grid-cols-2 gap-6  ">
    <div className="row-span-2 mt-32">
      <Image
        src="/unsplash-1.png"
        alt="Food Image 1"
        className="rounded-lg"
        width={336}
        height={600}
      />
    </div>
    <div className='mt-52'>
    <Image
      src="/unsplash-2.png"
      alt="Food Image 2"
      className="rounded-lg"
      width={309}
      height={200}
    />
    </div>
    <div className=' mt-2'>
    <Image
      src="/unsplash 3.png"
      alt="Food Image 3"
      className="rounded-lg"
      width={309}
      height={350}
    />
    </div>
  </div>

  {/* Right: Text Content */}
  <div className="lg:w-1/2 gap-10 mt-40">
    <p className="text-[#FF9F0D] font-semibold font-Miniver mb-2 w-[68px] h-[26px]">About us</p>
    <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
      Food is an important part Of a balanced Diet
    </h1>
    <p className="text-gray-600 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat fringilla bibendum. Ut ac elit
      augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
      vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <div className="flex items-center gap-10">
      <button className="bg-[#FF9F0D] text-white px-6 py-3 rounded-lg w-[195px] h-[58px]">
        Show more
      </button>
      <button className="flex items-center gap-2 text-[#FF9F0D] font-semibold">
        <svg
          xmlns=""
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-[60px] h-[60px] bg-[#FF9F0D] rounded-full text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.752 11.168l-4.576-2.64A1 1 0 009 9.424v5.152a1 1 0 001.176.928l4.576-2.64a1 1 0 000-1.736z"
          />
          
        </svg>
        Watch video
      </button>
    </div>
  </div>
</div>

      {/* Why Choose Us Section */}
      <section className="mt-60 w-[1320px] h-[856px] ml-52">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="text-[#4F4F4F] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
          <div>
            <Image src="/about.png" alt='' width={1320} height={386} className='mt-10'></Image>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-[1320] h-[253]">
            <div className="flex flex-col items-center">
              <Image
                src="/Student.png"
                alt="Feature"
                className="w-20 h-20"
                width={80}
                height={80}
              />
              <h3 className="mt-4 font-bold text-lg">Best Chef</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/Coffee.png"
                alt="Feature"
                className="w-20 h-20"
                width={80}
                height={80}
              />
              <h3 className="mt-4 font-bold text-lg">120 Item food</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/man.png"
                alt="Feature"
                className="w-20 h-20"
                width={80}
                height={80}
              />
              <h3 className="mt-4 font-bold text-lg">Clean Environment</h3>
              <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#FF9F0DD9] py-16 w-[1920px] h-[460px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#FFFFFF] mr-32 mt-10">Team Members</h2>
          <p className='mr-20 text-[#FFFFFF] mt-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[1412px] h-[380px]">
            <div className="bg-white p-6 rounded-sm shadow-sm shadow-gray-400">
              <Image
                src="/pic3.png"
                alt="Team Member"
                className=" w-[312px] h-[398px] mx-auto"
                width={150}
                height={150}
              />
              <h3 className="mt-4 font-semibold text-lg w-[312] h-[88]">Mark Henry</h3>
              <p className="text-[#828282]">Owner</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm shadow-gray-400">
              <Image
                src="/pic3.png"
                alt="Team Member"
                className=" w-[312px] h-[398px] mx-auto"
                width={150}
                height={150}
              />
              <h3 className="mt-4 font-semibold text-lg">Lucky Helen</h3>
              <p className="text-[#828282]">Chef</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm shadow-gray-400">
              <Image
                src="/pic3.png"
                alt="Team Member"
                className=" w-[312px] h-[398px] mx-auto"
                width={150}
                height={150}
              />
              <h3 className="mt-4 font-semibold text-lg">Moon Henry</h3>
              <p className="text-[#828282]">Founder</p>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm shadow-gray-400">
              <Image
                src="/pic3.png"
                alt="Team Member"
                className=" w-[312px] h-[398px] mx-auto"
                width={150}
                height={150}
              />
              <h3 className="mt-4 font-semibold text-lg">Tom Monrow</h3>
              <p className="text-[#828282]">Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 mt-80">
  <div className="container mx-auto px-4 text-center">
    {/* Section Header */}
    <p className="text-[#FF9F0D] font-bold mb-2 ml-16 w-[128px] h-[40px]">Testimonials</p>
    <h2 className="text-5xl font-bold text-gray-800 mb-20 ml-16 w-[599px] h-[56px] ">
      What our client are saying
    </h2>

    {/* Testimonial Card */}
    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto w-[687px] h-[476px]">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img
          src="/Ellipse 6.png"
          alt="Client Image"
          className="w-[133px] h-[134px] rounded-full border-4 border-white "
        />
      </div>

      {/* Quotation Icon */}
      <div className="mt-20">
        <span className="text-[#FF9F0D] text-5xl flex justify-center"><PiQuotesThin /></span>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600  mt-6 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum. Ut ac elit
        augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
        sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>

      {/* Rating and Name */}
      <div className="mt-6">
        <div className="text-[#FF9F0D] flex justify-center text-3xl">
          ★★★★☆
        </div>
        <h3 className="mt-6 font-bold text-lg">Alamin Hasan</h3>
        <p className="text-gray-500">Food Specialist</p>
      </div>
    </div>

    {/* Pagination */}
    <div className="flex justify-center mt-6 gap-2">
      <span className="w-3 h-3 bg-[#FF9F0D] rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
    </div>
  </div>
</section>

      {/* Food Menu Section */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 ">
    {/* Section Header */}
    <div className='text-center ml-96'>
    <h2 className="text-5xl font-bold text-[#333333] w-[355px] h-[56px] ml-44">
      Our <span className="text-[#333333]">Food Menu</span>
    </h2>
    <p className="text-gray-600 mt-2 grid grid-cols-1 md:grid-cols-3 ml-52">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Varius sed pharetra dictum neque massa congue
    </p>
    </div>
    {/* Tabs */}
    <div className="flex justify-center space-x-8 mt-10 border-b border-[#E0E0E0] ">
      
      {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((tab, index) => (
        <button
          key={index}
          className={`text-lg font-semibold ${
            tab === "Breakfast" ? "text-[#FF9F0D] border-b-2 border-[#FF9F0D]" : "text-gray-600"
          } `}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Menu Items */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-start border-b border-gray-200 pb-4"
        >
          <div>
            <h3 className="text-lg font-bold text-gray-800  cursor-pointer">
              Alder Grilled Chinook Salmon
            </h3>
            <p className="text-gray-500 text-sm">Toasted French bread topped with romano, cheddar</p>
            <p className="text-gray-400 text-sm">560 CAL</p>
          </div>
          <p className="text-[#FF9F0D] font-bold text-lg">32$</p>
        </div>
      ))}
    </div>

    {/* View Menu Button */}
    <div className="mt-10 text-center">
      <button className="border-[#FF9F0D] border-[2px] text-[#FF9F0D] px-8 py-3 ">
        View menu
      </button>
    </div>
  </div>
</section>
    </div>
    </div>
  );
}
export default Page