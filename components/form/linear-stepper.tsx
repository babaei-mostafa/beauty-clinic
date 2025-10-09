'use client'

import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from 'react'

import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useFormikContext } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { stepSchemas } from '@/lib/schemas/book'

export interface StepItem {
  title: string
  component: ReactNode
  isOptional?: boolean
}

interface LinearStepperProps {
  steps: StepItem[]
  activeStep: number
  setActiveStep: Dispatch<SetStateAction<number>>
  showFinishBtn?: boolean
}

// ====================|| LINEAR STEPPER ||==================== //

export default function LinearStepper({
  steps,
  activeStep,
  setActiveStep,
  showFinishBtn,
  ...props
}: LinearStepperProps) {
  const { values, validateForm, setErrors, setFieldTouched } =
    useFormikContext<any>()

  const [skipped, setSkipped] = useState(new Set<number>())

  const isStepOptional = (step: number) => {
    return steps[step]?.isOptional || false
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    const schema = stepSchemas[activeStep]
    const result = schema.safeParse(values)

    if (!result.success) {
      const errors = Object.fromEntries(
        Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [
          k,
          v?.[0],
        ])
      )
      setErrors(errors)

      // Mark all invalid fields as touched so Formik shows the messages
      Object.keys(errors).forEach((key) => {
        setFieldTouched(key, true, false)
      })

      return // stop here, don’t go to next step
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps: { completed?: boolean } = {}
          const labelProps: {
            optional?: ReactNode
          } = {}
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            )
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={step.title} {...stepProps}>
              <StepLabel {...labelProps}>{step.title}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box sx={{ mt: 2, mb: 1, py: 1 }}>{steps[activeStep].component}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {showFinishBtn ? (
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            ) : activeStep < steps.length - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : null}
          </Box>
        </Fragment>
      )}
    </Box>
  )
}
