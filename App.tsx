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
      <StatusBar backgroundColor='transparent' style='auto' />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen
            name="Splash"
            component={SplashPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ProductList"
            component={ProductListPage}
            options={{
              headerShown: false,
              headerTintColor: '#BD1616'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}