'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBasket } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='md:max-w-[1920px] bg-black'>
            <div className='flex justify-between items-center h-[90px] w-full mx-auto px-4 sm:px-6 lg:px-6'>
                {/* logo*/}
                <div className='flex items-center'>
                    <h1 className='font-bold text-2xl text-white'>Food</h1>
                    <span className='font-bold text-2xl text-[#FF9f0D]'>tuck</span>
                </div>

                <nav className='space-x-6 gap-3 hidden lg:flex md:flex'>
                    <Link href="/" className='text-lg font-bold text-[#FF9f0D]'>Home</Link>
                    <Link href="/menu" className='text-lg font-bold text-white'>Menu</Link>
                    <Link href="/bloglist" className='text-lg font-bold text-white'>Blog</Link>
                    <Link href="/chef" className='text-lg font-bold text-white'>Pages</Link>
                    <Link href="/about" className='text-lg font-bold text-white'>About</Link>
                    <Link href="/shop" className="text-lg font-bold text-white block">Shop</Link>
                    <Link href="/404error" className='text-lg font-bold text-white'>Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='md:hidden lg:hidden block'
                >
                    <GiHamburgerMenu size={24} className='text-white' />
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-white z-50 p-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6"
                        >
                            <IoMdClose size={24} />
                        </button>
                        <nav className='space-y-4 pt-12'>
                            <Link href="/" className='text-lg font-bold text-white'>Home</Link>
                            <Link href="/menu" className='text-lg font-bold text-black block'>Menu</Link>
                            <Link href="/bloglist" className='text-lg font-bold text-black block'>Blog</Link>
                            <Link href="/chef" className='text-lg font-bold text-black block'>Pages</Link>
                            <Link href="/about" className='text-lg font-bold text-black block'>About</Link>
                            <Link href="/shop" className="text-lg font-bold text-black block">Shop</Link>
                            <Link href="/404error" className='text-lg font-bold text-black block'>Contact</Link>
                        </nav>
                    </div>
                )}

                <div className='flex gap-3'>
                    <IoSearch size={24} className='text-white' />
                    <Link href="/signup"><AiOutlineUser size={24} className='text-white' /></Link>
                    <Link href="/checkoutPage"><BiSolidBasket size={24} className='text-white' /></Link>
                </div>

            </div>
        </header>


    );
}
export default Header
