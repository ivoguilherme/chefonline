import { Image, Text, View } from 'react-native'
import SelectedStar from '../../assets/icons/selected_star.svg'
import UnselectedStar from '../../assets/icons/unselected_star.svg'

type RatingProps = {
  rate: number
}

export const Rating = ({ rate }: RatingProps) => {
  const maxRating = [1, 2, 3, 4, 5]

  const renderRating = (rating: number) => (
    rate < rating ? <UnselectedStar key={rating} /> : <SelectedStar key={rating} />
  )

  return (
    <View style={{ flexDirection: 'row' }}>
      {maxRating.map(renderRating)}
    </View>
  )
}