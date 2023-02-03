import React, { useLayoutEffect } from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";


import BottomTabNavigator from "./BottomTabNavigator";
import CustomTabBar from "../components/CustomTabBar";
import Categories from "../components/Categories";
import CustomHeader from "../components/CustomHeader";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute, useNavigation, useRoute } from "@react-navigation/native";
import {DrawerActions} from '@react-navigation/native';
import DrawerNavigator from "./DrawerNavigator";
import SearchScreen from "../screens/SearchScreen";
import UserScreen from "../screens/UserScreen";
import NewsDetail from "../screens/NewsDetail";
import SplashScreen from "../screens/SplashScreen";
import WebScreen from "../screens/WebScreen";
import ActionSheetBottom from '../components/Sheet/ActionSheetBottom';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import '../components/Sheet/Sheet';
import LoginScreen from "../screens/LoginScreen";
import { AuthProvider } from "../context/AuthContext";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();



const StackNavigator = () => {
  
  

 

  return (
    <AuthProvider>
    <Stack.Navigator id="stack" 
      initialRouteName="splash"
    
      screenOptions={({ navigation }) => ({
        headerShown: true,
        // headerMode: 'screen',
        // // header = {(props) => <CustomTabBar {...props} />}
        
        
        // headerStyle: {
        //   backgroundColor: '#54700b',

          
          
        // },
        
        // headerLeft: () => (
        //   <View>
        //     <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        //       <Ionicons 
        //         size={25} 
        //         // color="white" 
        //         name="md-list" 
                
        //         />
        //     </TouchableOpacity>
        //   </View>
          
        // ),
        
        // headerTitle:'gdfklg',
        
              
      })}
   
    >
      <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}}/>
      <Stack.Screen name="stack" component={DrawerNavigator} 
        options={({route}) => {
          // const routeName = getFocusedRouteNameFromRoute(route);
          // const routeName = route.name;
          // console.log(routeName);
          return {
            headerShown: false
            // headerShown: routeName == 'Tin Tức',
          };
       }}
      />



      
      
      {/* <Stack.Screen name="NewsDetail" component={NewsDetail}/>
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="user" component={UserScreen} /> */}

      <Stack.Screen name="search" component={SearchScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        headerShown: false,
        // headerTitle: () => null,
        // headerLeft: () => (
        //   <SearchBar />
        // ),
        // headerRight: () => null,
        // headerLeft: () => (
        //   <View style={styles.containerinput}>
        //     <TextInput
        //       placeholder='Tìm kiếm...'
        //       style={styles.input}
              
        //     />
        //     <View style={styles.close}>
        //     <TouchableOpacity onPress={() => navigation.goBack()}>
        //       <Text>Đóng</Text>
        //     </TouchableOpacity>
        //   </View>
        //   </View>
          
        // ),
      })}
    />
    <Stack.Screen name="NewsDetail" component={NewsDetail} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                size={25} 
                // color="white" 
                name="chevron-back" 
                
                />
            </TouchableOpacity>
          </View>
        ),
        headerTitle: () => null,
        headerRight: () => (
          <View style={{right: 5}}>
            <SheetProvider>
            <TouchableOpacity onPress={() => {
              SheetManager.show('sheet-bottom');
            }}>
              <Ionicons 
                size={25} 
                // color="white" 
                name="options-sharp" 
                
                />
            </TouchableOpacity>
            </SheetProvider>
            
          </View>
        ),
        
      })}
    />
    <Stack.Screen name="user" component={UserScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="chevron-back" 
                
                />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => null,
        headerTitle: () => null,
      })
    }
    />
    <Stack.Screen name="web" component={WebScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="chevron-back" 
                
                />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => null,
        headerTitle: () => null,
      })
    }
    />

    <Stack.Screen name="login" component={LoginScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="chevron-back" 
                
                />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => null,
        headerTitle: () => null,
      })
    }
    />
    <Stack.Screen name="register" component={RegisterScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="chevron-back" 
                
                />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => null,
        headerTitle: () => null,
      })
    }
    />
      
    </Stack.Navigator>
    </AuthProvider>
  );
}

export default StackNavigator;