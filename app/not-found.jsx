import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col  space-y-4'>
        <h2 className='text-3xl font-bold text-purple-500'>Page Not Found</h2>
        <Link href={'/'}>
         <button className="btn bg-purple-500 text-white">Back</button>
        </Link>

    </div>
  )
}

export default NotFound