import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroCarousel.css";

const banners = [
  {
    id: 1,
    link: "/offer/january-offers",
    image:
      "https://ik.imagekit.io/wlfr/wellness/images/banner/newyeardeals_2026.jpg",
  },
  {
    id: 2,
    link: "/offer/health-and-fitness",
    image:
      "https://ik.imagekit.io/wlfr/wellness/images/banner/Health_Fitness_2026.jpg",
  },
  {
    id: 3,
    link: "/offer/winter-health-care",
    image:
      "https://ik.imagekit.io/wlfr/wellness/images/banner/immunity_0126.jpg",
  },
  {
    id: 4,
    link: "/offer/winter-essentials",
    image:
      "https://ik.imagekit.io/wlfr/wellness/images/banner/skin_care_0126.jpg",
  },
];

const HeroCarousel = () => {
  return (
    <div className="hero-root">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        centeredSlides={true}
        slidesPerView={1.05}
        spaceBetween={23}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            centeredSlides: false,
            slidesPerView: 1.6,
            spaceBetween: 32,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 2.6,
            spaceBetween: 40,
          },
        }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.link} className="hero-slide">
              <img src={item.image} alt="offer banner" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
