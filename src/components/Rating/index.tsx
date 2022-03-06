import { Image, Text, View } from 'react-native'
import SelectedStar from '../../assets/icons/selected_star.svg'
import UnselectedStar from '../../assets/icons/unselected_star.svg'

export const Rating = ({ rate = 2 }) => {
  const maxRating = [1, 2, 3, 4, 5]

  const renderRating = (rating: number) => rate < rating ? <UnselectedStar /> : <SelectedStar />

  return (
    <View style={{ flexDirection: 'row' }}>
      {maxRating.map(renderRating)}
    </View>
  )
}