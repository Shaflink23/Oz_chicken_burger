import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../images/canva logo 1 (1).png';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-serif mb-3">Contact Us</h2>
            <div className="space-y-1 text-black text-sm">
              <p>Los Angeles, California</p>
              <p>Tel: (213) 545-6412</p>
              <p>Info@Ozchicburger.Com</p>
            </div>
          </div>

          {/* Logo and Social Section */}
          <div className="text-center">
            <img 
              src={logo} 
              alt="OZ Chicken Burger" 
              className="h-24 mx-auto mb-2"
            />
            <p className="text-black italic mb-2 px-4 text-sm">
              "Tasty Burgers, Quality Service, And Good Vibes At Affordable Prices."
            </p>
            {/* Decorative element */}
            <div className="flex justify-center mb-2">
              <div className="w-6 h-0.5 bg-yellow-600"></div>
              <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mx-1"></div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-yellow-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="text-center md:text-right">
            <h2 className="text-xl font-serif mb-3">Working Hours</h2>
            <div className="space-y-1 text-black text-sm">
              <p>Open Daily:</p>
              <p>Hours: 11:00AM-2:00AM</p>
              <p className="mt-2">Available On Uber Eats</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-black pt-4 border-t border-gray-300">
          <p className="text-xs">2026 OZ Chicken Burger. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
