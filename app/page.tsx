import Image from "next/image";
import Link from "next/link";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";
import { PiQuotesThin } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-black">
   <section className="relative bg-black text-white py-16 ">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start ">
    {/* Left Content */}
    <div className="lg:w-1/2 space-y-6 mt-28 ">
      <p className="text-[#FF9F0D] font-semibold text-lg">It&apos;s Quick & Amusing!</p>
      <h1 className="text-5xl font-bold leading-tight">
        <span className="text-[#FF9F0D]">The</span> Art of Speed <br />
        Food Quality
      </h1>
      <p className="text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
      </p>
      <button className="mt-4 bg-[#FF9F0D] text-black px-6 py-3 rounded-full hover:bg-orange-600 w-[190px] h-[60px]">
        See Menu
      </button>
    </div>

    {/* Right Content */}
    <div className="relative w-[878px] h-[670px]  ">
      <Image
        src="/Image.png"
        alt="Food Plate"
        width={878}
        height={670}
        className="rounded  md:ml-20 md:mr-0 w-[800px] h-[600px] object-cover shadow-lg"
      />
    </div>
  </div>
</section>


{/* Second part*/}
<div className="bg-black text-white py-16 px-8 gap-4">
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Text Section */}
    <div className="lg:w-1/2">
      <h3 className="text-[#FF9F0D] text-lg font-semibold">About us</h3>
      <h2 className="text-6xl font-bold mt-4">
        <span className="text-[#FF9F0D]">We</span> Create the best foody product
      </h2>
      <p className="text-gray-400 mt-10  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <ul className="mt-10 space-y-3">
        <li className="flex items-center gap-2">
          <span className="text-white">✔</span>
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </li>
        <li className="flex items-center gap-2 mt-6">
          <span className="text-white">✔</span>
          Quisque diam pellentesque bibendum non dui volutpat fringilla
        </li>
        <li className="flex items-center gap-2">
          <span className="text-white">✔</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
      <button className="mt-10 bg-[#FF9F0D] text-black px-6 py-3 rounded-full hover:bg-orange-600 w-[190px] h-[60px]">
        Read More
      </button>
    </div>

    {/* Image Section */}
    <div className="lg:w-1/2 grid grid-rows-2 gap-6">
      <Image
        src="/foodpic1.jpeg"
        alt="Large Food Item"
        width={660}
        height={330}
        className="rounded-lg object-cover w-[660px] h-[330px]"
      />
      <div className="grid grid-cols-2 ">
        <Image
          src="/foodpic2.jpeg"
          alt="Small Food Item 1"
          width={322}
          height={194}
          className="rounded-sm object-cover w-[350px] h-[194px]"
        />
        <div className="mr-20">
        <Image
          src="/foodpic3.jpeg"
          alt="Small Food Item 2"
          width={322}
          height={194}
          className="rounded-sm object-cover w-[322px] h-[194px]"
        />
        </div>
      </div>
    </div>
  </div>
</div>


{/* Third part*/}
<div className="bg-black text-white py-16 px-8">
  <div className="container mx-auto text-center">
    {/* Title Section */}
    <h3 className="text-[#FF9F0D] text-lg font-semibold">Food Category</h3>
    <h2 className="text-5xl font-bold mt-4">
      <span className="text-[#FF9F0D]">Cho</span>ose Food Item
    </h2>

    {/* Food Items Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 text-center ml-5">
      {/* Food Item 1 */}
      <div className="relative group ">
        <Image
          src="/food1.png"
          alt="Food Item 1"
          width={305}
          height={328}
          className="rounded-sm object-cover w-[305px] h-[328px]"
        />
        <div className="absolute inset-0  flex flex-col items-center justify-center rounded-lg transition duration-300 mr-40">
          <span className="text-[#FF9F0D] bg-white px-4 py-2 rounded-lg text-sm font-semibold">
            Save 30%
          </span>
          <p className="text-white font-bold  bg-[#FF9F0D] rounded-lg w-[220px] h-[46px] mt-4 justify-center">Fast Food Dish</p>
        </div>
      </div>

      {/* Food Item 2 */}
      <div>
        <Image
          src="/food4.png"
          alt="Food Item 2"
          width={305}
          height={329}
          className="rounded-sm object-cover w-[305px] h-[329px]"
        />
      </div>

      {/* Food Item 3 */}
      <div>
        <Image
          src="/food3.png"
          alt="Food Item 3"
          width={305}
          height={329}
          className="rounded-sm object-cover w-[305px] h-[329px]"
        />
      </div>

      {/* Food Item 4 */}
      <div>
        <Image
          src="/food2.png"
          alt="Food Item 4"
          width={305}
          height={329}
          className="rounded-sm object-cover w-[305px] h-[329px]"
        />
      </div>
    </div>
  </div>
