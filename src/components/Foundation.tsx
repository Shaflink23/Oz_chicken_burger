export default function Foundation() {
  return (
    <section
      id="foundation"
      className="relative min-h-screen flex items-center bg-stone-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            OZ <span className="text-amber-500">Foundation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Giving back to our community and making a difference, one burger at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Foundation Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Supporting local communities through food donations and partnerships with local charities.
            </p>
          </div>

          {/* Foundation Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Programs</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing scholarships and educational opportunities for aspiring culinary professionals.
            </p>
          </div>

          {/* Foundation Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
            <p className="text-gray-600 leading-relaxed">
              Committed to sustainable practices and supporting local farmers and suppliers.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-black text-amber-500 mb-2">10K+</p>
              <p className="text-sm text-gray-600 font-medium">Meals Donated</p>
            </div>
            <div>
              <p className="text-4xl font-black text-amber-500 mb-2">50+</p>
              <p className="text-sm text-gray-600 font-medium">Community Partners</p>
            </div>
            <div>
              <p className="text-4xl font-black text-amber-500 mb-2">25</p>
              <p className="text-sm text-gray-600 font-medium">Scholarships Awarded</p>
            </div>
            <div>
              <p className="text-4xl font-black text-amber-500 mb-2">100%</p>
              <p className="text-sm text-gray-600 font-medium">Local Sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
