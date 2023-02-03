import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, Icon } from 'react-native-vector-icons/Ionicons';

const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Icon.Button
        name='close-circle-outline'
        size={25}
        color='white'
        iconStyle={styles.icon}
        onPress={onPress}
      ></Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    backgroundColor: 'rgba(92, 90, 91, 0.7)',
    padding: 10,
    borderRadius: 50,
  },
});

export default Close;
