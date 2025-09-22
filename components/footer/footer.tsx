"use client"

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material'

// ====================|| FOOTER ||==================== //

export default function Footer() {
    const theme = useTheme()
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        mx: 2,
        py: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <TextField />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={1}>
              <Typography variant="h5">About</Typography>
              <Typography component="p" variant="body2">
                The original beatry center. Taylor Taylor London is ranked
                alongside the best beauty centers in the country.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={1}>
              <Typography variant="h5">About</Typography>
              <Typography component="p" variant="body2">
                The original beatry center. Taylor Taylor London is ranked
                alongside the best beauty centers in the country.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
