import { Image, Text, View, Dimensions } from "react-native"
import { Product } from "../../pages/ProductListPage/data"

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const width = Dimensions.get('window').width

  return (
    <View style={{ width: (width / 2) - 15, marginBottom: 15, overflow: 'hidden', backgroundColor: '#fff', borderRadius: 5 }}>
      <Image source={product.image} style={{ width: '100%' }} />
      <View style={{ padding: 6 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 6 }}>{product.name}</Text>
        <Text style={{ fontWeight: '400', fontSize: 11, color: 'hsla(0, 2%, 64%, 1)', marginBottom: 8 }}>{product.store}</Text>
        <Text style={{ textAlign: 'right', fontSize: 11, fontWeight: 'bold', color: 'hsla(0, 79%, 41%, 1)' }}>{product.price}</Text>
      </View>
    </View>
  )
}