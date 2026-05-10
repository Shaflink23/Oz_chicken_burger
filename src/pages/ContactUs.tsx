import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const hours = [
  { day: 'Daily', time: '11:00AM-2:00AM' },
];

export default function ContactUs() {
  return (
    <>
      <section id="contact" className="py-24 bg-stone-50 min-h-screen">
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

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Address */}
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                <MapPin size={14} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-sm mb-1">Our Location</h3>
              <p className="text-gray-600 leading-tight text-xs">
                Los Angeles<br />
                Remote Deliveries
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                <Phone size={14} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-sm mb-1">Call to Order</h3>
              <p className="text-gray-600 text-xs leading-tight mb-1.5">We do phone orders — just call ahead and your burger will be ready hot.</p>
              <a
                href="tel:+12135456412"
                className="text-sm font-black text-gray-900 hover:text-amber-500 transition-colors"
              >
                Tel: (213) 545-6412
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                <Clock size={14} className="text-amber-500" />
              </div>
              <h3 className="font-black text-gray-900 text-sm mb-1.5">Opening Hours</h3>
              <div className="flex flex-col gap-0.5 mb-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-xs">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.time}</span>
                  </div>
                ))}
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-1.5 mb-3">
                <Mail size={12} className="text-amber-500" />
                <a href="mailto:info@ozchicburger.com" className="text-xs text-gray-700 hover:text-amber-500 transition-colors">
                  info@ozchicburger.com
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors group">
                  <svg className="w-3.5 h-3.5 text-gray-700 group-hover:text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors group">
                  <Instagram size={14} className="text-gray-700 group-hover:text-amber-500" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors group">
                  <Facebook size={14} className="text-gray-700 group-hover:text-amber-500" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors group">
                  <Linkedin size={14} className="text-gray-700 group-hover:text-amber-500" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-amber-100 transition-colors group">
                  <Twitter size={14} className="text-gray-700 group-hover:text-amber-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="w-full h-96 rounded-3xl overflow-hidden shadow-sm bg-gray-100 relative">
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-xl text-center">
                <p className="font-black text-gray-900 text-base">Los Angeles</p>
                <p className="text-gray-500 text-xs">Remote Deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
