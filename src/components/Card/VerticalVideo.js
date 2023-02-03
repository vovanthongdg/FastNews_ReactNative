import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import GetData from '../../service/api/GetData';
import ViewMore from './ViewMore';
import FlatCardVideo from './FlatCardVideo';

const VerticalVideo = ({ item, onPress }) => {
  // const navigation = useNavigation();
  const handleViewMore = async category => {
    const result = await GetData.getByCategory(category);
    navigation.navigate('NewsList', result);
  };
  if (item.type === 'viewMore') {
    return <ViewMore onPress={() => handleViewMore(item.nameCategory)} />;
  }

  return (
    <FlatCardVideo
      
      item={item}
      onPress={onPress}
     />
    )
};

const styles = StyleSheet.create({
  container: {},
});

export default VerticalVideo;
