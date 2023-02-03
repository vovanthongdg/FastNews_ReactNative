import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    
    <DrawerContentScrollView {...props}

    >
      <DrawerItem
        label="Theo Dõi"
        onPress={() => props.navigation.navigate('Theo Dõi')}
      />
      <DrawerItem
        label="Nóng"
        onPress={() => props.navigation.navigate('Nóng')}
      />
      <DrawerItem
        label="Mới"
        onPress={() => props.navigation.navigate('Mới')}
      />
      <DrawerItem
        label="Bóng đá VN"
        onPress={() => props.navigation.navigate('Bóng đá VN')}
      />
      <DrawerItem
        label="Pháp Luật"
        onPress={() => props.navigation.navigate('Pháp luật')}
      />
      <DrawerItem
        label="Tài Chính"
        onPress={() => props.navigation.navigate('Tài chính')}
      />
      <DrawerItem
        label="Ẩm Thực"
        onPress={() => props.navigation.navigate('Ẩm thực')}
      />
      <DrawerItem
        label="Sức Khoẻ"
        onPress={() => props.navigation.navigate('Sức khoẻ')}
      />

      
    
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})