import { useState } from 'react'
import { affiliateIcons } from '../data/affiliateLinks'

const ITEMS_PER_PAGE = 6

export default function AffiliateLinks() {
  const [page, setPage] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  // 🔍 Apply search filter first
  const filteredIcons = affiliateIcons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 🔄 Apply pagination to filtered results
  const start = page * ITEMS_PER_PAGE
  const paginatedIcons = filteredIcons.slice(start, start + ITEMS_PER_PAGE)

  const totalPages = Math.ceil(filteredIcons.length / ITEMS_PER_PAGE)

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0))
  const handleNext = () => {
    if (page + 1 < totalPages) {
      setPage((p) => p + 1)
    }
  }

  // 🔁 Reset to page 0 when search changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setPage(0)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
      />

      {/* Product Card Grid */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {paginatedIcons.map((product, index) => (
          <a
            key={index}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition-all duration-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-md object-cover mb-2"
            />
            <span className="text-sm font-medium text-gray-700 hover:text-pink-500 transition line-clamp-2">
              {product.name}
            </span>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      {filteredIcons.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center gap-4 w-full mt-3 px-4">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className={`text-sm px-4 py-1 rounded-lg transition ${
              page === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            ◀ Prev
          </button>
          <button
            onClick={handleNext}
            disabled={page + 1 >= totalPages}
            className={`text-sm px-4 py-1 rounded-lg transition ${
              page + 1 >= totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  )
}
