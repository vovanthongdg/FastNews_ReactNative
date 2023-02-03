import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Title from '../Common/Title';
import Subtitle from '../Common/Subtitle';

const FlatCard = ({ item, onPress }) => {
  const { urlImage, title, summary } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {
          item && <Image source={{ uri: urlImage }} style={styles.image} />
        }
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

export default FlatCard;
