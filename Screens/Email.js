import { Icon } from 'native-base';
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function Email() {
    return (
        <ImageBackground source={require('../assets/whatsappimage.jpg')}  style={styles.backgroundImage}>
        <View style= {{ ...styles.logoContainer}}>
            <View style= {{ ...styles.logo}}>
                <Logo/>
            </View>   
            <View style= {{ ...styles.content}} >
                <Text style={styles.headerTextStyle}>Save With MyKolo</Text>
                <Text>Please sign in to continue app</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                margin: 25,
                backgroundColor:'#fff',
                justifyContent:'center',
                alignItems:'center',
                padding: 10
            }}>
                <View style={{flexDirection:'row', flex: 1}}>
                    <TextInput 
                        textContentType='emailAddress'
                        autoCompleteType='email'
                        keyboardType='email-address'
                        maxLength={20}
                        style={{ flex:1, fontSize: 20 }}
                        placeholder="Email address"
                        
                    />
                </View>
                    <Icon type="FontAwesome" name="envelope" />
                </View>  
                <View style={{
                flexDirection: 'row',
                margin: 15,
                backgroundColor:'#fff',
                justifyContent:'center',
                alignItems:'center',
                padding: 10
            }}>
                <View style={{flexDirection:'row', flex: 1}}>
                    <TextInput 
                        secureTextEntry={true}
                        textContentType='password'
                        maxLength={20}
                        style={{ flex:1, fontSize: 20 }}
                        placeholder="Password"
                    />
                </View>
                    <Icon type="FontAwesome" name="lock" />
                </View> 
                <Text style={{fontSize: 15, paddingHorizontal: 10,  alignSelf:"flex-end", color:'red', margin:20}}>Forgot password? </Text> 
            <Button text='Continue'/>
                
                <Text style={{fontSize: 15, paddingHorizontal: 10,  alignSelf:"flex-start", color:'red', margin:20}}>Register </Text> 
            
            
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
