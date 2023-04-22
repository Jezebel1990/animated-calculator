import React from 'react';
import {StyleSheet ,View } from 'react-native';
import LottieView from 'lottie-react-native';
import { colors } from '../styles/Colors';
import calculatorJson from '../../assets/calculator.json';

export interface SplashScreenProps {

}
const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <LottieView source={calculatorJson} autoPlay loop resizeMode='contain' />
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.light,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
    })
export default SplashScreen