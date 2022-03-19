import { Image, StyleProp, Text, View, ViewStyle } from 'react-native'
import styles from './styles'

interface CommentProps {
  image: any
  name: string
  rating: string
  containerStyle?: StyleProp<ViewStyle>
}

export default function Comment({
  image,
  name,
  rating,
  containerStyle,
}: CommentProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{`${name} recomenda:`}</Text>
        <Text style={styles.text}>{rating}</Text>
      </View>
    </View>
  )
}
