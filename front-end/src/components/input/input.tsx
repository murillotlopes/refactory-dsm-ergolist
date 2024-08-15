import { useState } from 'react'

import { InputType } from '../../../types/input'
import styles from './input.module.css'


export const Input = ({ type, name, label, placeholder, value, handleOnChange, Icon }: InputType) => {

  const [isFocused, setIsFocused] = useState(false)
  const [hasText, setHasText] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIsFocused(false);
      setHasText(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setHasText(true)
    } else {
      setHasText(false);
    }
    handleOnChange(e)
  }

  return (
    <div className={styles.inputContainer} >
      {Icon && (<Icon className={styles.icon} />)}
      <label
        className={`${styles.label} ${isFocused || hasText ? styles.labelFocused : ''}`}
        htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} placeholder={!hasText && isFocused ? placeholder : undefined} className={styles.input} onFocus={handleFocus} onBlur={(e) => handleBlur(e)} onChange={(e) => handleChange(e)} value={value} />
    </div>
  )
}