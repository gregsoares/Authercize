import React, { ChangeEvent } from 'react'

type InputProps = {
  /**
   * placeholder: string = The placeholder text to be displayed in the input
   */
  placeholder?: string
  /**
   * text: string = The text to be displayed in the input
   */
  text?: string
  /**
   * onChange: (event: ChangeEvent<HTMLInputElement>) => void = The function to be called when the input is changed
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * size: string = The size of the text in the input
   */
  size?: string
  /**
   * type: 'email' | 'number' | 'date' | 'text' = The type of the input
   */
  type?: 'email' | 'number' | 'date' | 'text' | 'password'
}
/**
 * TextInput: React.FC<InputProps> = A text input component
 */
const TextInput: React.FC<InputProps> = ({
  placeholder,
  text,
  onChange,
  size,
  type,
}) => {
  size = size || '1rem'

  return (
    <input
      className='text-input'
      type={type}
      value={text}
      onChange={onChange}
      style={{ fontSize: size }}
      placeholder={placeholder}
    />
  )
}

export default TextInput
