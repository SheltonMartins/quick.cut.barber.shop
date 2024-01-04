import { TextFieldContainer, TextFieldInput } from './styles'

interface TextFieldProps {
  title: string
  placeholder?: string
  value?: string
  htmlFor?: string
  // HandleOnTyping: (value: string) => void
}

export function TextField({
  title,
  placeholder,
  value,
  htmlFor,
  // HandleOnTyping,
}: TextFieldProps) {
  // function HandleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
  //   HandleOnTyping(event.target.value)
  // }

  return (
    <TextFieldContainer>
      <label htmlFor={htmlFor}>{title}</label>
      <TextFieldInput
        value={value}
        placeholder={placeholder}
        // onChange={HandleChangeValue}
      />
    </TextFieldContainer>
  )
}