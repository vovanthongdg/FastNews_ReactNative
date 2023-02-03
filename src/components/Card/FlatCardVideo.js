import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import Title from '../Common/Title';
import Subtitle from '../Common/Subtitle';
import VideoPlayer from 'react-native-video-player'
import {windowWidth, windowHeight} from '../../utils/Dimensions'

const FlatCardVideo = ({ item, onPress }) => {
  const { urlImage, urlVideo, title, summary } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        
            <VideoPlayer
                video={{ uri: urlVideo }} 
            
                style={styles.videoStyle} 
                // videoWidth={1500}
                // videoHeight={1000}
                showDuration={true}             
                defaultMuted={false}             
                thumbnail={{ uri: urlImage }}
                // fullScreen={true}
                fullScreenOnLongPress={true}
                pauseOnPress={true}
                disableFullscreen={false}
                fullscreen={true}
                resizeMode={'cover'}
                
                
                />
            
        
        <View style={styles.contentContainer}>
            {/* <Title>{title}</Title> */}
            <Text
                numberOfLines={2}
                style={{ 
                    fontWeight: 'bold', 
                    fontSize: 20,
                    color: '#000'
                }}
            >
                {title}
            </Text>
            {/* <Text 
                numberOfLines={2} style={{ fontSize: 15 }}>
                {summary}
            </Text> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    
    overflow: 'hidden',
    marginBottom: 10,
    // height: 80,
  },
  videoView: {
    // flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
},
videoStyle: {
    alignSelf: 'center',
    width: windowWidth,
    height: windowWidth/2,
    

    // resizeMode: 'center'
    },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
    // backgroundColor: '#000'
  },
});

export default FlatCardVideo;
