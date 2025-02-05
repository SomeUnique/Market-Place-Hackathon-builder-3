'use client';

import React from 'react';
import Common from '../../components/common';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { IoIosHeartEmpty, IoIosGitCompare } from 'react-icons/io';
import { FaSquareYoutube, FaFacebook, FaGithub } from 'react-icons/fa6';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Page = () => {
  const food = {
    name: 'Yummy Chicken Chup',
  };

  const handleAddToCart = (e:any) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: `${food.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="bg-white w-full md:max-w-[1920px] mb-16">
      <Common title="Shop Details" subtitle="Shop details" />

      {/* First Section */}
      <div className="container mx-auto px-6 py-12 mt-26">
        <div className="flex md:flex-cols-2 gap-16 ml-20">
          {/* Left - Images */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {[8884, 8885, 8886, 8887].map((num) => (
                <Image
                  key={num}
                  src={`/Rectangle ${num}.png`}
                  alt={`Thumb ${num}`}
                  width={132}
                  height={129}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300"
                />
              ))}
            </div>
            {/* Main Image */}
            <div>
              <Image
                src="/Rectangle 8883.png"
                alt="Yummy Chicken Chup"
                width={491}
                height={596}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right - Product Details */}
          <div>
            <span className="bg-[#FF9F0D] text-white px-3 py-1 text-sm font-semibold rounded-md">In stock</span>
            <h1 className="text-3xl font-bold mt-3">{food.name}</h1>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="border-b border-gray-200 mt-5"></div>
            <div className="flex items-center gap-3 mt-4">
              <p className="text-2xl font-semibold">$54.00</p>
              <div className="flex items-center">
                <span className="text-[#FF9F0D]">★★★★★</span>
                <span className="text-gray-400 text-sm ml-2">| 5.0 Rating | 22 Reviews</span>
              </div>
            </div>
            <div className="flex items-center mt-6 gap-4">
            
              <button className="bg-[#FF9F0D] text-white px-6 py-3 text-lg font-semibold hover:bg-orange-400 transition" onClick={handleAddToCart}>
                Add to cart
              </button>
            </div>
            <div className="border-b border-gray-200 mt-5"></div>
            <div className="flex items-center gap-6 mt-4 text-gray-500">
              <button className="flex items-center gap-1 hover:text-black transition">
                <IoIosHeartEmpty /> Add to Wishlist
              </button>
              <button className="flex items-center gap-2 hover:text-black transition">
                <IoIosGitCompare /> Compare
              </button>
            </div>
            <div className="mt-4 text-gray-500 text-sm">
              <p><span className="font-semibold">Category:</span> Pizza</p>
              <p><span className="font-semibold">Tag:</span> Our Shop</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-gray-500">Share :</span>
              {[FaSquareYoutube, FaFacebook, AiFillTwitterCircle, FaGithub, AiFillInstagram].map((Icon, index) => (
                <Link href="#" key={index} className="text-gray-600 text-xl">
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
