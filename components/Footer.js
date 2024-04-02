import { StyleSheet, Linking, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/JonathanDeleff')}>
            <Text style={styles.text}>My Github</Text>
        </TouchableOpacity>    
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'purple',
        borderRadius: 5,
        marginTop: 10,   },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})