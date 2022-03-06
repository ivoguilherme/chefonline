import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
  card: {
    width: (width / 2) - 15,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 4,
  },
  image: {
    width: '100%'
  },
  container: {
    padding: 6
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 6
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 11,
    color: 'hsla(0, 2%, 64%, 1)',
    marginBottom: 8
  },
  price: {
    textAlign: 'right',
    fontSize: 11,
    fontWeight: 'bold',
    color: 'hsla(0, 79%, 41%, 1)'
  }
})