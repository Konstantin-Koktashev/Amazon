import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://i.imgur.com/ouOYmX6.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/uzTXGT6.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/zEzCHES.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
