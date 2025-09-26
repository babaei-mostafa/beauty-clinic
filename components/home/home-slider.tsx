'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slidersArray = [
  {
    id: '1',
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/d423f8d07ef74e8dbea338b994bcf3cb2098b9f7_1758697500.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: '2',
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/96b03c4302bdf718930c6d34c026a50d50b102f6_1758106333.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
  {
    id: '3',
    url: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/901613d7b944707c34fb8e747b3c70300481f214_1758604876.jpg?x-oss-process=image/quality,q_95/format,webp',
  },
]

// ====================|| HOME SLIDER ||==================== //

export default function HomeSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={1}
      speed={300}
      className="home-slider"
    >
      {slidersArray.map((slider) => (
        <SwiperSlide key={`home-slider-${slider.id}`}>
          <Link href={slider.url} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-80">
              <Image src={slider.url} alt="home slider" fill />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
