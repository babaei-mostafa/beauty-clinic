'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { Formik } from 'formik'

import { bookInitialValues } from './values'
import FancyButton from '../UI/button/fancy-btn'
import NonLinearStepper from '../form/stepper'
import PersonalInfoStep from './personal-info'
import AppoinmentDetailsStep from './appoinment'
import AdditionalInformationStep from './additional-info'

// ====================|| BOOK FORM ||==================== //

export default function BookForm() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Exclusive Beauty Experience Reservation
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Formik
          initialValues={bookInitialValues}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <NonLinearStepper
                steps={[
                  {
                    title: 'Personal Information',
                    component: <PersonalInfoStep />,
                  },
                  {
                    title: 'Appoinment Preferences',
                    component: <AppoinmentDetailsStep />,
                  },
                  {
                    title: 'Client Notes',
                    component: <AdditionalInformationStep />,
                  },
                ]}
              />

              <Grid container spacing={2}></Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <FancyButton type="submit">Submit</FancyButton>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  )
}
