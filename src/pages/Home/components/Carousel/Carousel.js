import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";

// styles
import "swiper/css";
import "./Carousel.css"

// hooks
import useAxiosGet from '../../../../hooks/axios/useAxiosGet';

// components
import CarouselSidebar from './CarouselSidebar/CarouselSidebar'
import CarouselCourseItem from './CarouselItems/CourseItem/CarouselCourseItem';
import SwiperNavButtons from './SwiperNavButtons/SwiperNavButtons';

export default function Carousel(props) {
  const {
    id,
    sideBar = true,
    header = false,
    bgColor = '',
    title,
    desc,
    customClass = '',
    moreOptionsTitle = '',
    apiUrl
  } = props;
  const { axiosGetResult, axiosGetIsPending, axiosGetError, setAxiosGetUrl, setAxiosGetToken } = useAxiosGet();
  const [dataArray, setDataArray] = useState();
  const [carouselBreakPoints, setcarouselBreakPoints] = useState();
  const [pageinationStatus, setPaginationStatus] = useState('start')

  useEffect(() => {
    // send request to api for get datas
    setAxiosGetUrl(apiUrl)
    // access and Set showing slides count
    if (sideBar) {
      setcarouselBreakPoints(
        {
          0: {
            // xs
            slidesPerView: 1
          },
          640: {
            // sm,
            slidesPerView: 2,
          },
          1280: {
            // lg
            slidesPerView: 3,
          },
        }
      )
    } else {
      setcarouselBreakPoints(
        {
          0: {
            // xs
            slidesPerView: 1
          },
          640: {
            // sm,
            slidesPerView: 2,
          },
          780: {
            // md,
            slidesPerView: 3,
          },
          1280: {
            // lg
            slidesPerView: 4,
          },
        }
      )
    }
  }, []);

  // 
  useEffect(() => {
    if (axiosGetResult !== null) {
      setDataArray(axiosGetResult)
      console.log(axiosGetResult)
    } else if (axiosGetError !== null) {
      console.log(axiosGetError)
    }
  }, [axiosGetResult, axiosGetError])

  return (
    <div className='carousel' id={id}>
      <div className={`wrpper w-full relative rounded-4xl flex flex-col lg:flex-row items-center justify-center gap-2 p-5 ${bgColor} ${customClass}`}>
        {sideBar &&
          <div className='w-full lg:w-3/12'>
            <CarouselSidebar
              title={title}
              description={desc}
              moreOptionsTitle={moreOptionsTitle}
            />
          </div>
        }
        <div className={`${sideBar ? 'w-full lg:w-9/12' : 'w-full'}`}>
          {carouselBreakPoints && (
            <Swiper
              wrapperTag='div'
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={4}
              breakpoints={carouselBreakPoints}
              className="carousel">
              {/* Carousel Items  */}
              {
                dataArray !== undefined && (
                  dataArray.map(item => (
                    <SwiperSlide key={item.id}  >
                      <CarouselCourseItem {...item}/>
                    </SwiperSlide>
                  )))
              }
              {/* Pagination buttons  */}
              <SwiperNavButtons status={pageinationStatus} />
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}