import { FaWhatsapp } from 'react-icons/fa6'

export default function FloatingWAButton() {
  const openWhatsApp = () => {
    const phoneNumber = '6283848307755' // use international format without "+"
    const message = 'Halo Kyra, mau tanya seputar produknya!'

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  )
}
