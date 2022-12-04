"use client";
import Heading from "./ui/heading";
import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/our-work.css";
import { Pagination } from "swiper";
import Image from "next/image";

interface Props {}

const OurWorks: React.FC<Props> = () => {
  return (
    <section className='bg-gray-900 py-20'>
      <Heading
        uncolored='Here are some of'
        alt='text-white'
        colored='our works'
      />
      <Slider />
    </section>
  );
};

export default OurWorks;

type SliderProps = {};

const Slider = ({}: SliderProps) => {
  return (
    <>
      <Swiper
        slidesPerView={3.3}
        pagination={true}
        modules={[Pagination]}
        spaceBetween={30}
        className='w-3/4 mx-auto my-20'
      >
        {images.map((_) => (
          <SwiperSlide key={_.src}>
            <div className='overflow-hidden h-48 rounded-xl'>
              <Image
                src={_.src}
                objectFit='cover'
                layout='responsive'
                alt=''
                width={_.width}
                height={_.height}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const images = [
  require("../assets/images/carousel-1.png").default,
  require("../assets/images/carousel-2.png").default,
  require("../assets/images/carousel-3.png").default,
  require("../assets/images/carousel-4.png").default,
  require("../assets/images/carousel-5.png").default,
];

console.log(images);
