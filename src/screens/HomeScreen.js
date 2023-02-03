import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'



const HomeScreen = () => {

  
  return (
    
      <View style = {styles.body}>
        <Text style={styles.text}>Home</Text>
      </View>
      
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FF',
    
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  }
})