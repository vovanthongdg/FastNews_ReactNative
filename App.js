/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Animated,
  StyleSheet,
  useColorScheme,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HotScreen from './src/screens/HotScreen';
import LawScreen from './src/screens/LawScreen';
import HealthScreen from './src/screens/HealthScreen';
import FollowScreen from './src/screens/FollowScreen';

import SportVNScreen from './src/screens/SportVNScreen';

import  Icon  from 'react-native-vector-icons/Ionicons';

import SettingScreen from './src/screens/SettingScreen';
import { ScreenStackHeaderConfig, ScreenStackHeaderSearchBarView } from 'react-native-screens';
import CustomTabBar from './src/components/CustomTabBar';
import { Surface } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import StackNavigator from './src/navigation/StackNavigator';
import Categories from './src/components/Categories';
import SearchScreen from './src/screens/SearchScreen';

import TopTabNavigator from './src/navigation/TopTabNavigator';
import CarScreen from './src/screens/CarScreen';
import useNews from './src/hooks/useNews';
import GetData from './src/service/api/GetData';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import VideoScreen from './src/screens/VideoScreen';
import LoginScreen from './src/screens/LoginScreen';
import { AuthProvider } from './src/context/AuthContext';



const Tabs = createMaterialTopTabNavigator();
const TabsScreen = () => (
  <NavigationContainer>
  <Tabs.Navigator 
  >
    
    <Tabs.Screen  name="Page1" component={HotScreen} />
    <Tabs.Screen name="Page2" component={LawScreen} />
    <Tabs.Screen name="Page3" component={HealthScreen} />
    <Tabs.Screen name="Page4" component={FollowScreen} />
    
  
  </Tabs.Navigator>
  </NavigationContainer>
)

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
      screenOptions={{
        headerLeftContainerStyle: true,
        headerLeftLabelVisible: false,
      }}
    >
    {/* <Drawer.Screen name="Tabs" component={TabsScreen} /> */}
    <Drawer.Screen name="Drawer-NewScreen" component={NewScreen} />
    <Drawer.Screen name="Drawer-SportVNScreen" component={SportVNScreen} />
  </Drawer.Navigator>
)


// const renderScene = SceneMap({
//   first: HotScreen,
//   second: HealthScreen,
// });

// function TabViewOk() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'Hot' },
//     { key: 'second', title: 'Second' },
//   ]);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
//   );
//   }

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (

  
  
  <HomeStack.Navigator
    screenOptions={{  
      
      
       
      headerStyle: {
        backgroundColor: '#9AC4F8'
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
      animationEnabled: true,
      headerTitleStyle : {
        fontWeight: 'bold'
      },
      headerLeft: () => (
        <Icon.Button name= "ios-menu" size={25} 
          backgroundColor="#9AC4F8" onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerRight: () => (
        <Icon.Button name= "ios-menu" size={25} 
          backgroundColor="#9AC4F8" onPress={() => navigation.openDrawer()}
        ></Icon.Button>
      ),
      headerTitleAlign: 'center',
      headerTitle: () => (<TabsScreen/>),
      headerMode: 'screen',
      
      
      

      
    }}
  >
    
    
    <HomeStack.Screen name='Homecc' component={TabViewOk} 
      options={{
        
      }}
    />

  <HomeStack.Screen name='Setting' component={SettingScreen} 
      
    />
  
  </HomeStack.Navigator>
  
)








const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [
    lawNews,
    healthNews, 
    sportVnNews, 
    culinaryNews, 
    financeNews, 
    carNews, 
    travelNews,
    realEstateNews,
    educationNews] = useNews()

  

  return (
      <Provider store={Store}>
      
      <NavigationContainer>
        
        <StackNavigator/>
        
      </NavigationContainer>
      
      </Provider>
      // <>
      // <LoginScreen/>
      // </>
     

  );
};

const styles = StyleSheet.create({
  
});

export default App;
