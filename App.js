import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {styles.logoContainer} >
        <Logo/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',

  }
});
