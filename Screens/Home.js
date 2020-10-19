import { Icon } from 'native-base';
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function Home({ navigation }) {
    return (
        <ImageBackground source={require('../assets/whatsappimage.jpg')}  style={styles.backgroundImage}>
      <View style= {{ ...styles.logoContainer}}>
          <View style= {{ ...styles.logo}}>
            <Logo/>
          </View>   
          <View style= {{ ...styles.content}} >
            <Text style={styles.headerTextStyle}>Welcome back!</Text>
            <Text>Enter your registered phone number to log in please</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            margin: 25,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Image 
              source={require('../assets/nigeriaflag.png')} 
              style={{ height: 54, width: 54, resizeMode: 'contain'}}
            />
            <View style={{flexDirection:'row', flex: 1}}>
              <Text style={{fontSize: 20, paddingHorizontal: 10}}>+234</Text>
              <TextInput
                textContentType='telephoneNumber'
                dataDetectorTypes='phoneNumber'
                keyboardType='phone-pad'
                maxLength={10}
                style={{ flex:1, fontSize: 20 }}
                placeholder="000 000 000"
              />
              <Icon type="FontAwesome" name="mobile" />
            </View>  
          </View>
          <Button text='Sign up' onPress={() => navigation.push("Email")}/>
          
            <Text style={{fontSize: 15, paddingHorizontal: 10,  alignSelf:"flex-start", color:'red', margin:20}}>Help?</Text> 
          
           
      </View> 
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
