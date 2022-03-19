import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    position: 'absolute',
    backgroundColor: 'red',
  },
  input: {
    backgroundColor: '#fff',
    height: 45,
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  createAccount: {
    width: 268,
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#BD1616',
    borderRadius: 7,
    marginTop: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default styles
