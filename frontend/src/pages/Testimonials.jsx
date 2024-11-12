import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { ThemeChange } from '../contextApi/ContextProvider';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  const { t } = useTranslation('common');
  const [testimonialData, setTestimonialData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDark, changeColor } = useContext(ThemeChange);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          'http://localhost:3000/api/testimonials'
        );
        setLoading(false);
        setTestimonialData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTestimonial();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="text-center">
  //       <span className="loading loading-dots loading-xs"></span>
  //       <span className="loading loading-dots loading-sm"></span>
  //       <span className="loading loading-dots loading-md"></span>
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // }
  //
  return (
    <div
      className={
        isDark
          ? 'bg-gray-100 py-12 px-6 md:px-12 lg:px-24 min-h-screen container mx-auto  border-green-600 '
          : 'bg-slate-600 py-12 px-6 md:px-12 lg:px-24 min-h-screen container mx-auto  border-green-600'
      }
    >
      <section className="max-w-4xl mx-auto p-6 min-h-[400px] mt-[4em] border border-red-300">
        <h3 className="text-center text-2xl font-bold mb-6 text-black">
          {t('testimonials')}
        </h3>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialData.map((item, idx) => (
            <SwiperSlide className="p-10" key={idx}>
              <div className="bg-green-500 p-4 text-center rounded-md">
                <figure className="mb-4">
                  <img
                    src={`http://localhost:3000/${item.imageUrl}`}
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                    alt={item.name}
                  />
                  <figcaption className="mt-2 font-semibold">
                    {item.name}
                  </figcaption>
                </figure>
                <p className="text-center mb-4 text-black">{item.content}</p>
                <div className="flex justify-center  text-black">
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
