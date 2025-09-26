'use client'

import Image, { StaticImageData } from 'next/image'

import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import FancyButton from '@/components/UI/button/fancy-btn'
import ImageOne from '@/public/assets/images/before-after/before-after-1.jpg'
import ImageTwo from '@/public/assets/images/before-after/before-after-2.jpg'

interface BeforeAfter {
  id: string
  url: string | StaticImageData
}

const beforeAfterData: BeforeAfter[] = [
  { id: '1', url: ImageOne },
  { id: '2', url: ImageTwo },
]

// ====================|| BEFORE AFTER SLIDER ||==================== //

export default function BeforeAfterSlider() {
  return (
    <Card
      sx={{ minHeight: [0, 450], display: 'flex', flexDirection: 'column' }}
    >
      <CardContent>
        <Stack alignItems="center" sx={{ width: '100%', mb: 2 }}>
          <Typography variant="h3" component="p">
            Before & After Photos
          </Typography>
        </Stack>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          spaceBetween={10}
          speed={300}
          className="before-after-slider"
        >
          {beforeAfterData.map((item) => (
            <SwiperSlide key={`before-after-slide-${item.id}`}>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={item.url}
                  alt={`before-after-photo-${item.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
      <Stack alignItems="center" sx={{ mt: 'auto', mb: 4 }}>
        <FancyButton>View Photo Gallery</FancyButton>
      </Stack>
    </Card>
  )
}
