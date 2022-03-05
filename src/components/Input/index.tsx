import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

export const Input = ({ style, placeholderTextColor = "#A6A3A3", ...props }: TextInputProps) => (
  <TextInput
    style={[styles.input, style]}
    placeholderTextColor={placeholderTextColor}
    {...props}
  />
)
