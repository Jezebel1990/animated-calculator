
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { ThemeContext } from "./src/context/ThemeContext";
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
   <View style={styles.container}>
   <Text>Calculadora</Text>
   <StatusBar style="auto" />
   <Switch
    value={theme === 'light'}
    onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}
    />
   </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 