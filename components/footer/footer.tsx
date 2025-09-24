'use client'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'

import LOGO from '@/public/assets/images/etoile-clinic-logo-small.png'
import Image from 'next/image'
import NewsLetterForm from './news-letter-form'
import Socials from '@/components/common/socials'
import LinkIconButton from '../UI/button/link-icon-btn'

// ====================|| FOOTER ||==================== //

export default function Footer() {
  const theme = useTheme()
  return (
    <footer>
      <Box
        sx={{
          border: '1px solid',
          borderColor: theme.palette.primary.main,
          mx: 2,
          mb: 4,
          py: 4,
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={2}>
                  <Image
                    src={LOGO}
                    width={70}
                    height={70}
                    alt="etoile-clinic-logo"
                  />
                  <Typography>
                    Based in Tehran, Iran, Etoile Clinic, is a beauty center
                    renowned for its skincare treatments and cosmetic product
                    supply.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Stack spacing={1}>
                  <Typography variant="h5">Contact</Typography>
                  <Typography component="p" variant="body2">
                    The original beatry center. Taylor Taylor London is ranked
                    alongside the best beauty centers in the country.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2}>
                  <Stack spacing={1}>
                    <Typography variant="h5">Subscribe News</Typography>
                    <NewsLetterForm />
                  </Stack>
                  <Socials />
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={{xs: 2, sm: 4}}>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography variant="caption">© 2025 Étoile Clinic</Typography>
              </Grid>
              <Grid size={{ xs: 12, sm: 4 }}>
                <Typography variant="caption">
                  Designed by{' '}
                  <a
                    href="https://www.linkedin.com/in/babaei-mostafa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mostafa Babaei
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </footer>
  )
}
