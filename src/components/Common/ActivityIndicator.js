import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import Lottie from 'lottie-react-native';

const ActivityIndicator = ({ visible }) => {
  
    
      if (!visible) return null;    
  
  // const animationProgress = useRef(new Animated.Value(0))
  

  // useEffect(() => {
  //   Animated.timing(animationProgress.current, {
  //     toValue: 1,
  //     duration: 5000,
  //     easing: Easing.linear,
  //     useNativeDriver: false
  //   }).start();
  // }, [])


  return (
    <View style={styles.container}>
      <Lottie
      
        // progress={animationProgress.current}
        // duration={5000}
        source={require('../../assets/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default ActivityIndicator;
