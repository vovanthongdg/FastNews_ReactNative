import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import FlatCard from '../Card/FlatCard';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const SearchModel = ({ visible, data, notFound }) => {
  const navigation = useNavigation();
  if (!visible) return null;

  if (visible && data.length === 0 && !notFound) return null;

  if (notFound)
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          {notFound}
        </Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='always'
        // scrollEnabled='false'
      >
        {data.map(item => (
          <FlatCard
            item={item}
            key={item.idArticle+1}
            onPress={() => navigation.navigate('NewsDetail', { item })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    // maxHeight: height*2.5,
    // zIndex: 1,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default SearchModel;