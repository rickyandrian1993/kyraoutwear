import { useState } from 'react'
import { affiliateIcons } from '../data/affiliateLinks'

const ITEMS_PER_PAGE = 6

export default function AffiliateLinks() {
  const [page, setPage] = useState(0)

  const start = page * ITEMS_PER_PAGE
  const currentIcons = affiliateIcons.slice(start, start + ITEMS_PER_PAGE)

  const handlePrev = () => setPage((p) => Math.max(p - 1, 0))
  const handleNext = () => {
    if ((page + 1) * ITEMS_PER_PAGE < affiliateIcons.length) {
      setPage((p) => p + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Product Card Grid */}
      <div className="grid grid-cols-2 gap-4 w-full">
        {currentIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center text-center transition-all duration-200"
          >
            <img
              src={icon.image}
              alt={icon.name}
              className="w-16 h-16 rounded-md object-cover mb-2"
            />
            <span className="text-sm font-medium text-gray-700 hover:text-pink-500 transition line-clamp-2">
              {icon.name}
            </span>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
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
          disabled={(page + 1) * ITEMS_PER_PAGE >= affiliateIcons.length}
          className={`text-sm px-4 py-1 rounded-lg transition ${
            (page + 1) * ITEMS_PER_PAGE >= affiliateIcons.length
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  )
}
