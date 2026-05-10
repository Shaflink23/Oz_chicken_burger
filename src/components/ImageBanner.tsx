import bannerImage from '../images/2big.svg';

const ImageBanner = () => {
  return (
    <section className="w-full h-[900px] relative overflow-hidden flex items-center justify-center bg-white">
      <img 
        src={bannerImage}
        alt="OZ Chicken Burger Promotion"
        className="w-[90%] h-[90%] object-cover"
      />
    </section>
  );
};

export default ImageBanner;
