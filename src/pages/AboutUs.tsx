import { Flame, Leaf, Award } from 'lucide-react';
import image1 from '../images/6a2762a1-ed0e-4a7d-83cd-0e7aecceb647.jpg';
import image2 from '../images/6f54508e-6b25-4dc6-995e-18316f09e00b.jpg';
import image3 from '../images/9a1ef2b3-1021-48c6-862d-7cb339e82d0e.jpg';

const values = [
  {
    icon: Flame,
    title: 'Fired with Passion',
    desc: 'Every burger is hand-seasoned and cooked fresh to order. Choose grilled or crispy - we make it perfect every time.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'We use only the freshest ingredients to create mouthwatering chicken burgers. Whether you prefer marinated breasts or ground patties, we\'ve got you covered.',
  },
  {
    icon: Award,
    title: 'Quality & Value',
    desc: 'We bring you crème de la crème of burgers at affordable prices. Tasty burgers, quality service, and good vibes - all at just $5.95.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute top-0 left-0 w-64 h-72 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={image1}
                alt="Chef preparing burger"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-28 w-72 h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={image2}
                alt="Fresh ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 right-0 w-52 h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={image3}
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <span className="text-white font-black text-xl">OZ</span>
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden w-full h-64 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={image1}
              alt="Chef preparing burger"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
              Born in a small kitchen.<br />
              <span className="text-amber-500">Built on passion.</span>
            </h2>

            <div className="flex flex-col gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-200">
                    <Icon size={20} className="text-amber-500 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
