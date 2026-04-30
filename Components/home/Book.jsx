import React from 'react'
import data from '@/data/data.json'
import Card from '@/ui/Card'
import Link from 'next/link'

const Book = () => {
  return (
    <div className='w-10/11 mx-auto py-4 space-y-3'>
         <h1 className="text-4xl text-center font-bold">Popular Books</h1>
       <div className="grid lg:grid-cols-4 gap-2">
              {data.slice(0, 4).map(book => (
        <Card key={book.id} book={book} />
      ))}
       </div>
        <div className="flex justify-center">
            <Link href={'/Book'} className="btn bg-linear-to-r from-purple-500 to-purple-400 rounded-4xl  text-white">Browse Now</Link> 
        </div>
    </div>
  )
}

export default Book