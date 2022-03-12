import { Dimensions, Image, StyleProp, Text, View, ViewStyle } from "react-native"
import { styles } from "./styles"

interface CommentProps {
  image: any
  name: string
  rating: string
  containerStyle?: StyleProp<ViewStyle>
}

export const Comment: React.FC<CommentProps> = ({ image, name, rating, containerStyle }) => {
  const width = Dimensions.get('window').width * 0.8

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