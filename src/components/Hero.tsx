export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center overflow-hidden bg-stone-50 pt-8"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/videos/oz vid.mp4" type="video/mp4" />
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 flex flex-col items-start">
            <h1 className="text-amber-500 text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight tracking-wide capitalize mb-3">
              Fresh Oz Chicken Burger Meals
            </h1>
            
            {/* Spoon Image - Add your spoon image here */}
            <div className="my-2">
              <img 
                src="/src/images/spoon.png" 
                alt="Spoon" 
                className="w-8 h-auto"
              />
            </div>

            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-serif leading-relaxed tracking-wide mb-4">
              Tasty Burgers, Quality Service & Good Vibes
            </h2>
            
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed tracking-wide max-w-lg mb-6">
              The Best Chicken Burger at the most affordable price.
            </p>
            
            <button
              onClick={() => handleScroll('#menu')}
              className="px-6 py-3 bg-amber-500 text-white font-bold text-sm rounded-sm hover:bg-amber-600 active:scale-95 transition-all duration-200"
            >
              Explore Menu
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400 opacity-15 blur-3xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
                  alt="Oz Chicken Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 -left-3 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="text-xs font-black text-gray-900 leading-tight">Best Burger</p>
                  <p className="text-xs text-gray-500 leading-tight">USA — 2024</p>
                </div>
              </div>
              <div className="absolute top-6 -right-3 bg-amber-500 text-white rounded-xl shadow-xl px-3 py-2">
                <p className="text-xs font-black leading-tight">Fresh Daily</p>
                <p className="text-xs opacity-80 leading-tight">Never Frozen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
