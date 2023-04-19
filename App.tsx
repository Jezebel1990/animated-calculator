
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { ThemeContext } from "./src/context/ThemeContext";
import { StyleSheet, Switch, View } from 'react-native';
import { useState } from 'react';
import { colors } from './src/styles/Colors';
import Button from './src/components/Button';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
   <View style={theme === 'light'? styles.container : [styles.container, {backgroundColor: 'black'}]}>
   <StatusBar style="auto" />
   <Switch
    value={theme === 'light'}
    onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}
    />
    <Button isBlue title='1' onPress={() =>       {alert('hello')} } />
   </View>
   </ThemeContext.Provider>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 