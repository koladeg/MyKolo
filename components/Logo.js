import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Animated from 'react-native-reanimated'

const Logo = () => {
    return (
        <Animated.View>
            <Image source={require('../assets/mykolo.png')}/>
        </Animated.View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
  });
