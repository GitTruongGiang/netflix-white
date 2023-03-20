import React, { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { IMAGE_URL } from "../app/confing";
import { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

function TopRate({ name, topRate }) {
  const [dataTopRate, setDateTopRate] = useState([]);
  const [isAlly, setIsAlly] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleMovieClick = (item) => {
    console.log(item);
    navigate(`/movie/${item.id}`);
  };

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
      {
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
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
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className="list-movies"
        >
          <h1>{name}</h1>
          {dataTopRate.length &&
            dataTopRate.map((movie) => {
              return (
                <SwiperSlide
                  key={movie.id}
                  onClick={() => handleMovieClick(movie)}
                >
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
