import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Email from './Screens/Email';
import Home from './Screens/Home';


const AuthStack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Home" component={Home} />
        <AuthStack.Screen name="Email" component={Email} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  
});
