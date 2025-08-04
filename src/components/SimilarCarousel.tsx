'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Iproducts } from '@/types/products';
import { CardProduct } from './CardProduct';

type productsProps = {
  products: Iproducts[];
};

export default function SimilarCarousel({ products }: productsProps) {
  return (
    <div className="w-full  xl:w-[75%] py-6 items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1320: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CardProduct product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};