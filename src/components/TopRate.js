import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { IMAGE_URL } from "../app/confing";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopRate({ name, topRate }) {
  console.log(topRate);
  const [dataTopRate, setDateTopRate] = useState([]);
  const [isAlly, setIsAlly] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.get(topRate);
        setDateTopRate(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="movie-wraper">
      <h1>{name}</h1>
      {
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={6}
          navigation={true}
          slidesPerGroup={6}
          grabCursor={true}
          speed={1500}
          loop={isAlly}
          onSwiper={(swiper) => console.log(swiper.a11y)}
          onSlideChange={(e) => {
            if (e.a11y.clicked !== false) setIsAlly(true);
          }}
          onAutoplay={() => {
            setIsAlly(true);
          }}
          className="list-movies"
        >
          {dataTopRate.length &&
            dataTopRate.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <img
                    src={`${IMAGE_URL}/${movie.backdrop_path}`}
                    alt=""
                    className="poster-movie"
                  />
                  <div className="bg-movie"></div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      }
    </div>
  );
}

export default TopRate;
