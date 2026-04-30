import Image from 'next/image'
import React from 'react'
import banner from '@/public/banner.png'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='container mx-auto shadow rounded-4xl '>
        <div className="lg:flex justify-between">
           <div className=" flex flex-col justify-center items-center p-4 space-y-3">
            <h1 className='lg:text-5xl text-3xl font-bold'>Find Your Next Read</h1>
          <Link href={'/Book'} className="btn bg-linear-to-r from-purple-500 to-purple-400 rounded-4xl text-white">Browse Now</Link>
           </div>
           <div className="flex justify-center">
            <Image alt='book' src={banner} width={500}  height={500} />
           </div>
        </div>
    </div>
  )
}

export default Banner