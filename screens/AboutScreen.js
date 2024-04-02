import { StyleSheet, Button, Text } from 'react-native'
import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <Text>AwesomeToDoListApp</Text>
      <Text>Made By Jonathan Deleff</Text>
      <Text>March 31st 2024</Text>
      <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
    </MainLayout>
  )
}

const styles = StyleSheet.create({})