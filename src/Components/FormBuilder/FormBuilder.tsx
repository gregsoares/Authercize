import React, { ReactNode } from 'react'
import './styles.css'

/**
 * FormSectionProps: React.FC<FormSectionProps> = A form section component
 */

//write a formSection interface that takes an array of: {Label: ReactNode, Input: ReactNode}
interface FormSectionProps {
  Label: ReactNode
  Input: ReactNode
}

/**
 * Form: React.FC<FormProps> = A form component
 * @param formSection: FormSectionProps[] = The form sections to be displayed
 * @param onSubmit: React.FormEvent<HTMLFormElement>
 * @param onCancel: () => void = The function to be called when the form is cancelled
 */
interface FormProps {
  formSection?: FormSectionProps[]
  onSubmit?: (e: React.FormEvent) => void
  onCancel?: (e: React.FormEvent) => void
}

const Form: React.FC<FormProps> = ({ formSection, onSubmit, onCancel }) => {
  return (
    <div className='custom-form' data-testid='login-form'>
      <form>
        {formSection?.map((section, index) => (
          <div key={index} className='form-group'>
            <label className='label'>{section.Label}</label>
            {section.Input}
          </div>
        ))}

        <div data-testid='login-button' className='flex justify-end'>
          <button className='submit-button' type='submit' onClick={onSubmit}>
            Submit
          </button>
          <button
            data-testid='cancel-button'
            className='cancel-button'
            type='button'
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
