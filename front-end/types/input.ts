import { IconType } from "react-icons"

export type InputType = {
  type: 'text' | 'number' | 'password',
  name: string,
  label: string,
  value: string | number | readonly string[] | undefined,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  Icon?: IconType
}

