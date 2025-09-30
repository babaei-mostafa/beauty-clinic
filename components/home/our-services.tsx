import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ABOUT_IMG from '@/public/assets/images/about/home-about.jpg'
import FancyImg from '@/components/UI/fancy-img'

// ====================|| OUR SERVICES COMPONENT ||==================== //

export default function OurServices() {
  return (
    <Grid container spacing={10} sx={{ py: 8 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <FancyImg src={ABOUT_IMG.src} alt="etoile beauty clinic" />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Étoile Clinic
        </Typography>
        <Typography
          sx={{ lineHeight: 2, fontSize: '1.2rem', textAlign: 'justify' }}
        >
          At Étoile Clinic, we specialize in enhancing your natural beauty with
          safe, personalized, and advanced treatments. Our expert team combines
          medical expertise with the latest technology to provide skincare,
          aesthetics, and wellness solutions tailored to your unique needs. We
          are committed to helping you look and feel your best in a relaxing and
          professional environment.
        </Typography>
      </Grid>
    </Grid>
  )
}
