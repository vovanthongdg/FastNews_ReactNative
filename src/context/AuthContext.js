import AsyncStorage from '@react-native-async-storage/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { Alert } from 'react-native';
import GetData from '../service/api/GetData';
import { useNavigation } from '@react-navigation/native';


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rendering, setRendering] = useState(false);

  const register = (email, username, password) => {
    setIsLoading(true);
    GetData.signUp(email, username, password)
      .then(res => {
        let userInfo = res.user;

        if(res.success) {
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          // console.log(userInfo)
          Alert.alert(res.message)
        }else{
          Alert.alert(res.message)
        }
        setIsLoading(false);
        console.log(res);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (username, password) => {
    setIsLoading(true);

    GetData.login(username,password)
      .then(res => {
        let userInfo = res.user
        let name = res.user.username;
        // console.log(userInfo);
        // setUserInfo(userInfo);
        // AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        if(res.success) {
          // console.log(infoUser);
          console.log(userInfo.name)
          setUserInfo(userInfo);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          navigation.navigate('user')
          
      } else {
        Alert.alert(res.message)
      }
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    // axios
    //   .post(
    //     `${BASE_URL}/logout`,
    //     {},
    //     {
    //       headers: {Authorization: `Bearer ${userInfo.access_token}`},
    //     },
    //   )
    //   .then(res => {
    //     console.log(res.data);

    try {
      
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        console.log(userInfo)
        navigation.navigate('user')
        setIsLoading(false);
    
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
    
        
    //   })
    //   .catch(e => {
    //     console.log(`logout error ${e}`);
    //     setIsLoading(false);
    //   });
  };

  const isLoggedIn = async () => {
    setRendering(true);
    try {

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      // let userInfo2 = userInfo1.user;
      // let userInfo3 = userInfo2.username;
      // console.log(userInfo.username)

      if (userInfo) {
        setUserInfo(userInfo);
        // navigation.navigate('user')
      }

      setRendering(false);
    } catch (e) {
      setRendering(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        rendering,
        register,
        login,
        logout,
        isLoggedIn
      }}>
      {children}
    </AuthContext.Provider>
  );
};