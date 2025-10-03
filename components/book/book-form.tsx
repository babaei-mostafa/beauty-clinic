'use client'

import { Formik } from 'formik'
import { bookInitialValues } from './values'
import CustomTextField from '../form/custom-tesxtfield'
import FancyButton from '../UI/button/fancy-btn'

// ====================|| BOOK FORM ||==================== //

export default function BookForm() {
  return (
    <Formik
      initialValues={bookInitialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <CustomTextField
            name="first_name"
            label="First Name"
            placeholder="Enter your first name"
          />
          <FancyButton type="submit">Submit</FancyButton>
        </form>
      )}
    </Formik>
  )
}
