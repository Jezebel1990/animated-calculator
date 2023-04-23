import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SafeAreaView, StatusBar, StyleSheet, Switch } from 'react-native';
import { colors } from '../styles/Colors';



const Theme = () => {
    const [theme, setTheme] = React.useState('light');

return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light'? styles.container : [styles.container, {backgroundColor: 'black'}]}>
    <StatusBar style ="auto" /> 
      <Switch
       value={theme === 'light'}
     onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}
     />
  </SafeAreaView>
     </ThemeContext.Provider>
);
 
}
const styles = StyleSheet.create({
    container: {
   alignItems: 'center',
   width: '100%',
   height: '100%',
   backgroundColor: colors.light,
   
      
    }
});
export default Theme