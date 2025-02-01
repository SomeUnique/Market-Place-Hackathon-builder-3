import Link from 'next/link';
import React from 'react';

interface propstype {
  title: string;
  subtitle: string;
}

const Common: React.FC<propstype> = ({ title, subtitle }: propstype) => {
  return (
    <div
      className="h-[300px] sm:h-[350px] md:h-[410px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('images/heropic.png')" }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-white">{title}</h1>
        <div className="flex items-center text-sm sm:text-base text-white gap-2 mt-2">
          <Link href="/">
            <span className="hover:underline">Home</span>
          </Link>
          <span>&gt;</span>
          <span className="text-[#FF9f0D]">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Common;
