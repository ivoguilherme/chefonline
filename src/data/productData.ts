import { ImageSourcePropType } from "react-native"

export interface Product {
  id: string,
  name: string
  store: string
  image: ImageSourcePropType
  price: string
  rate: 0 | 1 | 2 | 3 | 4 | 5
}


export const productData: Array<Product> = [
  {
    id: '0',
    name: 'Pizza de Frango',
    store: 'Le Pizza',
    image: require('../assets/product_1.png'),
    price: 'R$ 35,00',
    rate: 1
  },
  {
    id: '1',
    name: 'Sushi Tradicional',
    store: 'Japan Food',
    image: require('../assets/product_2.png'),
    price: 'R$ 46,00',
    rate: 3
  },
  {
    id: '2',
    name: 'Big Burguer',
    store: 'Hambúrguer Cia',
    image: require('../assets/product_3.png'),
    price: 'R$ 31,00',
    rate: 4
  },
  {
    id: '3',
    name: 'Batata Frita Média',
    store: 'Good Fries',
    image: require('../assets/product_4.png'),
    price: 'R$ 19,00',
    rate: 2
  },
  {
    id: '4',
    name: 'Milk Shake',
    store: 'Sorveteria Liza',
    image: require('../assets/product_5.png'),
    price: 'R$ 12,00',
    rate: 0
  },
  {
    id: '5',
    name: 'Big Donut',
    store: 'Baby Donut',
    image: require('../assets/product_6.png'),
    price: 'R$ 16,00',
    rate: 5
  },
]