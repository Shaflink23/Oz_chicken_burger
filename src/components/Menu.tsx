import { CheckCircle2 } from 'lucide-react';

const layers = [
  { name: 'Toasted Brioche Bun', desc: 'Buttered and toasted golden' },
  { name: 'Garlic Aioli', desc: 'House-made, lightly smoky' },
  { name: 'Crispy Chicken Thigh', desc: '24-hr marinated, double-fried' },
  { name: 'American Cheese', desc: 'Melted to perfection' },
  { name: 'Iceberg Lettuce', desc: 'Cold & crunchy contrast' },
  { name: 'Pickled Jalapeños', desc: 'House-pickled, just enough heat' },
  { name: 'Smash Sauce', desc: 'The secret that ties it all together' },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            The Only Item on the Menu
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            The <span className="text-amber-500">Oz</span> Burger
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            300 test recipes. 18 months. One winner. This is it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Burger image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-300 opacity-20 blur-3xl" />
            <div className="relative">
              <div className="w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
                  alt="The Oz Burger"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Price tag */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-white text-xs font-bold leading-tight">Only</span>
                <span className="text-white text-2xl font-black leading-tight">$14</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-2">The Oz Original</h3>
              <p className="text-gray-600 leading-relaxed">
                A double-fried crispy chicken thigh, brined for 24 hours in buttermilk and our
                secret spice blend, stacked high on a toasted brioche bun with house-made
                smash sauce. It's indulgent, it's messy, and it's absolutely worth it.
              </p>
            </div>

            {/* Layers */}
            <div className="mb-8">
              <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-4">What's Inside</p>
              <div className="flex flex-col gap-3">
                {layers.map((layer) => (
                  <div key={layer.name} className="flex items-center gap-3 group">
                    <CheckCircle2
                      size={18}
                      className="text-amber-400 flex-shrink-0 group-hover:text-amber-600 transition-colors"
                    />
                    <div className="flex items-center gap-2 flex-1">
                      <span className="font-semibold text-gray-800 text-sm">{layer.name}</span>
                      <span className="text-gray-400 text-xs">— {layer.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Halal Available', 'Spicy Option', 'Served with Fries', 'Add a Shake'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="tel:+15550100200"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold text-base rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-lg"
            >
              Order by Phone
              <span className="text-amber-400 font-black">→</span>
            </a>
          </div>
        </div>

        {/* Nutrition / callout strip */}
        <div className="mt-16 bg-amber-500 rounded-3xl p-8 text-white grid sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-black">720</p>
            <p className="text-sm opacity-80 mt-1">Calories</p>
          </div>
          <div className="sm:border-x border-white/30">
            <p className="text-4xl font-black">48g</p>
            <p className="text-sm opacity-80 mt-1">Protein</p>
          </div>
          <div>
            <p className="text-4xl font-black">100%</p>
            <p className="text-sm opacity-80 mt-1">Worth It</p>
          </div>
        </div>
      </div>
    </section>
  );
}