</div>

{/*Fourth part */}
<div className="bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    {/* Image Grid Section */}
    <div >
      <Image src="/Whychoseus.png" alt="pic" width={1320} height={716}></Image>
    </div>

    {/* Text Content Section */}
    <div className="max-w-md">
      <h3 className="text-[#FF9F0D] text-xl font-medium">Why Choose Us</h3>
      <h2 className="text-5xl font-bold leading-tight">
        <span className="text-[#FF9F0D]">Extra </span><span>ordinary taste</span> <br />
        And Experienced
      </h2>
      <p className="text-gray-300 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
        non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id
        elementum.
      </p>

      {/* Icon Section */}
      <div className="grid grid-cols-3 gap-6 mt-8 ">
        <div className="flex flex-col items-center ">
          <div className="bg-[#FF9F0D] text-white p-4 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <PiHamburgerLight />
            </svg>
          </div>
          <p className="text-gray-300 mt-2 text-center">Fast Food</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#FF9F0D] text-white p-4 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <PiCookieLight />
            </svg>
          </div>
          <p className="text-gray-300 mt-2 text-center">Lunch</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#FF9F0D] text-white p-4 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <TbGlassFull />
            </svg>
          </div>
          <p className="text-gray-300 mt-2 text-center">Dinner</p>
        </div>
      </div>

      {/* Badge Section */}
      <div className="mt-8 bg-white text-[#FF9F0D] text-lg  font-medium px-6 py-4 rounded-lg w-fit ">
        <span className="text-4xl">30+ </span><span className="text-gray-400">Years of</span> <span className="text-black">Experienced</span>
      </div>
    </div>
  </div>
</div>

{/*Sixth part */}
       <div className="mt-6 bg-black">
        <Image src="/Client & customers.png" alt="customer" width={1000} height={1000}
        className='w-full'/>
      </div>


{/*Seventh part */}

