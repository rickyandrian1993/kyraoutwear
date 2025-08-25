import { FaInstagram, FaShop, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

export default function ContactInformation() {
  const openWhatsApp = () => {
    const phoneNumber = '6283848307755' // use international format without "+"
    const message = 'Halo Kyra, mau tanya seputar produknya!'

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }

  const openInstagram = () => {
    const url = `https://www.instagram.com/kyra.outwear/`
    window.open(url, '_blank')
  }

  const openShopee = () => {
    const url = `https://shopee.co.id/kyra.outwear`
    window.open(url, '_blank')
  }

  const openTikTok = () => {
    const url = `https://www.tiktok.com/@kyra.outwear`
    window.open(url, '_blank')
  }

  return (
    <div className="flex justify-center align-middle space-x-6 m-4 text-black-600">
      <button className="text-lg" onClick={openInstagram}>
        <FaInstagram />
      </button>
      <button className="text-lg" onClick={openTikTok}>
        <FaTiktok />
      </button>
      <button className="text-lg" onClick={openWhatsApp}>
        <FaWhatsapp />
      </button>
      <button className="text-lg" onClick={openShopee}>
        <FaShop />
      </button>
    </div>
  )
}
