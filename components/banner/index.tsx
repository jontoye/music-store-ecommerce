import Slider from 'react-slick';
import { SliderCard } from './SliderCard';
import { bannerImgs } from '../../data';

const Banner = () => {
  return (
    <div>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        fade
        autoplay
        autoplaySpeed={5000}
        arrows={false}
      >
        {bannerImgs.map((item) => (
          <SliderCard img={item.url} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
