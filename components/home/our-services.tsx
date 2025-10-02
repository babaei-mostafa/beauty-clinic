import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import OUR_SERVICES_IMG from '@/public/assets/images/home/our-services.jpg'
import FancyImg from '@/components/UI/fancy-img'
import { useTheme } from '@mui/material'

const ourServicesData = [
  { id: '1', part_one: 'Complimentary consultation', part_two: 'included.' },
  {
    id: '2',
    part_one: 'Quick visites.',
    part_two: 'treatment in under 20 minutes.',
  },
  { id: '3', part_one: 'Transparent pricing.', part_two: 'no hidden fees.' },
  {
    id: '4',
    part_one: 'Visible results.',
    part_two: 'Trailored to your needs.',
  },
  { id: '5', part_one: 'Professional care.', part_two: 'honesty guarenteed.' },
]

// ====================|| OUR SERVICES COMPONENT ||==================== //

export default function OurServices() {
  const theme = useTheme()
  return (
    <Grid container spacing={10} sx={{ py: 8 }}>
      <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: 'center' }}>
        <Typography component="h3" variant="h1">
          We Offer
        </Typography>
        <List
          sx={{
            display: 'inline-block',
            width: 'max-content',
            textAlign: 'center',
          }}
        >
          {ourServicesData.map((service) => (
            <ListItem
              key={`our-service-${service.id}`}
              divider
              sx={{
                paddingLeft: 0,
                display: 'block',
              }}
            >
              <Typography component="p" variant="h4">
                {service.part_one}{' '}
                <Typography
                  component="span"
                  variant="h4"
                  sx={{ color: theme.palette.text.primary, fontWeight: 300 }}
                >
                  {service.part_two}
                </Typography>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <FancyImg src={OUR_SERVICES_IMG.src} alt="etoile beauty clinic" />
      </Grid>
    </Grid>
  )
}
