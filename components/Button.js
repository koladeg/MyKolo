import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttontext}>{text}</Text>
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width:300,
        backgroundColor: 'black',
        borderRadius: 10,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center'
    },
    buttontext: {
        alignSelf: 'center',
        color: "#fff",
        fontSize: 15,
        fontWeight: '600',

    }
})
