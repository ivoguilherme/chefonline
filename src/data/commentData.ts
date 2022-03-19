export interface Comment {
  id: string | number
  image: any
  name: string
  rating: string
}

export const commentData: Array<Comment> = [
  {
    id: 0,
    image: require('../assets/comment_1.png'),
    name: 'Maria Azevedo',
    rating:
      'Eu suuuper recomendo o BIG Donut, muito saboros e bem barato! Recomendo provarem o de morango! :)',
  },
  {
    id: 1,
    image: require('../assets/comment_1.png'),
    name: 'Maria Azevedo',
    rating:
      'Eu suuuper recomendo o BIG Donut, muito saboros e bem barato! Recomendo provarem o de morango! :)',
  },
  {
    id: 2,
    image: require('../assets/comment_1.png'),
    name: 'Maria Azevedo',
    rating:
      'Eu suuuper recomendo o BIG Donut, muito saboros e bem barato! Recomendo provarem o de morango! :)',
  },
]
