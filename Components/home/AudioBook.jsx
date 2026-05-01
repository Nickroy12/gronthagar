import Image from 'next/image'
import React from 'react'
import headphone from '@/public/headphone.png'

const AudioBook = () => {
  return (
       <div
      className="relative p-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          " url('/abg.png')",
      }}
    >
      <div className="w-10/12 mx-auto lg:flex justify-between relative z-10">
        
        <div>
          <Image src={headphone} alt='headphone' height={200} width={200} className='object-contain' />
        </div>

        <div className="flex justify-end items-center">
          <h1 className="text-2xl font-bold ">
            <span className="text-7xl bg-gradient-to-r  bg-clip-text text-transparent from-purple-500 to-purple-400">5000+</span> <br />
            OF AUDIO BOOK COLLECTION
          </h1>
        </div>

      </div>
    </div>
  )
}

export default AudioBook