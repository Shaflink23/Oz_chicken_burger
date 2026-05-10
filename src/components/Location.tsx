export default function Location() {
  return (
    <section
      id="location"
      className="relative min-h-screen flex items-center bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Visit <span className="text-amber-500">Our Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your nearest OZ Chicken Burger location and experience the best burgers in town.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location 1 */}
          <div className="bg-stone-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Downtown Location</h3>
                <p className="text-gray-600">Main Street</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">📍</span>
                <p className="text-gray-700">123 Main Street, Downtown, City, State 12345</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">📞</span>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">🕐</span>
                <div>
                  <p className="text-gray-700">Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-700">Fri - Sat: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-700">Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2 */}
          <div className="bg-stone-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Uptown Location</h3>
                <p className="text-gray-600">Shopping District</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">📍</span>
                <p className="text-gray-700">456 Shopping Avenue, Uptown, City, State 12346</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">📞</span>
                <p className="text-gray-700">(555) 987-6543</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 font-semibold">🕐</span>
                <div>
                  <p className="text-gray-700">Mon - Thu: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-700">Fri - Sat: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-700">Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600 mb-2">🗺️ Map View</p>
            <p className="text-gray-500">Interactive map coming soon</p>
          </div>
        </div>

        {/* Delivery partners */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Order for Delivery</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold text-gray-700">🚗 DoorDash</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold text-gray-700">🍔 Uber Eats</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg font-semibold text-gray-700">🛵 Grubhub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
