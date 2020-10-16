import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Animated, { cond, eq, interpolate, set, useCode } from 'react-native-reanimated';
import Logo from './components/Logo';
import { withTimingTransition } from "react-native-redash";
import { HEIGHT, LOGIN_VIEW_HEIGHT } from './Variables';
import { Icon } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current)

  // const translateY = interpolate(scaleAnimation, {
  //   inputRange:[0,1],
  //   outputRange: [HEIGHT, HEIGHT - LOGIN_VIEW_HEIGHT]
  // })

  const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0,1],
    outputRange: [ LOGIN_VIEW_HEIGHT, 0]
  })

  useCode(()=> cond(eq(scale.current, 0), set(scale.current, 1)),[]);
  return (
    
    <ImageBackground source={require('./assets/whatsappimage.jpg')}  style={styles.backgroundImage}>
      <View style= {{ ...styles.logoContainer}}>
          <View style= {{ ...styles.logo}}>
            <Logo/>
          </View>   
          <View style= {{ ...styles.content}} >
            <Text style={styles.headerTextStyle}>Welcome back!</Text>
            <Text>Enter your registered phone number to log in</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            margin: 25,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Image 
              source={require('./assets/nigeriaflag.png')} 
              style={{ height: 54, width: 54, resizeMode: 'contain'}}
            />
            <View style={{flexDirection:'row', flex: 1}}>
              <Text style={{fontSize: 20, paddingHorizontal: 10}}>+234</Text>
              <TextInput 
                style={{ flex:1, fontSize: 20 }}
                placeholder="000 000 000"
              />
              <Icon type="FontAwesome" name="mobile" />
            </View>
            
          </View>
      </View>  

        <StatusBar style="auto" />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    top: 45,
    alignItems: "center",
    justifyContent: 'center',
  },
  content: {
    marginTop: 120,
    alignItems: "center",
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: 50
  },
});
