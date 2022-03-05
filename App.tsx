import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashPage } from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerBackTitleVisible: true,
            headerShown: false,
          }} name="Splash" component={SplashPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}