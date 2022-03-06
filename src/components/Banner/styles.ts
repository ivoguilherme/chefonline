import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    borderRadius: 6
  },
  shadowImage: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  textContainer: {},
  textBold: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#fff'
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#fff'
  },
  button: {
    width: 78,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(189, 22, 22, 1)'
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff'
  }
})