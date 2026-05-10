import uberEatsLogo from '../images/uber-eats-seeklogo.png';
import doordashLogo from '../images/doordash-logo-0.webp';
import grubhubLogo from '../images/grubhub-vector-logo.svg';
import burgerImage from '../images/ZXDPWRF.png';
import heroImage from '../images/6f54508e-6b25-4dc6-995e-18316f09e00b.jpg';
import ozVideo from '../videos/oz vid.mp4';
import './Home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
      id="home"
      className="relative h-[900px] md:h-[600px] flex items-center overflow-hidden bg-stone-50 -mt-28"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={ozVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Background texture */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f59e0b22 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #f59e0b15 0%, transparent 40%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-0 md:pt-4 md:pb-0">
        <div className="grid lg:grid-cols-2 gap-0 md:gap-8 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col items-start pb-0 md:pb-0">
            <h1 className="text-amber-400 text-xl sm:text-3xl lg:text-4xl font-serif font-bold leading-tight tracking-wide capitalize mb-4 drop-shadow-lg">
              Fresh Oz Chicken Burger Meals
            </h1>

            <h2 className="text-white text-base sm:text-xl lg:text-2xl font-serif font-semibold leading-relaxed tracking-wide mb-4 drop-shadow-md">
              Tasty Burgers, Quality Service & Good Vibes
            </h2>
            
            <p className="text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide max-w-lg mb-6 drop-shadow-md">
              We bring you creme da la creme of burgers at affordable prices. Are you dreaming of the best cheeseburgers in town? The kind that makes your tastebuds tango?
            </p>

            {/* Delivery Section */}
            <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <p className="text-amber-500 text-sm whitespace-nowrap">Order from:</p>
              <div className="flex gap-3 md:gap-4 items-center">
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
                    className="delivery-logo-link group relative w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center p-2 md:p-2.5 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(220, 202, 135, 0.08)',
                      border: '1px solid rgba(220, 202, 135, 0.2)',
                    }}
                  >
                    {/* Hover effect background */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full transition-all duration-500 -translate-x-1/2 -translate-y-1/2 group-hover:w-24 group-hover:h-24"
                      style={{ background: 'rgba(220, 202, 135, 0.15)' }}
                    />
                    <img 
                      src={platform.src} 
                      alt={platform.alt}
                      className="w-full h-full object-contain relative z-10 brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end -mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400 opacity-15 blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={heroImage}
                  alt="Oz Chicken Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 -left-3 bg-white rounded-xl shadow-xl px-4 py-2.5">
                <p className="text-xs font-black text-gray-900 leading-tight text-center">Best Burgers in California</p>
              </div>
              <div className="absolute top-6 -right-3 bg-amber-500 text-white rounded-xl shadow-xl px-4 py-2.5">
                <p className="text-xs font-black leading-tight text-center">Fresh Oz Chicken Burger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Us / Why Choose Us Section */}
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Column - About Us */}
          <div className="flex flex-col">
            <h2 className="text-amber-500 text-4xl md:text-5xl font-serif mb-4">About Us</h2>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-0.5 bg-amber-500"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
              Here At OZ Chicken Burger, We Serve Tasty Burgers With Options For Everyone. Grilled Or Crispy, Chicken Breasts Or Ground Patties - Made Fresh Daily!
            </p>

            {/* Order From */}
            <div className="mt-auto">
              <p className="text-gray-700 text-sm mb-4">Order From:</p>
              <div className="flex gap-4">
                {[
                  { src: uberEatsLogo, alt: 'Uber Eats' },
                  { src: doordashLogo, alt: 'DoorDash' },
                  { src: grubhubLogo, alt: 'Grubhub' }
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 rounded-xl flex items-center justify-center p-3 border border-gray-200 hover:border-amber-500 transition-all"
                    style={{ background: 'rgba(0, 0, 0, 0.03)' }}
                  >
                    <img 
                      src={platform.src} 
                      alt={platform.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Burger Image */}
          <div className="flex justify-center">
            <img 
              src={burgerImage}
              alt="OZ Chicken Burger"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="flex flex-col">
            <h2 className="text-amber-500 text-4xl md:text-5xl font-serif mb-4 text-right">
              Why Choose Us
            </h2>
            <div className="flex items-center gap-2 mb-8 justify-end">
              <div className="w-12 h-0.5 bg-amber-500"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="space-y-2 text-gray-600 text-sm md:text-base leading-relaxed text-right mb-10">
              <p>✓ Best Price ✓ Fresh Ingredients ✓ Best Service</p>
              <p>✓ Health Protocol. Tasty Burgers, Quality Service,</p>
              <p>And Good Vibes At Affordable Prices. Now</p>
              <p>Available On Uber Eats!</p>
            </div>

            <div className="flex justify-end mt-auto">
              <a
                href="/contact"
                className="px-10 py-3.5 bg-amber-100 text-amber-700 font-serif font-semibold text-base rounded-sm hover:bg-amber-200 transition-all shadow-md"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
