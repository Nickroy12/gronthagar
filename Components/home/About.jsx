import SliderCard from '@/ui/SliderCard'
import React from 'react'

const About = () => {
  return (
    <div
      className="relative p-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(126, 34, 206, 0.8)), url('/bg.jpg')",
      }}
    >
      <div className="w-10/12 mx-auto lg:flex justify-between relative z-10">
        
        <div>
          <SliderCard />
        </div>

        <div className="flex justify-end items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-7xl">100000+</span> <br />
            OF BOOK COLLECTION
          </h1>
        </div>

      </div>
    </div>
  )
}

export default About