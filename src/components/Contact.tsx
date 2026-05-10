import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '11:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 9:00 PM' },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
              Find Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Come Hungry. <span className="text-amber-500">Leave Happy.</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We're right in the heart of downtown. Walk-ins welcome — just be ready to wait in line. It's worth it.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <MapPin size={22} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Our Location</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                142 West Burnside Ave<br />
                Portland, OR 97209<br />
                United States
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-amber-500 text-sm font-semibold hover:text-amber-600 transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Phone size={22} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">Call to Order</h3>
              <p className="text-gray-600 text-sm mb-3">We do phone orders — just call ahead and your burger will be ready hot.</p>
              <a
                href="tel:+15033210200"
                className="text-xl font-black text-gray-900 hover:text-amber-500 transition-colors"
              >
                (503) 321-0200
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                <Clock size={22} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-4">Opening Hours</h3>
              <div className="flex flex-col gap-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="w-full h-72 rounded-3xl overflow-hidden shadow-sm bg-gray-100 relative">
            <img
              src="https://images.pexels.com/photos/1486822/pexels-photo-1486822.jpeg"
              alt="Portland street"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl px-8 py-4 shadow-xl text-center">
                <p className="font-black text-gray-900 text-lg">142 West Burnside Ave</p>
                <p className="text-gray-500 text-sm">Portland, OR 97209</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 px-5 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full hover:bg-amber-600 transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-black text-base">
                OZ
              </span>
              <div>
                <p className="font-black text-sm leading-tight">OZ CHICKEN BURGER</p>
                <p className="text-amber-400 text-xs leading-tight">Portland, OR — Est. 2018</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Oz Chicken Burger. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
