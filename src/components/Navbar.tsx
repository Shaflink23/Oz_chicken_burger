import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import logo from '../images/second logoo oz.svg';

const leftNavLinks = [
  { label: 'Oz Menu', href: '/menu' },
  { label: 'Order Now', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Location', href: '/location' },
];

const rightNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 text-xs">
            {/* Left side - Contact Info */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@ozchicburger.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕐</span>
                <span>Hours: 11:00AM-2:00AM</span>
              </div>
            </div>
            
            {/* Right side - Location */}
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Los Angeles, California</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Menu */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {leftNavLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-2 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-[#dc2626] border-[#dc2626]'
                      : 'text-gray-700 hover:text-gray-900 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Logo in Center */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <img 
              src={logo} 
              alt="OZ Chicken Burger Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Right Menu */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {rightNavLinks.map((link) => {
              // Don't highlight 'Order Now' even if on menu page (it's a CTA, not a nav item)
              const isActive = link.label !== 'Order Now' && location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-2 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-[#dc2626] border-[#dc2626]'
                      : 'text-gray-700 hover:text-gray-900 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 640 640">
                <path fill="#c81e1e" d="M112 448c-8.8 0-16 7.2-16 16c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80c0-8.8-7.2-16-16-16zM96 266c0 12.2 9.9 22 22 22h404c12.2 0 22-9.9 22-22c0-17.2-2.6-34.4-10.8-49.5C511 175.7 450.9 96 320 96s-191 79.6-213.2 120.5C98.6 231.6 96 248.8 96 266M64 368c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32m256-232c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24m-136 56c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24m248-24c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100 overflow-y-auto`}
      >
        <nav className="px-4 py-3 flex flex-col gap-1 pb-6">
          {[...leftNavLinks, ...rightNavLinks].map((link) => {
            // Don't highlight 'Order Now' even if on menu page (it's a CTA, not a nav item)
            const isActive = link.label !== 'Order Now' && location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`text-left px-3 py-3 text-base font-medium transition-all border-b-2 ${
                  isActive
                    ? 'text-[#dc2626] border-[#dc2626]'
                    : 'text-gray-700 hover:text-gray-900 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      </header>
    </>
  );
}
