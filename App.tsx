import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {
  LoginPage,
  ProductListPage,
  SplashPage
} from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#000' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashPage}
          />

          <Stack.Screen
            name="Login"
            component={LoginPage}
          />

          <Stack.Screen
            name="ProductList"
            component={ProductListPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}