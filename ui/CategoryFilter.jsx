'use client'
import React from 'react'
import { MdCategory } from 'react-icons/md'

const CategoryFilter = ({
  categories,
  selectedCategory,
  handleCategoryFilter
}) => {
  return (
    <>
      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: '--anchor-1' }}
        >
          <MdCategory /> Category
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm mt-2"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: '--anchor-1' }}
        >
          {categories.map(category => (
            <li key={category}>
              <button
                onClick={() => handleCategoryFilter(category)}
                className={selectedCategory === category ? 'active' : ''}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

   
      <div className="sticky top-4 h-fit hidden lg:block p-4 rounded bg-base-200">
        <h2 className="font-bold mb-4 text-lg">Categories</h2>

        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`btn btn-sm w-full ${
                selectedCategory === category
                  ? 'text-white bg-gradient-to-r from-purple-500 to-purple-400'
                  : 'btn-outline'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryFilter