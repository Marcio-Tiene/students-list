import React from 'react'
import { StyledInput } from './styles'
interface IProps {
  value: string
  type?: string
  placeholder?: string
  onChange: (value) => void
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder = 'search',
}: IProps) {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
