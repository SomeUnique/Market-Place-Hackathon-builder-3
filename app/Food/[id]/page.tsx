import React from "react";
import { client, urlFor } from "../../../sanity/lib/client";
import Common from "../../../components/common";
import Image from "next/image";
import Link from "next/link";
import { IoIosGitCompare, IoIosHeartEmpty } from "react-icons/io";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const FoodPage = async ({ params: { id } }: { params: { id: string } }) => {
  console.log("Fetching Food ID:", id);


  type Food = {
    _id: string;
    name: string;
    category?: string;
    price: number;
    description?: string;
    image?: { _ref: string }; // Update type for image reference
  };


  const query = `*[_type == "food" && _id == $id][0]{
    name, 
    _id,
    price,
    description,
    category,
    image,
  }`;

  const food:Food = await client.fetch(query, { id });
  console.log("food: ", food);

  if (!food || !food._id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-2xl font-bold text-red-500">Food not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white w-full md:max-w-[1920px] mb-16">
      <Common title="Shop Details" subtitle="Shop details" />

      <div className="container mx-auto px-6 py-12 mt-16 flex flex-col md:flex-row gap-16">
        {/* Left Side - Images */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            {food.image && (
              <>
              <Image
                src="/Rectangle 8884.png"
                alt={food.name}
                width={132}
                height={129}
                className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
              />
              <Image
                src= "/Rectangle 8885.png"
                alt={food.name}
                width={132}
                height={129}
                className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
              />
              <Image
                src="/Rectangle 8886.png"
                alt={food.name}
                width={132}
                height={129}
                className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
              />
              <Image
                src="/Rectangle 8887.png"
                alt={food.name}
                width={132}
                height={129}
                className="w-20 h-20 object-cover cursor-pointer border border-gray-300"
              />
            </>
            )
            }
          </div>
          <div>
            {food.image && (
              <Image 
              src={food.image ? urlFor(food.image): "/default-image.png"}
              alt={food.name} width={491} height={596} className="w-full h-[400px] object-cover " />
            )}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          <span className="bg-[#FF9F0D] text-white px-3 py-1 text-sm font-semibold rounded-md">In stock</span>
          <h1 className="text-3xl font-bold mt-3">{food.name}</h1>
          <p className="text-gray-500 mt-2">{food.description}</p>
          <div className="flex border-b border-gray-200 mt-5"></div>

          <div className="flex items-center gap-3 mt-4">
            <p className="text-2xl font-semibold">${food.price}</p>
          </div>

          <div className="flex items-center mt-6 gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-3 py-2 text-xl border-r border-gray-300">-</button>
              <span className="px-4 py-2 text-lg">1</span>
              <button className="px-3 py-2 text-xl border-l border-gray-300">+</button>
            </div>
            <Link href="/shoppingcart">
              <button className="bg-[#FF9F0D] text-white px-6 py-3 text-lg font-semibold hover:bg-orange-400 transition">
                Add to cart
              </button>
            </Link>
          </div>

          <div className="flex border-b border-gray-200 mt-5"></div>
          <div className="flex items-center gap-6 mt-4 text-gray-500">
            <button className="flex items-center gap-1 hover:text-black transition">
              <IoIosHeartEmpty /> Add to Wishlist
            </button>
            <button className="flex items-center gap-2 hover:text-black transition">
              <IoIosGitCompare /> Compare
            </button>
          </div>
{/* Product Details */}
          <div className="mt-4 text-gray-500 text-sm">
            <p><span className="font-semibold">Category:</span> {food.category || "N/A"}</p>
            <p><span className="font-semibold">Tag:</span> Our Shop</p>
          </div>
          {/* Social Media Share */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-gray-500">Share :</span>
            <Link href="#" className="text-gray-600 text-xl "><FaSquareYoutube /></Link>
            <Link href="#" className="text-gray-600 text-xl "><FaFacebook /></Link>
            <Link href="#" className="text-gray-600 text-xl "><AiFillTwitterCircle /></Link>
            <Link href="#" className="text-gray-600 text-xl "><FaGithub /></Link>
            <Link href="#" className="text-gray-600 text-xl "><AiFillInstagram /></Link>
          </div>
        </div>
        </div>  
    {/* Second Div*/}  
        
        <div className="container mx-auto px-6 py-8">
      {/* Tabs */}
      <div>
        <button className="px-6 py-3 text-lg font-semibold bg-[#FF9F0D] text-white rounded-lg">Description</button>
        <button className="px-6 py-3 text-lg font-semibold text-gray-500 hover:text-black transition">Reviews (24)</button>
      </div>
    
      {/* Content */}
      <div className="mt-6 text-gray-700">
        <p className="mb-4">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <p className="mb-6">
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisl rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
        </p>
    
        {/* Key Benefits */}
        <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
        <ul className="list-disc pl-5 text-gray-600 space-x-1">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
          <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
          <li>Mauris eget diam magna, in blandit turpis.</li>
        </ul>
      </div>
    </div>
    
        
    {/* Third Div*/}     
        <div className="container mx-auto px-6 py-8 mt-16 mb-20 ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Similar Products</h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                ❮
              </button>
              <button className="w-8 h-8 bg-[#FF9F0D] text-white rounded-full flex items-center justify-center">
                ❯
              </button>
            </div>
          </div>
    
          <div className="grid grid-cols-4 gap-6 mt-6">
            {/* Product 1 */}
            <div className="relative group">
              <div className="w-[312px] h-[267px] bg-cover bg-center " style={{ backgroundImage: `url('/unsplash 3.png')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center space-x-2 ">
               
              </div>
              <h3 className="mt-6text-lg font-bold">Fresh Lime</h3>
              <p className="text-[#FF9F0D] text-lg font-medium">
                $38.00 <span className="text-gray-400 line-through text-sm">$45.00</span>
              </p>
            </div>
    
            {/* Product 2 */}
            <div className="relative group ">
              <div className="w-[312px] h-[267px] bg-cover bg-center " style={{ backgroundImage: `url('/unsplash_LgTyii0GDKQ.png')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center gap-4  ">
                <button className="p-2 bg-white text-[#FF9F0D] rounded-sm "><IoIosGitCompare /></button>
                <button className="p-2 bg-[#FF9F0D] text-white rounded-sm "><HiOutlineShoppingBag /></button>
                <button className="p-2 bg-white text-[#FF9F0D] rounded-sm"><IoIosHeartEmpty /></button>
              </div>
              <h3 className="mt-6 text-lg font-bold">Chocolate Muffin</h3>
              <p className="text-[#FF9F0D] text-lg font-medium">$28.00</p>
            </div>
    
            {/* Product 3 */}
            <div className="relative group">
              <div className="w-[312px] h-[267px] bg-cover bg-center " style={{ backgroundImage: `url('/mainCourse.png')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center space-x-2 ">
              </div>
              <h3 className="mt-6 text-lg font-bold">Burger</h3>
              <p className="text-[#FF9F0D] text-lg font-medium">$21.00</p>
            </div>
    
            {/* Product 4 */}
            <div className="relative group">
              <div className="w-[312px] h-[267px] bg-cover bg-center " style={{ backgroundImage: `url('/unsplash 3.png')` }}></div>
              <div className="absolute inset-0 flex items-center justify-center space-x-2 ">
               
              </div>
              <h3 className="mt-6 text-lg font-bold">Fresh Lime</h3>
              <p className="text-[#FF9F0D] text-lg font-medium">
                $38.00 <span className="text-gray-400 line-through text-sm">$45.00</span>
              </p>
            </div>
          </div>
        </div>
    
      
    </div>
  );
};

export default FoodPage;
