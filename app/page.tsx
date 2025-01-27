import Image from "next/image";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";

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
        className="rounded-lg object-cover w-[660px] h-[330px]"
      />
      <div className="grid grid-cols-2 ">
        <Image
          src="/foodpic2.jpeg"
          alt="Small Food Item 1"
          className="rounded-sm object-cover w-[350px] h-[194px]"
        />
        <div className="mr-20">
        <Image
          src="/foodpic3.jpeg"
          alt="Small Food Item 2"
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
          className="rounded-sm object-cover w-[305px] h-[329px]"
        />
      </div>

      {/* Food Item 3 */}
      <div>
        <Image
          src="/food3.png"
          alt="Food Item 3"
          className="rounded-sm object-cover w-[305px] h-[329px]"
        />
      </div>

      {/* Food Item 4 */}
      <div>
        <img
          src="/food2.png"
          alt="Food Item 4"
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
      <h3 className="text-orange-400 text-xl font-medium">Choose & Pick</h3>
      <h2 className="text-4xl font-bold">
        From <span className="text-orange-400">Our Menu</span>
      </h2>
    </div>

    {/* Menu Tabs */}
    <div className="flex justify-center gap-6 text-gray-300 mb-10">
      {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((tab, index) => (
        <button
          key={index}
          className={`font-medium hover:text-orange-400 ${
            tab === "Breakfast" ? "text-orange-400" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Content Section */}
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left Image */}
      <div className="flex justify-center">
        <Image
          src="/unsplash-5.png" /* Replace with your image path */
          alt="Salad"
          className=" object-cover w-[366px] h-[362px] "
        />
      </div>

      {/* Right Menu List */}
      <div className="space-y-6 flex flex-2">
        {[
          { name: "Lettuce Leaf", price: "12.55" },
          { name: "Fresh Breakfast", price: "14.55" },
          { name: "Mild Butter", price: "12.55" },
          { name: "Fresh Bread", price: "12.55" },
          { name: "Glow Cheese", price: "12.55" },
          { name: "Italian Pizza", price: "14.55" },
          { name: "Slice Beef", price: "12.55" },
          { name: "Mushroom Pizza", price: "12.55" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={`/menu-item-${index + 1}.png`} /* Replace with your image paths */
                alt={item.name}
                className="w-[60px] h-[60px] rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-lg">{item.name}</h4>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <span className="text-orange-400 font-semibold text-lg">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


    </div>
  
  );
}
