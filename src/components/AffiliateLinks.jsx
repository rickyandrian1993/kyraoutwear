import { useState } from 'react'
import { affiliateIcons } from '../data/affiliateLinks'

const ITEMS_PER_PAGE = 10

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
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-5 gap-4">
        {currentIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center hover:scale-105 transition transform duration-200"
          >
            <img
              src={icon.image}
              alt={icon.name}
              className="w-10 h-10 mb-1 rounded-lg border border-gray-200 shadow-sm"
            />
            <span className="text-[10px] text-gray-600 group-hover:text-black line-clamp-2">
              {icon.name}
            </span>
          </a>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between w-full px-4 mt-2">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className={`text-sm px-3 py-1 rounded-md transition ${
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
          className={`text-sm px-3 py-1 rounded-md transition ${
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