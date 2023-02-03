import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Subtitle from '../Common/Subtitle';
import Title from '../Common/Title';



const BlockCard = ({ style, imageStyle, item, onPress }) => {
  const { urlImage, title, summary } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={{ uri: urlImage }} style={[styles.image, imageStyle]} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{summary}</Subtitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
