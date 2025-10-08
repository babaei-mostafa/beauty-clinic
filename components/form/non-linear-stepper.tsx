'use client'

import { Fragment, useState, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export interface StepItem {
  title: string
  component: ReactNode
}

interface NonLinearStepperProps {
  steps: StepItem[]
}

// ===================|| NON LINEAR STEPPER ||==================== //

export default function NonLinearStepper({ steps }: NonLinearStepperProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({})

  const totalSteps = steps.length
  const completedSteps = () => Object.keys(completed).length
  const isLastStep = () => activeStep === totalSteps - 1
  const allStepsCompleted = () => completedSteps() === totalSteps

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => setActiveStep((prev) => prev - 1)
  const handleStep = (step: number) => () => setActiveStep(step)
  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true })
    handleNext()
  }
  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.title} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        {allStepsCompleted() ? (
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
            <Box sx={{ mt: 2, mb: 1, py: 1 }}>
              {steps[activeStep].component}
            </Box>
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
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: 'inline-block' }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </Fragment>
        )}
      </div>
    </Box>
  )
}
