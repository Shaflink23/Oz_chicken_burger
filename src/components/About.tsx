import { Flame, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: Flame,
    title: 'Fired with Passion',
    desc: 'Every bird is hand-seasoned and cooked fresh to order. No short cuts, no reheats — just pure, crackling flavor every single time.',
  },
  {
    icon: Leaf,
    title: 'Local Ingredients',
    desc: 'We source our produce, brioche buns, and chicken from local American farms within 100 miles of our kitchen. Fresh tastes better.',
  },
  {
    icon: Award,
    title: 'One Thing Done Right',
    desc: 'We made a choice — perfect one burger instead of diluting our craft across a bloated menu. Quality over quantity, always.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute top-0 left-0 w-64 h-72 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg"
                alt="Chef preparing burger"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-28 w-72 h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
                alt="Fresh ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-24 right-0 w-52 h-52 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg"
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
              src="https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg"
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
              <span className="text-amber-500">Built on obsession.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Oz Chicken Burger started in 2018 when founder Marcus "Oz" Owens quit his corporate job
              to chase one dream — building the greatest chicken burger in America. He spent 18 months
              testing 300+ recipes before he dared open his doors.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Today, that same relentless pursuit of perfection drives every single burger we make.
              We haven't expanded the menu. We never will. Because when something's perfect, you
              don't mess with it.
            </p>

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
