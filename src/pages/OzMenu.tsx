import { CheckCircle2 } from 'lucide-react';
import burgerImage from '../images/6f54508e-6b25-4dc6-995e-18316f09e00b.jpg';
import uberEatsLogo from '../images/uber-eats-seeklogo.png';
import doordashLogo from '../images/doordash-logo-0.webp';
import grubhubLogo from '../images/grubhub-vector-logo.svg';

const layers = [
  { name: 'Toasted Brioche Bun', desc: 'Buttered and toasted golden' },
  { name: 'Crispy Chicken', desc: 'Grilled or crispy chicken breast' },
  { name: 'OZ Special Sauce', desc: 'Our signature secret sauce' },
  { name: 'Fresh Onions', desc: 'Sliced to perfection' },
  { name: 'Chips', desc: 'Crispy golden fries' },
  { name: 'H2O Water', desc: 'Refreshing bottled water' },
];

export default function OzMenu() {
  return (
    <section id="menu" className="py-24 bg-stone-50 min-h-screen">
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
                  src={burgerImage}
                  alt="The Oz Burger"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Price tag */}
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-amber-500 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-white text-xs font-bold leading-tight">Only</span>
                <span className="text-white text-2xl font-black leading-tight">$5.95</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-2">The OZ Chicken Burger</h3>
              <p className="text-gray-600 leading-relaxed">
                Our signature OZ Chicken Burger made fresh daily! Choose between grilled or crispy chicken breast, topped with our famous OZ special sauce and fresh onions on a toasted brioche bun. Served as a complete meal with crispy chips and H2O water. Tasty burgers, quality service, and good vibes at an unbeatable price!
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
              {['Grilled or Crispy', 'Includes Chips', 'Includes Water', 'Made Fresh Daily'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="tel:+15550100200"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold text-base rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-lg"
              >
                Order by Phone
                <span className="text-amber-400 font-black">→</span>
              </a>

              {/* Delivery Logos */}
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-xs font-medium">Order From:</p>
                <div className="flex gap-3 items-center">
                  {[
                    { src: uberEatsLogo, alt: 'Uber Eats', link: '#' },
                    { src: doordashLogo, alt: 'DoorDash', link: '#' },
                    { src: grubhubLogo, alt: 'Grubhub', link: '#' }
                  ].map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2.5 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-gray-200"
                    >
                      <div 
                        className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-amber-50 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:w-24 group-hover:h-24"
                      />
                      <img
                        src={platform.src}
                        alt={platform.alt}
                        className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
