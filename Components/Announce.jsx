import React from 'react'
import Marquee from 'react-fast-marquee'

const Announce = () => {
 const news = [
"New Arrival : Home of Secrets",
"Discount : 10% Discount Of Any Philosophical Book",
"Harry potter books Sold out"
];
  return (
    <div className='bg-linear-to-r from-purple-500 to-purple-400/40 my-4 text-white'>
        <div className="w-10/12 mx-auto flex gap-2 p-2">
            <div className="bg-black rounded-4xl px-3 bg-radial-[at_50%_75%] from-purple-500 to-purple-400 to-90%">Announcement</div>
   <Marquee pauseOnHover="true">
  {news.map((item, index) => (
    <span key={index} className="mr-10">{item}</span>
  ))}
</Marquee>
        </div>
    </div>
  )
}

export default Announce