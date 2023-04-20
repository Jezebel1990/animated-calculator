import React from 'react';
import { ThemeContext } from "./src/context/ThemeContext";
import { SafeAreaView, StatusBar, StyleSheet, Switch} from 'react-native';
import { useState } from 'react';
import { colors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
 
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
   <SafeAreaView style={theme === 'light'? styles.container : [styles.container, {backgroundColor: 'black'}]}>
   <StatusBar style ="auto" />
     <Switch
      value={theme === 'light'}
    onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}
    />
   
    <MyKeyboard />
   </SafeAreaView>
   </ThemeContext.Provider>
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

 