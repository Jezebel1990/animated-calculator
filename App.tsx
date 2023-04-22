import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ThemeContext } from "./src/context/ThemeContext";
import { SafeAreaView, StatusBar, StyleSheet, Switch} from 'react-native';
import { useState } from 'react';
import { colors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';
import SplashScreen from './src/screens/Splash';

const Stack = createNativeStackNavigator()

export default function App() {
 
  const [theme, setTheme] = useState('light');
  return (

    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />

    <ThemeContext.Provider value={theme}>
   <SafeAreaView style={theme === 'light'? styles.container : [styles.container, {backgroundColor: 'black'}]}>
   <StatusBar style ="auto" />
     <Switch
      value={theme === 'light'}
    onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}
    />
    <Stack.Screen name="MyKeyboard" component={MyKeyboard} /> 
   </SafeAreaView>
   </ThemeContext.Provider> 
   </Stack.Navigator>
   </NavigationContainer>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

 