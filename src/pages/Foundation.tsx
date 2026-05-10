export default function FoundationPage() {
  return (
    <section
      id="foundation"
      className="relative min-h-screen flex items-center bg-stone-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            OZ <span className="text-amber-500">Foundation</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2">
            Helping Communities in Africa Programme Coming Soon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Foundation Card 1 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🍔</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Burger Day in Africa - Coming Soon</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're launching a special Burger Day programme in Africa, starting in Uganda. Our mission is to feed kids and give many the chance to taste burgers for the first time.
            </p>
          </div>

          {/* Foundation Card 2 */}
          <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🌍</span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Feeding Kids in Uganda</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Coming soon to Uganda - a programme dedicated to feeding children and introducing them to delicious burgers. Making a difference one meal at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
