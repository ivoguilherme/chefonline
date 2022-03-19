import { TextInput, TextInputProps } from 'react-native'
import styles from './styles'

export default function Input({
  style,
  placeholderTextColor = '#A6A3A3',
  ...props
}: TextInputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  )
}
