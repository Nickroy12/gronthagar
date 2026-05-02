'use client'
import React, { useState } from 'react'
import data from '@/data/data.json'
import Card from '@/ui/Card'
import Search from '@/ui/Search'
import CategoryFilter from '@/ui/CategoryFilter'
 

const BookPage = () => {
  const [filtered, setFiltered] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(data.map(book => book.category))]

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)

    if (category === 'All') {
      setFiltered(data)
    } else {
      const filteredBooks = data.filter(
        book => book.category === category
      )
      setFiltered(filteredBooks)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl text-center font-bold">All Book</h1>

      {/* Search + Mobile Category */}
      <div className="flex gap-5 items-center">
        <Search setFiltered={setFiltered} />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategoryFilter={handleCategoryFilter}
        />
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  )
}

export default BookPage