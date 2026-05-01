'use client'
import React, { useState } from 'react'
import data from '@/data/data.json'
const Search = ({setFiltered}) => {
      const [search, setSearch] = useState("");

    const handleSearch = () => {
    const result = data.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  };
  return (
    <div>
              
      <div className="flex gap-2 mx-auto">
        <input
          type="text"
          placeholder="Search book..."
          className="input input-bordered w-full max-w-xs "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="btn bg-linear-to-r text-white from-purple-500 to-purple-400">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search