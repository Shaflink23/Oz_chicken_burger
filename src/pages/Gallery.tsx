import galleryImage1 from '../images/6a2762a1-ed0e-4a7d-83cd-0e7aecceb647.jpg';
import galleryImage2 from '../images/6f54508e-6b25-4dc6-995e-18316f09e00b.jpg';
import galleryImage3 from '../images/8cef5b36-5eb9-45a3-a115-0082d46b6002.png';
import galleryImage4 from '../images/9a1ef2b3-1021-48c6-862d-7cb339e82d0e.jpg';
import galleryImage5 from '../images/9dc69736-afc7-4a11-9716-82eaae39d662.jpg';
import galleryImage6 from '../images/04282013 ozburgers 023.JPG.jpeg';

const photos = [
  {
    src: galleryImage1,
    alt: 'The Oz Burger close-up',
    span: 'col-span-2 row-span-2',
  },
  {
    src: galleryImage2,
    alt: 'Restaurant atmosphere',
    span: 'col-span-1 row-span-1',
  },
  {
    src: galleryImage3,
    alt: 'Fresh ingredients',
    span: 'col-span-1 row-span-1',
  },
  {
    src: galleryImage4,
    alt: 'Chef at work',
    span: 'col-span-1 row-span-1',
  },
  {
    src: galleryImage5,
    alt: 'Burger being assembled',
    span: 'col-span-1 row-span-1',
  },
  {
    src: galleryImage6,
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

export default function GalleryPage() {
  return (
    <section id="gallery" className="py-24 bg-white min-h-screen">
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
