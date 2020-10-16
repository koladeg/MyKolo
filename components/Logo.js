import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Animated from 'react-native-reanimated'

const Logo = () => {
    return (
        <Animated.View style={{ ...styles.logo}}>
            <Image source={require('../assets/mykolo.png')}/>
        </Animated.View>
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
      height: 120,
      width: 120,
      alignItems: "center",
      justifyContent:"center"
    
    },
  });
