import React from 'react';
import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Switch, View } from 'react-native';
import { colors } from '../styles/Colors';
import LottieView from 'lottie-react-native';
import ideaJson from '../../assets/idea.json';


const size = Dimensions.get('window').width * 0.5

const Theme = () => {
    const [theme, setTheme] = useState('light');

return (
    <View style={styles.container}>
    <ThemeContext.Provider value={theme}>
    <StatusBar style ="auto" />
    <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: '#071126'}]} >
    <Switch
       value={theme === 'dark'}
     onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}/>
      <LottieView  source={ideaJson} style={{width:size, height:size }}
        autoPlay loop resizeMode='contain' /> 
  </SafeAreaView>
     </ThemeContext.Provider>
     </View>
);
 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colors.light,
    }
    
});
export default Theme