'use client'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import HomeSlider from './home-slider'
import Testimonials from './testimonials'
import BeforeAfterSlider from './before-after'
import AboutComponent from './about'
import OurServices from './our-services'

export default function HomeComponent() {
  return (
    <>
      <HomeSlider />

      <Container>
        <AboutComponent />
        <OurServices />

        <Grid container spacing={4} sx={{ py: 8 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <BeforeAfterSlider />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Testimonials />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
