import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Switch, View } from 'react-native';
import { colors } from '../styles/Colors';
import LottieView from 'lottie-react-native';
import ideaJson from '../../assets/idea.json';


const size = Dimensions.get('window').width * 0.5

const Theme = () => {
    const [theme, setTheme] = React.useState('light');

return (
    
    <ThemeContext.Provider value={theme}>
    <StatusBar style ="auto" />
    <SafeAreaView style={theme === 'light'? styles.container : [styles.container, {backgroundColor: 'black'}]} >
  
    <View style={styles.container}>
    <Switch
       value={theme === 'light'}
     onValueChange={() => setTheme(theme === 'light'? 'dark': 'light')}/>
        <LottieView  source={ideaJson} style=
        {{width:size, height:size }}
        autoPlay loop resizeMode='contain' />
     </View>
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