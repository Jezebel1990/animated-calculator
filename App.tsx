import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import MyKeyboard from './src/components/MyKeyboard';
import SplashScreen from './src/screens/Splash';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MyKeyboard" component={MyKeyboard} /> 
   </Stack.Navigator>
   </NavigationContainer>
  );
  }

export default App;

