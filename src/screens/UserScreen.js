import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext, AuthProvider} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserScreen = ({route, navigation}) => {
  const {userInfo, isLoggedIn, logout} = useContext(AuthContext);
  // const userInfo = route.params;
  
  console.log(userInfo)


  useEffect(() => {

    // isLoggedIn();
    // LoggedIn()
    // LogOut()
    

  }, []);

  const LoggedIn = () => {

    if(userInfo?.username){
    return(
      <TouchableOpacity 
        style={{flexDirection: 'row', alignItems: 'center'}}
        
        >
        <Ionicons 
          size={35} 
          // color="white" 
          name="person-circle" 
          
          />
        <Text style={{fontSize: 30, left: 10}}>Xin chào, {userInfo.username}</Text>
      </TouchableOpacity>
    )
    }else{
      return(
      <TouchableOpacity 
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => {
          navigation.navigate('login')
        }}
        >
        <Ionicons 
          size={35} 
          // color="white" 
          name="person-circle" 
          
          />
        <Text style={{fontSize: 30, left: 10}}>Đăng nhập</Text>
      </TouchableOpacity>
      )
    }
  }

  const LogOut = () => {

    if(userInfo?.username){
    return(
      <View style={styles.khung}>
          <TouchableOpacity 
            style={styles.btnkhunglogout}
            onPress={() => {
              logout()
            }}
            >
            <Text style={styles.txtlogout} >Đăng xuất</Text>
          </TouchableOpacity>
          
        </View>
    )
    }else{
      return(
      <>
      </>
      )
    }
  }

  const savedNews = () => {
    if(userInfo?.username){
      navigation.navigate('savenews')
    }else{
      navigation.navigate('login')
    }
  }

  
  return (
    <ScrollView style={styles.container} 
    > 
      <View style={styles.body}>
        <LoggedIn/>
        <View style={styles.banner}>
          <TouchableOpacity style={styles.button}>
            
            <Ionicons
                size={30} 
                // color="white" 
                name="bookmark" 
                
                >
            </Ionicons>
            <Text style={styles.txtbut}>Đã lưu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.khung}>
          <Text style={{fontSize: 20, marginLeft: 5}}>Tiện ích</Text>
          <TouchableOpacity style={styles.btnkhung}>
            <Ionicons
                  size={25} 
                  // color="white" 
                  name="calendar-sharp" 
                  
                  >
              </Ionicons>
              <Text style={styles.txtbutkhung}>Lịch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnkhung}>
              <Ionicons
                  size={25} 
                  // color="white" 
                  name="funnel-outline" 
                  
                  >
              </Ionicons>
              <Text style={styles.txtbutkhung}>Kết quả xổ số</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnkhung}>
              <Ionicons
                  size={25} 
                  // color="white" 
                  name="rainy-outline" 
                  
                  >
              </Ionicons>
              <Text style={styles.txtbutkhung}>Thời tiết</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnkhung}>
              <Ionicons
                  size={25} 
                  // color="white" 
                  name="podium-outline" 
                  
                  >
              </Ionicons>
              <Text style={styles.txtbutkhung}>Giá vàng</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.khung}>
          <Text style={{fontSize: 20, marginLeft: 5}}>Sản phẩm</Text>

          <TouchableOpacity style={styles.btnkhung}>
              <Text style={styles.txtbutkhung}>Liên hệ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnkhung}>
                <Text style={styles.txtbutkhung}>Điều khoản sử dụng</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnkhung}>
              <Text style={styles.txtbutkhung}>Đánh giá cho FastNews</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnkhung}>
              <Text style={styles.txtbutkhung}>Email góp ý, báo lỗi</Text>
          </TouchableOpacity>

        </View>

        <LogOut/>

      </View>
        
    </ScrollView>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  body: {
    
  },
  banner: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5
    
  },
  txtbut: {
    fontSize: 20,
    marginLeft: 10

  },
  khung: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: 5
    
  },
  btnkhung: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  txtbutkhung: {
    fontSize: 24,
    marginLeft: 20
  },
  btnkhunglogout: {

  },
  txtlogout: {
    fontSize: 25,
    marginLeft: 5
  }

  
})