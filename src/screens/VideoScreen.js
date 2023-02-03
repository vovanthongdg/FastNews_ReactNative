import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import VideoPlayer from 'react-native-video-player'
import VideosList from '../components/List/VideosList'
import GetData from '../service/api/GetData'



const VideoScreen = ({data}) => {

  const [video, setVideo] = useState([])

  const getAllVideo = async() => {
    const allVideo = await GetData.getVideo()
    
    setVideo(allVideo)
    
    // console.log(allNews.news);
  };
  
  useEffect(() => {
    getAllVideo()
  
  }, []);

  
  return (
    <VideosList data={video}></VideosList>
      
      
    
  )
}

export default VideoScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FF',
    
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  }
})