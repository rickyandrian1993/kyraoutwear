import backgroundImage from './assets/bg.jpg'
import avatar from './assets/logo.jpg'
import AffiliateLinks from './components/AffiliateLinks'
import ContactInformation from './components/ContactInformation'

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'rgba(255,255,255,0.3)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 w-full max-w-md text-center shadow-xl">
        <img
          src={avatar}
          className="w-28 h-28 rounded-full mx-auto object-cover mb-2"
        />
        <h1 className="text-xl font-semibold">KYRA OUTWEAR</h1>
        <p className="text-sm text-gray-500">Giving clothing a second life</p>
        <ContactInformation />
        <div className="space-y-3">
          {/* <a className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">
            Fit Channel
          </a>
          <a className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100">
            Daily outfits
          </a> */}
          <div className="block w-full bg-white py-2 rounded-lg font-medium shadow hover:bg-gray-100 cursor-pointer">
            {/* <span>Products</span> */}
            <AffiliateLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
