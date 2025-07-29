
import { useState } from 'react'
import { affiliateIcons } from '../data/affiliateLinks'

const ITEMS_PER_PAGE = 10

export default function AffiliateLinks() {
  const [page, setPage] = useState(0)

  const start = page * ITEMS_PER_PAGE
  const currentIcons = affiliateIcons.slice(start, start + ITEMS_PER_PAGE)

  const handlePrev = () => setPage(p => Math.max(p - 1, 0))
  const handleNext = () => {
    if ((page + 1) * ITEMS_PER_PAGE < affiliateIcons.length) {
      setPage(p => p + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4 px-4">
      <div className="grid grid-cols-5 gap-4">
        {currentIcons.map((icon, index) => (
          <a href={icon.url} key={index} target="_blank" rel="noopener noreferrer">
            <img src={icon.image} alt={icon.name} className="w-20 h-20 hover:scale-110 transition" />
          </a>
        ))}
      </div>
      <div className="flex justify-between w-full px-6">
        <button onClick={handlePrev} className="p-1 text-sm text-gray-500 hover:text-black">Previous</button>
        <button onClick={handleNext} className="p-1 text-sm text-gray-500 hover:text-black">Next</button>
      </div>
    </div>
  )
}
