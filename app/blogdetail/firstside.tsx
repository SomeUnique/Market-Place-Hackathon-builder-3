import React from 'react'
import Image from 'next/image'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { PiQuotesThin } from "react-icons/pi";
const Firstside = () => {
  
  return (
    <div className='md:max-w-[872px] my-16 px-8 ml-48 '>
      {/* First div */}
        <div className='w-[800px] h-[520px] bg-[url(/unsplash-2.png)] bg-cover '>
        </div>
        
          <p className='flex gap-2 my-6'><IoCalendarNumberOutline size={24} className='text-[#FF9F0D] bg-white'/>
          <span>Feb 14, 2022 /</span>
          <TbMessages size={24}  className='text-[#FF9F0D] bg-white'/>
          <span> 3 /</span>
          <PiUserCirclePlusLight  size={24} className='text-[#FF9F0D] bg-white'/>
          <span>Admin</span>
          </p>
        <h2 className=' font-bold text-[24px] mb-6'>10 Reasons To Do A Digital Detox Challenge</h2>
        <p className='text-[16px] w-[678px] text-justify'>Netus pretium tellus nulla commodo massa adipiscing in
           elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et
            viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque 
            aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut 
            himenaeos.</p>
            <p className='text-[16px] w-[678px] text-justify mt-6 mb-10'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
 Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>
      
       {/* second div */}
       <div className="bg-[#FF9F0D] text-white  flex items-start mb-10 ">
  <PiQuotesThin className='w-[100px] h-[60px] text-2xl ml-4 mt-2'/>
  
  <p className="text-white text-md p-5 font-semibold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
  </p>
</div>
  
    
      {/* third div */}
      <div className="max-w-4xl mx-auto py-6 px-4 grid md:grid-cols-3 gap-6">
  {/*<!-- Text Section -->*/}
  <div className="md:col-span-2 space-y-4 text-gray-700  ">
    <p className="text-[16px] w-[678px] text-justify">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
     elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
     At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
    et accusam et justo duo dolores et ea rebum.
    </p>
    <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
    et accusam et justo duo dolores et ea rebum.
    </p>
    <p className="text-[16px] w-[678px] text-justify">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
    et accusam et justo duo dolores et ea rebum.
    </p>
    <p className="text-[16px] w-[678px] text-justify mb-12">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd 
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
    et accusam et justo duo dolores et ea rebum.
    </p>
  </div>

  {/*<!-- Image Section -->*/}
  <div>
    <Image src="/unsplash_rAyCBQTH7ws.png" alt="Delicious Food" width={900} height={400} className="max-w-xs h-[320px] mt-46 "/>
  </div>
</div>


       {/* fourth div */}
    
    
    </div>
  )
}
export default Firstside