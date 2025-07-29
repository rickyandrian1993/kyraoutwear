import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import avatar from './assets/avatar.png';
import backgroundImage from './assets/bg.jpg';
import AffiliateLinks from './components/AffiliateLinks';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(255,255,255,0.3)', backgroundBlendMode: 'overlay' }}>
      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 w-full max-w-md text-center shadow-xl">
        <img src={avatar} className="w-24 h-24 rounded-full mx-auto object-cover mb-2" />
        <h1 className="text-lg font-semibold">KYRA OUTWEAR</h1>
        <p className="text-sm text-gray-500">Giving clothing a second life</p>
        <div className="flex justify-center space-x-6 m-4 text-black-600">
          <a href="https://www.instagram.com/kyra.outwear/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@kyra.outwear" target="_blank">
            <FaTiktok />
          </a>
          <FaWhatsapp />
          <a href="https://s.shopee.co.id/zifEsxug" target="_blank">
           <FaShop />
          </a>
        </div>
        <div className="space-y-3">
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Fit Channel</a>
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Daily outfits</a>
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Blog</a>
          <div className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100 cursor-pointer">
            <span>Product Links</span>
            <AffiliateLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
