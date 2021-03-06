import { useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../../assets/logo.svg'
import styles from './styles'

export default function SplashPage({ navigation }: any) {
  const gradientColors = ['#FF2626', '#9B0505']

  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000)
  }, [navigation])

  return (
    <LinearGradient style={styles.container} colors={gradientColors}>
      <Logo width='80%' />
    </LinearGradient>
  )
}
