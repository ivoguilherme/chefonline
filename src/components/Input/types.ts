import { TextInputProps } from 'react-native'

export type InputProps = Pick<
  TextInputProps,
  | 'placeholder'
  | 'style'
  | 'placeholderTextColor'
  | 'textContentType'
  | 'keyboardType'
  | 'autoCompleteType'
>
