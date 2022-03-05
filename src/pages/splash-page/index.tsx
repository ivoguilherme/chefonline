import { StyleSheet, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/logo.svg';

const SplashPage = () => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={['#FF2626', '#9B0505']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.splashContainer}>
        <Logo height="10%" />
      </View>
    </LinearGradient>
  )
}

export default SplashPage

const styles = StyleSheet.create({
  splashContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradient: {
    width: '100%',
    height: '100%',
  }
})