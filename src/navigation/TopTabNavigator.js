import { StyleSheet, Animated, View, TouchableOpacity, Dimensions, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { createMaterialTopTabNavigator, } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import FollowScreen from '../screens/FollowScreen';
import HotScreen from '../screens/HotScreen';
import NewScreen from '../screens/GeneralScreen';
import SportVNScreen from '../screens/SportVNScreen';
import LawScreen from '../screens/LawScreen';
import FinanceScreen from '../screens/FinanceScreen';
import CulinaryScreen from '../screens/CulinaryScreen';
import HealthScreen from '../screens/HealthScreen';
import { getFocusedRouteNameFromRoute, NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import CustomTabBar from '../components/CustomTabBar';
import StackNavigator from './StackNavigator';
import GeneralScreen from '../screens/GeneralScreen';
import CarScreen from '../screens/CarScreen';
import TravelScreen from '../screens/TravelScreen';
import RealEstateScreen from '../screens/RealEstateScreen';
import EducationScreen from '../screens/EducationScreen';
import useNews from '../hooks/useNews';
import StoreContext from '../context/StoreContext'
import { TabView, TabBar } from 'react-native-tab-view';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { Route1,Route2,Route3,Route4,Route5,Route6,Route7,Route8 } from '../components/CustomTabBar'


const Tab = createMaterialTopTabNavigator()


const TopTabNavigator = ({navigation, route}) => {
  // const routename = getFocusedRouteNameFromRoute(route);

  // const [
  //   lawNews,
  //   healthNews, 
  //   sportVnNews, 
  //   culinaryNews, 
  //   financeNews, 
  //   carNews, 
  //   travelNews,
  //   realEstateNews,
  //   educationNews] = useNews(routename);



  
    // console.log(routename);

  // tabBar={props => <CustomTabBar {...props} />}

  return (
    
    <Tab.Navigator  
    style={{     
      
    }}
    screenOptions={{
      
      tabBarScrollEnabled: true,
      tabBarLabelStyle: { 
        fontSize: 14, 
      },
      tabBarItemStyle: {  

      },
      tabBarStyle: { 
        backgroundColor: '#aa3',
        width: 'auto',
        marginBottom: 10,
        
        
      },
      tabBarContentContainerStyle:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
        

      },
      tabBarIndicatorContainerStyle: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        
        
        alignContent: 'space-between',
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#000',

        
      },
      tabBarInactiveTintColor: '#fff',
      tabBarActiveTintColor: 'yellow',
    
    }}
    
    >
      {/* <Tab.Screen name='follow' component={FollowScreen} 
        options={{

        }}
      /> */}
      <Tab.Screen name='hot' component={HotScreen}/>
      {/* <Tab.Screen name='general' component={GeneralScreen}/> */}
      <Tab.Screen name='Bóng đá Việt Nam' component={SportVNScreen} 
        options = {() => {
            
          
        }}
      />
      <Tab.Screen name='Kinh tế' component={FinanceScreen}/>
      <Tab.Screen name='Pháp luật' component={LawScreen}/>
      <Tab.Screen name='Nhà đất' component={RealEstateScreen}/>
      <Tab.Screen name='Sức khoẻ' component={HealthScreen}/>
      <Tab.Screen name='Ẩm thực' component={CulinaryScreen}/>
      <Tab.Screen name='Du lịch' component={TravelScreen}/>
      <Tab.Screen name='Xe cộ' component={CarScreen}/>
      <Tab.Screen name='Giáo dục' component={EducationScreen}/>
      
    </Tab.Navigator>
    

    
    
   
  )
}

export default TopTabNavigator

const styles = StyleSheet.create({
  
})