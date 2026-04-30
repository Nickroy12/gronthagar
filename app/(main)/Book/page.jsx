'use client'
import React, { useState } from 'react'
import data from '@/data/data.json'
import Card from '@/ui/Card'
import Search from '@/ui/Search';

const BookPage = () => {
    const [filtered, setFiltered] = useState(data);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-4xl text-center font-bold">All Book</h1>

 <Search setFiltered={setFiltered}/>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
  {filtered.length > 0 ? (
    filtered.map(book => (
      <Card key={book.id} book={book} />
    ))
  ) : (
    <div className="col-span-full text-center py-10">
      <h2 className="text-xl font-semibold">No books found 😕</h2>
      <p className="text-gray-500">Try searching something else</p>
    </div>
  )}
</div>
    </div>
  )
}

export default BookPage