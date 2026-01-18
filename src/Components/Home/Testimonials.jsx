"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Zarif",
      image: "https://i.ibb.co.com/C3y7THsx/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
      rating: 5,
      comment:
        "The UI design was clean, modern, and user-friendly. Perfect for my mobile app!",
    },
    {
      id: 2,
      name: "Hasan",
      image: "https://i.ibb.co.com/8gQ3w7V0/aiony-haust-3-TLl-97-HNJo-unsplash.jpg",
      rating: 4,
      comment:
        "Very professional service! The website performance improved significantly.",
    },
    {
      id: 3,
      name: "Anika",
      image: "https://i.ibb.co.com/ksdwk0cr/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
      rating: 5,
      comment:
        "Loved the design quality! Everything was exactly how I imagined it.",
    },{
      id: 4,
      name: "Hasan",
      image: "https://i.ibb.co.com/207gSk61/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg",
      rating: 4,
      comment:
        "Very professional service! The website performance improved significantly.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">What Clients Say</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Our clients love working with us. Here’s what they have to say.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-white h-80 p-6 shadow border rounded-xl text-center hover:shadow-xl transition">
              <div className=" flex justify-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                 
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-yellow-500 text-lg font-bold">
                {"⭐".repeat(review.rating)}
              </p>

              <p className="text-gray-600 mt-3 mb-4">{review.comment}</p>

              <h4 className="text-lg font-semibold">— {review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSlider;
