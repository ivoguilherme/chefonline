import { Image, Text, View } from 'react-native'
import { Product } from '../../data'
import Rating from '../Rating'
import styles from './styles'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} resizeMode='cover' />
      <View style={styles.container}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.subtitle}>{product.store}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Rating rate={product.rate} />
          <Text style={styles.price}>{product.price}</Text>
        </View>
      </View>
    </View>
  )
}
