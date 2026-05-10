const photos = [
  {
    src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
    alt: 'The Oz Burger close-up',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    alt: 'Restaurant atmosphere',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg',
    alt: 'Fresh ingredients',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg',
    alt: 'Chef at work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg',
    alt: 'Burger being assembled',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg',
    alt: 'Golden fries',
    span: 'col-span-2 row-span-1',
  },
];

const reviews = [
  {
    name: 'Jamie R.',
    location: 'New York, NY',
    rating: 5,
    text: '"I drove 3 hours just for this burger. I\'d do it again tomorrow. No menu needed — this is the one."',
  },
  {
    name: 'Carlos M.',
    location: 'Austin, TX',
    rating: 5,
    text: '"The crunch on that chicken is unreal. I\'ve never had a chicken burger that hits this hard. Period."',
  },
  {
    name: 'Aisha T.',
    location: 'Chicago, IL',
    rating: 5,
    text: '"I respect the confidence of having one item. It absolutely delivers. The smash sauce alone is worth it."',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            See It. <span className="text-amber-500">Crave It.</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Every shot is unfiltered, unedited, and absolutely real. What you see is what you get.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-3 gap-3 h-[480px] sm:h-[540px] mb-20">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-gray-900">What People Are Saying</h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">★</span>
            ))}
            <span className="ml-2 text-gray-500 text-sm">4.9 / 5 across 2,400 reviews</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-stone-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
