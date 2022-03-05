import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../assets/logo.svg';

export const SplashPage = ({ navigation }: any) => {
  const gradientColors = ['#FF2626', '#9B0505']

  useEffect(() => {
    setTimeout(() => navigation.navigate('Login'), 2000)
  }, [])

  return (
    <LinearGradient
      style={styles.container}
      colors={gradientColors}
    >
      <Logo width='80%' />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})