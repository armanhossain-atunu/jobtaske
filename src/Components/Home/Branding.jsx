"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// swiper styles
import "swiper/css";

import brands from "../../data/brands.json";
import Image from "next/image";
import useAOS from "@/app/hooks/useAOS";

const BrandingSection = () => {
  useAOS();
  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-11/12 mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Trusted By Top Brands
        </h2>

        {/* Branding Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 1800 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex justify-center items-center">
                <Image
                  src={brand.logo}
                  alt="Brand Logo"
                  width={100}
                  height={100}
                  className="h-16 w-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default BrandingSection;
