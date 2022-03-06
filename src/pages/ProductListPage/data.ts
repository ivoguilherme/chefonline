import { ImageSourcePropType } from "react-native"

export type Product = {
  id: string,
  name: string
  store: string
  image: ImageSourcePropType
  price: string
}


export const productData: Array<Product> = [
  {
    id: '0',
    name: 'Pizza de Frango',
    store: 'Le Pizza',
    image: require('../../assets/product_1.png'),
    price: 'R$ 35,00'
  },
  {
    id: '1',
    name: 'Sushi Tradicional',
    store: 'Japan Food',
    image: require('../../assets/product_2.png'),
    price: 'R$ 46,00'
  },
  {
    id: '2',
    name: 'Big Burguer',
    store: 'Hambúrguer Cia',
    image: require('../../assets/product_3.png'),
    price: 'R$ 31,00'
  },
  {
    id: '3',
    name: 'Batata Frita Média',
    store: 'Good Fries',
    image: require('../../assets/product_4.png'),
    price: 'R$ 19,00'
  },
  {
    id: '4',
    name: 'Milk Shake',
    store: 'Sorveteria Liza',
    image: require('../../assets/product_5.png'),
    price: 'R$ 12,00'
  },
  {
    id: '5',
    name: 'Big Donut',
    store: 'Baby Donut',
    image: require('../../assets/product_6.png'),
    price: 'R$ 16,00'
  },
]