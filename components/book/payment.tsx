'use client'

import Grid from '@mui/material/Grid'

import CustomSelect from '@/components/form/custom-select'
import CustomCheckbox from '@/components/form/custom-checkbox'
import { useState } from 'react'
import Modal from '../UI/modal/Modal'

// ====================|| PAYMENT STEP ||==================== //

export default function PaymentStep() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <CustomSelect
            name="payment_method"
            hasEmptyStringOption
            label="Payment Method"
            options={[
              { label: 'Pay at Center', value: 'center' },
              { label: 'Online Payment', value: 'online' },
              { label: 'Gift Card', value: 'gift' },
            ]}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CustomCheckbox
            name="terms"
            label={
              <div>
                I agree to the{' '}
                <span
                  className="italic hover:underline"
                  onClick={() => {
                    setIsModalOpen(true)
                  }}
                >
                  Terms and Conditions
                </span>
              </div>
            }
          />
        </Grid>
      </Grid>
      <Modal
        body={<>Terms and Conditions</>}
        open={isModalOpen}
        setOpen={setIsModalOpen}
        noButtons
      />
    </>
  )
}
