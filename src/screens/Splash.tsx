import React, { useEffect } from 'react';
import {Dimensions, StyleSheet ,View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import calculatorJson from '../../assets/calculator.json';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { colors } from '../styles/Colors';

export interface SplashScreenProps {
    
}


const size = Dimensions.get('window').width * 0.6
const SplashScreen = () => {
    
const navigation = useNavigation()
useEffect(() => {
    setTimeout(() => {
        navigation.dispatch(CommonActions.reset({
            index: 0,
          routes: [{name: 'MyKeyboard'}]
        }))
          
    }, 4000 );

}, []);

    return (
        <View style={styles.container}>
            <LottieView source={calculatorJson} style={{width:size, height:size}}
            autoPlay loop resizeMode='contain' />
            <Text style={styles.text}>VAMOS CALCULAR?</Text>
        </View>
    )
    
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
        },
        text: {
            fontSize: 24,
            fontWeight: 'bold',
            color: "#46D5B2", 
        },

    })
export default SplashScreen



