import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 


import DrawerNavigator from "./DrawerNavigator";
import HomeScreen from "../screens/HomeScreen";
import VideoScreen from "../screens/VideoScreen";
import TrendingScreen from "../screens/TrendingScreen";
import OtherScreen from "../screens/OtherScreen";
import TopTabNavigator from "./TopTabNavigator";
import HotScreen from "../screens/HotScreen";
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, View, Text } from "react-native";
import { NavigationState } from 'react-navigation';
import { DrawerActions, getFocusedRouteNameFromRoute, useRoute } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation, route}) => {

  // React.useEffect(() => {
    // const routeName = getFocusedRouteNameFromRoute(route);
  //   navigation.navigate('cc', {routeName})
    // console.log(routeName);
      
  //   }, [navigation, route]);

  // const route = useRoute()
  // console.log(route.name)


  
  
  
  return (
    
    
    <BottomTab.Navigator id="bottomtab" initialRouteName="Tin Tức"
    screenOptions={({ navigation}) => ({
      
      // headerMode: 'screen',     
      // headerStyle: {
      //   backgroundColor: '#000'
      // },
      // headerTitle: 'dgdfg',

      tabBarActiveTintColor: "#006600",
      tabBarLabelStyle: {
        fontSize: 16,
      }
      
      
      
            
    })}
      
        
        
    >
      <BottomTab.Screen name="Tin Tức" component={TopTabNavigator} 
          options={({navigation, route}) => {
            // const routeName = getFocusedRouteNameFromRoute(route)
            // console.log(routeName)
            return{
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="newspaper-outline"
                  size={24}
                  color={tabInfo.focused ? "#006600" : "#8e8e93"}
                  
                />
                
              );
            }
            }
            
            // navigation.navigate('cc', {routeName})

          }}
       />
      <BottomTab.Screen name="Video" component={VideoScreen} 
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="videocam-outline"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                
              />
              
            );
          }
        }}
          />
      <BottomTab.Screen name="Xu Hướng" component={TrendingScreen} 
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="trending-up"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                
              />
              
            );
          }
        }}
        
      />
      <BottomTab.Screen name="Tiện ích" component={OtherScreen} 
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="grid-outline"
                size={24}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                
              />
              
            );
          }
        
        }}/>

    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;