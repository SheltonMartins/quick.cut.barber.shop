import { TextFieldContainer, TextFieldInput } from './styles'

interface TextFieldProps {
  title: string
  placeholder?: string
  value?: string
  HandleOnTyping: (value: string) => void
}

export function TextField({
  title,
  placeholder,
  value,
  HandleOnTyping,
}: TextFieldProps) {
  function HandleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
    HandleOnTyping(event.target.value)
  }

  return (
    <TextFieldContainer>
      <h3>{title}</h3>
      <TextFieldInput
        value={value}
        placeholder={placeholder}
        onChange={HandleChangeValue}
      />
    </TextFieldContainer>
  )
}