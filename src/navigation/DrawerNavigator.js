import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'


import FollowScreen from '../screens/FollowScreen';
import HotScreen from '../screens/HotScreen';
import HomeScreen from '../screens/HomeScreen';
import NewScreen from '../screens/GeneralScreen';
import TopTabNavigator from './TopTabNavigator';
import CustomDrawer from '../components/CustomDrawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomHeader from '../components/CustomHeader';
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';
import { Swipeable } from 'react-native-gesture-handler';
import SearchScreen from '../screens/SearchScreen';
import StackNavigator from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsDetail from '../screens/NewsDetail';
import UserScreen from '../screens/UserScreen';
import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import SearchBar from '../components/SearchBar';
import ActionSheetBottom from '../components/Sheet/ActionSheetBottom';
import {SheetManager, SheetProvider} from 'react-native-actions-sheet';
import '../components/Sheet/Sheet';
import WebScreen from '../screens/WebScreen';


const windowWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {

  
  
  // const route = useRoute();
  // console.log(route.name);
  
    // const routeName = getFocusedRouteNameFromRoute(route);
    // navigation.navigate('cc', {routeName})
    // console.log(routeName);
      
    // };
    
  
  return (
    
    <Drawer.Navigator id='draw' backBehavior='history'
     drawerContent={(props) => <CustomDrawer {...props}/>} 
      screenOptions={({navigation}) => ({
        
        
        drawerStyle: {
          width: '100%',
          
        },
        headerMode: 'screen',
        // header = {(props) => <CustomTabBar {...props} />}
        
        
        headerStyle: {
          backgroundColor: '#54700b',

          
          
        },
        
        headerLeft: () => (
          <View style={{left: 5}}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="md-list" 
                
                />
            </TouchableOpacity>
          </View>
          
        ),
        
        headerTitle:'FastNews',

        headerRight: () => (
          <View style={{flexDirection: 'row', right: 5,}}>
            <TouchableOpacity style={{right: 5}} onPress={() => navigation.navigate('search')}>
              <Ionicons 
                size={30} 
                // color="white" 
                name="search" 
                
                
                />
                
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user')}>
              <Ionicons 
                  size={30} 
                  // color="white" 
                  name="person-circle" 
                  
                  />
            </TouchableOpacity>
            
          </View>
          
          
        ),
        
        
        
      })}
    >
      <Drawer.Screen name="Drawer" component={BottomTabNavigator} 
        options={({navigation ,route}) => {
          // const stackNavigation = navigation.getParent('stack')
          const routeName = getFocusedRouteNameFromRoute(route);
          console.log(routeName);
          // // stackNavigation.setOptions({
          // //   headerShown: routeName == 'Tin Tức',
            
          // // })
         
          return {
            swipeEnabled: routeName == 'Tin Tức',
            headerShown: routeName == 'Tin Tức' || 'undefined',
            
            
            
            
          };
       }}
      />
    {/* <Drawer.Screen name="search" component={SearchScreen} 
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
    <Drawer.Screen name="NewsDetail" component={NewsDetail} 
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
    <Drawer.Screen name="user" component={UserScreen} 
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
    <Drawer.Screen name="web" component={WebScreen} 
      options={({navigation}) => ({
        swipeEnabled: false,
        
        headerStyle: {
          backgroundColor: '#fff'
        },
        headerLeft: () => null,
        headerRight: () => null,
        headerTitle: () => null,
      })
    }
    /> */}
    </Drawer.Navigator>
    
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({
  containerinput:{
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  input: {
    width: '90%',
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    color: "#000",
    borderWidth: 1,
  },
  close:{
    
    marginLeft: 5,
    
  }
})