import { Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type BannerProps = {
  image: ImageSourcePropType
}

export const Banner = ({
  image
}: BannerProps) => {
  return (
    <View style={{ position: 'relative' }}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.shadowImage} />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>
            Maior, melhor e muito
            <Text style={{ color: 'rgba(255, 38, 38, 1)' }}>
              {' saboroso!'}
            </Text>
          </Text>
          <Text style={styles.text}>Big Chicken Burguer</Text>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={.8}>
          <Text style={styles.buttonText}>Eu quero!</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}