<div className="bg-black text-white py-12">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h3 className="text-[#FF9F0D] text-xl font-medium">Choose & Pick</h3>
      <h2 className="text-4xl font-bold">
        From <span className="text-[#FF9F0D]">Our Menu</span>
      </h2>
    </div>

    {/* Menu Tabs */}
    <div className="flex justify-center gap-6 text-gray-300 mb-10">
      {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((tab, index) => (
        <button
          key={index}
          className={`font-medium hover:text-orange-400 ${
            tab === "Breakfast" ? "text-[#FF9F0D]" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Content Section */}
    <div className="grid md:grid-cols-2 gap-10 items-start p-6 bg-black text-white">
  {/* Left Section with Images */}
  <div className="relative flex justify-center items-center">
    {/* Leaves in the background */}
    <div className="absolute -left-16 z-0">
      <Image
        src="/Side-leaves.png" /* Replace with your image path */
        alt="Leaves"
        width={200}
        height={500}
        className="object-cover w-[450px] h-[450px]"
      />
    </div>
    {/* Salad image on top */}
    <Image
      src="/unsplash-5.png" /* Replace with your image path */
      alt="Salad"
      width={356}
      height={362}
      className="relative z-16 object-cover w-[366px] h-[362px] mr-60 "
    />
  </div>

  {/* Right Menu List */}
  <div className="grid md:grid-cols-2 gap-6 text-white ">
  {[
    { name: "Lettuce Leaf", price: "12.55", Image: "/unsplash_main1.png" },
    { name: "Glow Cheese", price: "12.55", Image: "/unsplash_main5.png" },
    { name: "Fresh Breakfast", price: "14.55", Image: "/mainCourse.png" },
    { name: "Italian Pizza", price: "14.55", Image: "/unsplash_main6.png" },
    { name: "Mild Butter", price: "12.55", Image: "/unsplash_main3.png" },
    { name: "Slice Beef", price: "12.55", Image: "/foodpic3.jpeg" },
    { name: "Fresh Bread", price: "12.55", Image: "/unsplash_main4.png" },
    { name: "Mushroom Pizza", price: "12.55", Image: "/unsplash_main8.png" },
  ].map((item, index) => (
    <div
      key={index}
      className={`flex items-center ${
        item.name === "Mushroom Pizza" ? "" : ""
      }`}
    >
      {/* Image Section */}
      <Image
        src={item.Image}
        alt={item.name}
        width={80}
        height={79}
        className="w-[80px] h-[80px] rounded-lg object-cover"
      />
      {/* Text Section */}
      <div className="ml-4">
        <h4 className="font-medium text-lg">{item.name}</h4>
        <p className="text-gray-300 text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
      </div>
      {/* Price Section */}
      <span className="ml-auto text-[#FF9F0D] font-semibold text-lg gap-2">${item.price}</span>
    </div>
  ))}
</div>
</div>

  </div>
</div>


{/* Eight part */}

<div className="bg-black text-white py-16 px-8 mt-32">
  <div className="container mx-auto text-center">
    {/* Title Section */}
    <h3 className="text-[#FF9F0D] text-3xl font-semibold">Chefs</h3>
    <h2 className="text-5xl font-bold mt-4">
      <span className="text-[#FF9F0D] w-[329px] h-[56px]">Me</span>et Our Chef
    </h2>

    {/* Chef Cards Section */}
    <div className="grid sm:grid-cols-6 lg:grid-cols-4 gap-6 mt-16 ">
      {/* Chef 1 */}
      <div className="bg-white text-black rounded-lg ">
        <Image
          src="/chef1.png"
          alt="Chef 1"
          width={500}
          height={500}
          className=" object-cover"
        />
        
      </div>

      {/* Chef 2 */}
      <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/chef4.png"
          alt="Chef 2"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Chef 3 */}
      <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/chef3.png"
          alt="Chef 3"
          width={500}
          height={500}
          className=" object-cover"
        />
      </div>

      {/* Chef 4 */}
      <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/chef2.png"
          alt="Chef 4"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </div>

    {/* See More Button */}
    <Link href="/chef"><button className="mt-20 px-6 py-3 border border-[#FF9F0D] text-white rounded-full hover:bg-orange-500 hover:text-white ">
      See More
    </button></Link>
  </div>
</div>

{/* Nine part */}
<div className="container mx-auto px-4 text-center">
    {/* Section Header */}
    <p className="text-[#FF9F0D] font-bold mb-2 ml-16 w-[128px] h-[40px]">Testimonials</p>
    <h2 className="text-5xl font-bold text-white mb-20 ml-16 w-[599px] h-[56px] ">
      What our client are saying
    </h2>

    {/* Testimonial Card */}
    <div className="relative bg-white p-8 mt-32  mx-auto w-[1000px] h-[476px]">
      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <Image
          src="/Ellipse 6.png"
          alt="Client Image"
          width={133}
          height={134}
          className="w-[133px] h-[134px] rounded-full "
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


{/* Teenth part */}

  <div className="relative w-full h-[400px] md:h-[500px] bg-black text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/path-to-image.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>

  {/* Content Section */}
  <div className="relative z-10 flex items-center h-full px-6 md:px-16">
    <div className="max-w-2xl">
      {/* Subtitle */}
      <h3 className="text-orange-400 italic text-lg">Restaurant Home Process</h3>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mt-3">
        <span className="text-orange-500">We</span> Document Every Food Bean Process until it is saved
      </h2>

      {/* Description */}
      <p className="text-gray-300 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex items-center gap-4">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-orange-500 hover:text-white transition">
          Read More
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-orange-500 transition">
          <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">▶</span>
          Play Video
        </button>
      </div>
    </div>
  </div>
</div>








    </div>
  
  );
}
