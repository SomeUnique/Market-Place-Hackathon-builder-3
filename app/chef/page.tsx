import React from 'react'
import Common from '../../components/common'
import Image from 'next/image'
const page = () => {
  return (
    <div className='bg-white md:max-w-[1920px]'>
      <Common title='Our Chef' subtitle='Chef' />
      <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-8 mt-[100px] mb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {[
            { src: "/pic1.png", name: "Tahnina Rumi", role: "Chef" },
            { src: "/pic2.png", name: "Jorina Begum", role: "Chef" },
            { src: "/pic3.png", name: "M. Mohammad", role: "Chef" },
            { src: "/pic4.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic5.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic6.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic7.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic8.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic9.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic10.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic11.png", name: "Munna Kathy", role: "Chef" },
            { src: "/pic12.png", name: "Munna Kathy", role: "Chef" },
          ].map((chef, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 p-4 text-center"
            >
              <Image
                src={chef.src}
                alt={chef.name}
                width={312}
                height={446}
                className="rounded-t-lg object-cover w-full h-48"
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4">{chef.name}</h3>
              <p className="text-sm text-gray-600">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default page