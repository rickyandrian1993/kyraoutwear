
// import avatar from './assets/avatar.jpg'
// import backgroundImage from './assets/fashion-bg.png'
import AffiliateLinks from './components/AffiliateLinks'

function App() {
  return (
    // <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(255,255,255,0.3)', backgroundBlendMode: 'overlay' }}>
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundColor: 'rgba(255,255,255,0.3)', backgroundBlendMode: 'overlay' }}>
      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 w-full max-w-md text-center shadow-xl">
        {/* <img src={avatar} className="w-24 h-24 rounded-full mx-auto object-cover mb-4" /> */}
        <h1 className="text-lg font-semibold">KYRA OUTWEAR</h1>
        <p className="text-sm text-gray-500 mb-6">Giving clothing a second life</p>
        
        <div className="space-y-3">
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Fit Channel</a>
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Daily outfits</a>
          <a href="#" className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">Blog</a>
          <div className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100 cursor-pointer">
            <span>Product Links</span>
            <AffiliateLinks />
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-6 text-gray-600">
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook" />
          <i className="fab fa-instagram" />
          <i className="fab fa-spotify" />
        </div>
      </div>
    </div>
  )
}

export default App
