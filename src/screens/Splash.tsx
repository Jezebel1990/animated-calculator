import React from 'react'
import {StyleSheet ,View, Text } from 'react-native'

export interface SplashScreenProps {

}
const SplashScreen = () => {
    return (
        <View>
<Text>SplashScreen</Text>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
    })
export default SplashScreen