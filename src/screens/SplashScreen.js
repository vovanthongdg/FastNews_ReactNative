import React from 'react';
import { SafeAreaView,Image,View,Text } from 'react-native';
import * as Progress from 'react-native-progress';
import logo from '../assets/img/logo.png'

export default function SplashScreen({navigation}){
    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('stack')
        },2000)
    },[])
    return(
    <SafeAreaView
        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
    >
        <Image source={logo} style={{width:250,height:250}}/>
        <View
            style={{
                width:'100%',
                flexDirection:'column',
                position:"absolute",
                bottom:30,
                justifyContent:'center',
                alignItems:'center',
            }}
        >
        <Progress.Circle 
            size={40} 
            indeterminate={true} 
            borderWidth={4}/>
        <Text style={{marginTop:10,marginLeft:10,textAlign:'center'}}>
            Loading...
        </Text>
        </View>
    </SafeAreaView>
    )
}