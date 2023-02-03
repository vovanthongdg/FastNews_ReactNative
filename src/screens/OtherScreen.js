import { Image, ScrollView, StyleSheet, Text, Touchable, View } from 'react-native'
import React, {useState} from 'react'
import xoso from '../assets/img/xoso.png'
import giavang from '../assets/img/giavang.png'
import thoitiet from '../assets/img/thoitiet.png'
import lich from '../assets/img/lich.jpg'
import {windowWidth, windowHeight} from '../utils/Dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'


const OtherScreen = ({navigation}) => {


  
  return (
    <ScrollView style={styles.container}>
      <View style = {styles.body}>
        <Text style={styles.text}>Xổ Số</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('web', {url : "https://xoso.com.vn/"})}
        >
          {/* <View style={styles.containImage}> */}
          <Image 
            source={xoso} 
            style={styles.image}
            resizeMode="stretch"
          
          />
          {/* </View> */}
        </TouchableOpacity>
        

        <Text style={styles.text}>Thời Tiết</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('web', {url : "https://nchmf.gov.vn/Kttvsite/vi-VN/1/da-nang-w55.html"})}
        >
            
          <Image 
            source={thoitiet} 
            style={styles.image}
            resizeMode="stretch"
          
          />
        </TouchableOpacity>

        <Text style={styles.text}>Lịch</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('web', {url : "https://ngaydep.com/lich-van-nien.html"})}
        >
        
          <Image 
            source={lich} 
            style={styles.image}
            resizeMode="stretch"
          
          />
        </TouchableOpacity>

        <Text style={styles.text}>Giá Vàng</Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('web', {url : "https://www.pnj.com.vn/blog/gia-vang/"})}
        >
        
          <Image 
            source={giavang} 
            style={styles.image}
            // resizeMode="stretch"
          
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  )
}

export default OtherScreen

const styles = StyleSheet.create({
  body: {
    flex: 1, 
    backgroundColor: '#fff',
    
    
  },
  text: {
    
    color: '#000',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: '500',
  },
  image: {
    width: '95%',
    height: windowWidth/2,
    // resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    
    
  },
  container: {
    
  }
})