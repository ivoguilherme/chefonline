import { Dimensions, StyleSheet } from 'react-native'

const containerWidth = Dimensions.get('window').width * 0.85

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 38, 38, 1)',
    width: containerWidth,
    padding: 20,
    marginRight: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },
  image: {
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
})
