'use client '

import { StaticImageData } from 'next/image'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import FancyButton from '@/components/UI/button/fancy-btn'
import AVATAR_ONE from '@/public/assets/images/testimonials/avatar-1.jpg'
import AVATAR_TWO from '@/public/assets/images/testimonials/avatar-2.jpg'

interface Testimony {
  id: string
  name: string
  avatar: string | StaticImageData
  text: string
}

const testimonialsData: Testimony[] = [
  {
    id: '1',
    name: 'Sarah M.',
    avatar: AVATAR_ONE,
    text: 'I had an amazing experience at this clinic! The staff were so welcoming and made me feel comfortable from the moment I walked in. I came in for a facial and some skin treatments, and I can already see such a difference in my complexion. Everything was explained clearly, and I never felt rushed. The clinic itself is spotless and beautifully designed, which really adds to the relaxing atmosphere. I’ll definitely be coming back and recommending it to my friends. I had an amazing experience at this clinic! The staff were so welcoming and made me feel comfortable from the moment I walked in. I came in for a facial and some skin treatments, and I can already see such a difference in my complexion. Everything was explained clearly, and I never felt rushed. The clinic itself is spotless and beautifully designed, which really adds to the relaxing atmosphere. I’ll definitely be coming back and recommending it to my friends.',
  },
  {
    id: '2',
    name: 'Daniel R.',
    avatar: AVATAR_TWO,
    text: 'I was a bit hesitant at first since it was my first time visiting a beauty clinic, but I’m glad I chose this one. I booked a treatment for my skin and also tried their laser hair removal. The staff were professional, friendly, and made sure I understood the process. The results so far have been great, and I feel more confident already. It’s not just for women—guys can definitely benefit too. I’ll be continuing with my sessions here.',
  },
]

// ====================|| TESTIMONIALS ||==================== //

export default function Testimonials() {
  return (
    <Card
      sx={{ minHeight: [0, 450], display: 'flex', flexDirection: 'column' }}
    >
      <CardContent>
        <Stack alignItems="center" sx={{ width: '100%', mb: 2 }}>
          <Typography variant="h3" component="p">
            Testimonials
          </Typography>
        </Stack>
        <Typography>
          <FormatQuoteIcon />
        </Typography>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          speed={300}
          spaceBetween={10}
          className="testimonials-slider"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={`testimonial-${testimonial.id}`}>
              <Stack spacing={2}>
                <Typography
                  sx={{ textAlign: 'justify' }}
                  className="line-clamp-9"
                >
                  {testimonial.text}
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={(testimonial.avatar as StaticImageData).src}
                    alt={`user-avatar-${testimonial.id}`}
                  />
                  <Typography>{testimonial.name}</Typography>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>
      <Stack alignItems="center" sx={{ mb: 4, mt: 'auto' }}>
        <FancyButton>View More Reviews</FancyButton>
      </Stack>
    </Card>
  )
}
