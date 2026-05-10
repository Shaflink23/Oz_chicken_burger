import uberEatsLogo from '../images/uber-eats-seeklogo.png';
import doordashLogo from '../images/doordash-logo-0.webp';
import grubhubLogo from '../images/grubhub-vector-logo.svg';

export default function LocationPage() {
  return (
    <section
      id="location"
      className="relative min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Visit <span className="text-amber-500">Our Locations</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your nearest OZ Chicken Burger location and experience the best burgers in town.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-96 rounded-3xl overflow-hidden shadow-sm bg-gray-100 relative mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305234.092093835!2d-121.95035759999999!3d36.778259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="California Map"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Location 1 */}
          <div className="bg-stone-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">📍</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-0.5">Remote Deliveries</h3>
                <p className="text-gray-600 text-xs">We Work Remotely</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">📍</span>
                <p className="text-gray-700 text-xs">Los Angeles</p>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">📞</span>
                <p className="text-gray-700 text-xs">Tel: (213) 545-6412</p>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">🕐</span>
                <div className="text-xs">
                  <p className="text-gray-700">Hours: 11:00AM-2:00AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div className="bg-stone-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-2 mb-3">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">📍</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-0.5">Delivery Service</h3>
                <p className="text-gray-600 text-xs">Los Angeles Area</p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">📍</span>
                <p className="text-gray-700 text-xs">Los Angeles</p>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">📞</span>
                <p className="text-gray-700 text-xs">Tel: (213) 545-6412</p>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-amber-500 font-semibold text-xs">🕐</span>
                <div className="text-xs">
                  <p className="text-gray-700">Hours: 11:00AM-2:00AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery partners */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Order for Delivery</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
              <img src={uberEatsLogo} alt="Uber Eats" className="h-12 w-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
              <img src={doordashLogo} alt="DoorDash" className="h-12 w-auto object-contain" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow">
              <img src={grubhubLogo} alt="Grubhub" className="h-12 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
