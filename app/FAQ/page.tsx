"use client"
import React, { useState } from 'react';
import Common from '../../components/common';

const Page = () => {
    // Add state to manage which FAQ item is open
    const [openItem, setOpenItem] = useState<string | null>(null);

    // Toggle function for accordion items
    const toggleItem = (itemId: string) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    return (
        <div className='bg-white w-full md:max-w-[1920px] mb-16'>
            {/* Common Header Section */}
            <Common title="FAQ page" subtitle="FAQ" />

            {/* FAQ Section */}
            <div className=' mt-52 justify-center text-center'>
                <h1 className='text-4xl font-bold'>Questions Looks Here</h1>
                <p className=' font-normal text-[#4F4F4F] mt-6 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
            </div>
            {/* FAQ Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-1')}
                    >
                        How do we serve food?
                        <span className={`transform transition-transform ${openItem === 'item-1' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-1' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>

                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-2')}
                    >
                        How can we get in touch with you?
                        <span className={`transform transition-transform ${openItem === 'item-2' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-2' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>

                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-3')}
                    >
                        How is our food quality?
                        <span className={`transform transition-transform ${openItem === 'item-3' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-3' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>

                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-4')}
                    >
                        What will be delivered? And when?
                        <span className={`transform transition-transform ${openItem === 'item-4' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-4' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>

                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-5')}
                    >
                        How do we give home delivery?
                        <span className={`transform transition-transform ${openItem === 'item-5' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-5' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>

                <div className="border rounded-lg">
                    <button
                        className="w-full p-4 text-left font-bold flex justify-between items-center"
                        onClick={() => toggleItem('item-6')}
                    >
                        Is this restaurant 24 hours open?
                        <span className={`transform transition-transform ${openItem === 'item-6' ? 'rotate-180' : ''}`}>
                            ▼
                        </span>
                    </button>
                    {openItem === 'item-6' && (
                        <div className="p-4 border-t">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;