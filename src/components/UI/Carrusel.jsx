import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LazyImage from '../LazyImg';

const Carrusel = ({ items }) => {
  return (
    <Swiper
      className='carrusel'
      centerInsufficientSlides={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        390: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='carrusel__item'>
            <LazyImage className='carrusel__image' src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
